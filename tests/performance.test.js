// src/tests/performance.test.js
const { test, expect } = require('@playwright/test');

test.describe('Performance Tests', () => {
  test('Page should load in under 3 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('http://localhost:3000');
    const duration = Date.now() - start;

    console.log(`⏱ Load time: ${duration}ms`);
    expect(duration).toBeLessThanOrEqual(3000);
  });

  test('Form should respond within 1 second', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Adjust selectors based on your actual form
    await page.fill('#fullName', 'Test User');
    await page.selectOption('#location', 'Nairobi');
    await page.click('input[value="General"]');

    const start = Date.now();
    await Promise.all([
      page.waitForLoadState('networkidle'),
      page.click('#pickup-form button[type="submit"]'),
    ]);
    const duration = Date.now() - start;

    console.log(`⚡️ Interaction response: ${duration}ms`);
    expect(duration).toBeLessThanOrEqual(1000);
  });
});
