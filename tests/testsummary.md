# ✅ Test Summary Report

**Project:** CleanCity Web App – Login Functionality  
**Tester:** Bryan Mwalwala  
**Date:** July 8, 2025  

---

## 1. 🔧 Test Environment

| Component           | Details                                |
|---------------------|----------------------------------------|
| OS                  | macOS 13.7.6 (Darwin)                  |
| Python              | 3.13.3                                 |
| Pytest              | 7.1.2                                  |
| Browser             | Safari (System Default)                |
| Application URL     | `http://localhost:3000`                |
| Test Code           | `tests/tests/test_login.py`            |
| Report Generated    | `reports/report.html`                  |
| Logs Captured       | `console.log`                          |

---

## 2. 🧪 Tools Used

| Tool              | Purpose                                |
|-------------------|----------------------------------------|
| `pytest`          | Test execution framework               |
| `pytest-html`     | HTML reporting                         |
| `Selenium`        | UI automation (via Page Object Model)  |
| `console.log`     | CLI output of test session             |

---

## 3. ✅ Test Results Summary

| Test Case                                                                 | Status  | Notes                                                |
|---------------------------------------------------------------------------|---------|------------------------------------------------------|
| `test_login_with_credentials[user@cleancity.com-password123-True-False]` | ✅ Pass | User login works with correct credentials            |
| `test_login_with_credentials[admin@cleancity.com-admin123-True-False]`   | ✅ Pass | Admin login works with correct credentials           |
| `test_login_with_credentials[-password123-False-False]`                  | ✅ Pass | Empty email input handled as expected                |
| `test_login_with_credentials[user@cleancity.com--False-False]`           | ✅ Pass | Empty password input handled as expected             |
| `test_navigation_to_register`                                            | ✅ Pass | Navigation to register page is functional            |
| `test_login_with_credentials[invalid@email.com-wrongpass-False-True]`    | ❌ Fail | Redirects to `/profile` instead of showing error     |

> 💡 **Summary**: 5 passed, 1 failed (documented as a known issue), 42 warnings  
> ⏱️ **Duration**: 359 seconds (approx. 6 minutes)

---

## 4. 🚨 Known Issues

### Login Behavior Inconsistencies

| Issue                             | Details                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| **Invalid Credentials Handling** | Expected: Error message display<br>Current: Redirects to `/profile`     |
| **Priority**                     | High                                                                   |
| **Affected Test**                | `test_login_with_credentials[invalid@email.com-wrongpass-False-True]` |

See: [`KNOWN_ISSUES.md`](./KNOWN_ISSUES.md)

---

## 5. 🔍 Authentication Test Coverage (Section 4.1)

| Area                            | Coverage Status | Evidence/Test                           |
|----------------------------------|------------------|------------------------------------------|
| ✅ User Registration Testing     | ✅ Achieved      | `test_navigation_to_register` confirms registration page is reachable |
| ✅ User Login Testing           | ✅ Achieved      | `test_login_with_credentials[...]` validates successful and failed login |
| ✅ Password Validation Testing  | ✅ Achieved      | Empty password case tested and handled   |
| ⛔ Session Management Testing    | ❌ Not Covered   | No tests verifying session persistence, cookies, or logout behavior |

---

## 6. 📁 Attached files

| File                         | Description                              |
|------------------------------|------------------------------------------|
| `reports/report.html`        | Full test execution report (HTML)        |
| `console.log`                | Captured command-line test output        |
| `tests/tests/test_login.py`  | Test logic and parameterization          |
| `.pytest_cache/`             | Pytest metadata and last failed state    |
| `KNOWN_ISSUES.md`            | Documentation of application bugs        |

---

## 7. 📌 Recommendations

| Priority | Action Item                                      | Assigned To    |
|----------|--------------------------------------------------|----------------|
| High     | Fix invalid credential login redirection logic   | Backend Team   |
| Medium   | Add frontend form validation (e.g., empty fields)| Frontend Team  |
| Low      | Improve visibility of login error messages        | UI/UX Team     |

---

## 8. ✅ Sign-Off

**Tester:** Bryan Mwalwala  
**Email:** [Your Email Here]  
**Date:** July 8, 2025

---

### 📦 How to Regenerate This Report

```bash
# Generate HTML report
pytest --html=reports/report.html --self-contained-html > console.log
