from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import os

class LoginPage:
    """Page Object Model for the Login page"""

    # Configuration
    URL = "http://localhost:3000/login"
    SCREENSHOT_DIR = "test_screenshots"

    # Updated element locators
    LOCATORS = {
        'email_field': [
            (By.ID, "email"),
            (By.NAME, "email"),
            (By.CSS_SELECTOR, "input[type='email']")
        ],
        'password_field': [
            (By.ID, "password"),
            (By.NAME, "password"),
            (By.CSS_SELECTOR, "input[type='password']")
        ],
        'login_button': [
            (By.CSS_SELECTOR, "button[type='submit']"),
            (By.ID, "login-button")
        ],
        'error_message': [
            (By.CSS_SELECTOR, ".error-message"),
            (By.ID, "login-error"),
            (By.XPATH, "//div[contains(@class,'error')]")
        ],
        'successful_login_indicator': [
            (By.XPATH, "//h1[contains(text(), 'Profile')]"),
            (By.ID, "profile-page"),
            (By.CSS_SELECTOR, "[data-testid='profile']")
        ],
        'register_link': [
            (By.LINK_TEXT, "Register"),
            (By.PARTIAL_LINK_TEXT, "Sign up"),
            (By.CSS_SELECTOR, "a[href*='register']"),
            (By.ID, "register-link")
        ]
    }

    def __init__(self, driver):
        self.driver = driver
        os.makedirs(self.SCREENSHOT_DIR, exist_ok=True)

    def load(self):
        """Load the login page directly"""
        self.driver.get(self.URL)
        self._wait_for_page_ready()
        assert self.is_on_login_page(), "Failed to load login page"
        self._take_screenshot("login_page_loaded")
        return True

    def login(self, email, password):
        """Perform login with credentials"""
        try:
            self.load()

            email_field = self._find_element('email_field')
            password_field = self._find_element('password_field')
            login_button = self._find_element('login_button')

            email_field.clear()
            email_field.send_keys(email)
            password_field.clear()
            password_field.send_keys(password)

            self._safe_click(login_button)
            time.sleep(2)  # Allow for page transition
            self._take_screenshot("after_login_attempt")
            return True

        except Exception as e:
            self._debug_page(f"Login failed: {str(e)}")
            return False

    def get_error_message(self):
        """Returns error text if present, empty string otherwise"""
        try:
            return self._find_element('error_message', timeout=3).text
        except:
            return ""

    def is_login_successful(self):
        """Check both URL and profile elements"""
        try:
            on_profile_page = "profile" in self.driver.current_url.lower()
            has_profile_element = self._find_element(
                'successful_login_indicator',
                timeout=2
            ).is_displayed()
            return on_profile_page and has_profile_element
        except:
            return False

    def is_on_login_page(self):
        """Check if currently on login page"""
        try:
            self._find_element('email_field', timeout=2)
            return "login" in self.driver.current_url
        except:
            return False

    def navigate_to_register(self):
        """Navigate to registration page"""
        try:
            register_link = self._find_element('register_link')
            register_link.click()
            WebDriverWait(self.driver, 5).until(
                lambda d: "register" in d.current_url.lower()
            )
            self._take_screenshot("after_register_navigation")
            return True
        except Exception as e:
            self._debug_page(f"Registration navigation failed: {str(e)}")
            return False

    # Helper methods
    def _find_element(self, element_key, timeout=10):
        """Find element using predefined locators with retry"""
        for locator in self.LOCATORS[element_key]:
            try:
                return WebDriverWait(self.driver, timeout).until(
                    EC.visibility_of_element_located(locator))
            except:
                continue
        raise NoSuchElementException(
            f"Could not find element with any locator for {element_key}")

    def _safe_click(self, element, attempts=3):
        """Click with retry and JS fallback"""
        for i in range(attempts):
            try:
                element.click()
                return
            except Exception as e:
                if i == attempts - 1:
                    self.driver.execute_script("arguments[0].click();", element)
                time.sleep(1)

    def _wait_for_page_ready(self, timeout=10):
        """Wait for page to be fully ready"""
        try:
            WebDriverWait(self.driver, timeout).until(
                lambda d: d.execute_script(
                    'return document.readyState === "complete"'
                )
            )
            time.sleep(1)  # Additional buffer
        except:
            pass

    def _take_screenshot(self, name):
        """Save screenshot for debugging"""
        try:
            path = os.path.join(self.SCREENSHOT_DIR, f"{name}_{int(time.time())}.png")
            self.driver.save_screenshot(path)
        except:
            pass

    def _debug_page(self, context=""):
        """Print debug information"""
        print(f"\n=== DEBUG: {context} ===")
        print(f"Current URL: {self.driver.current_url}")
        print(f"Page Title: {self.driver.title}")
        print("Page source (first 500 chars):")
        print(self.driver.page_source[:500])
        self._take_screenshot("debug_failure")
