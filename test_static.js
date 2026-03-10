const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const fileUrl = 'file://' + __dirname + '/index.html';
  await page.goto(fileUrl);

  console.log('Verifying static HTML content...');

  const htmlContent = fs.readFileSync('index.html', 'utf8');

  const hasDialogRole = htmlContent.includes('role="dialog"');
  const hasAriaModal = htmlContent.includes('aria-modal="true"');
  const hasAriaLabel = htmlContent.includes('aria-label="Close Lightbox"');
  const hasFocusVisible = htmlContent.includes('*:focus-visible {');

  if (hasDialogRole && hasAriaModal && hasAriaLabel && hasFocusVisible) {
    console.log('✅ All static string matching passed.');
  } else {
    console.error('❌ Static string matching failed.');
    if (!hasDialogRole) console.error('- Missing role="dialog"');
    if (!hasAriaModal) console.error('- Missing aria-modal="true"');
    if (!hasAriaLabel) console.error('- Missing aria-label="Close Lightbox"');
    if (!hasFocusVisible) console.error('- Missing *:focus-visible {');
  }

  await browser.close();
})();
