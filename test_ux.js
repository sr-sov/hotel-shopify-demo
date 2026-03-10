const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const fileUrl = 'file://' + __dirname + '/index.html';
  await page.goto(fileUrl);

  console.log('Testing keyboard navigation on room cards...');

  // Tab to the first room card
  await page.keyboard.press('Tab');

  console.log('Clicking the first room card to open modal...');
  const firstRoomCard = page.locator('.room-card').first();
  await firstRoomCard.click();

  console.log('Checking modal visibility...');
  await page.waitForSelector('#roomModal.active', { state: 'visible' });

  const modalVisible = await page.evaluate(() => {
    return document.getElementById('roomModal').classList.contains('active');
  });

  if (modalVisible) {
    console.log('✅ Room modal is visible.');
  } else {
    console.error('❌ Room modal is NOT visible.');
  }

  console.log('Testing escape key to close modal...');
  await page.keyboard.press('Escape');

  // wait a bit for transition
  await page.waitForTimeout(500);

  const modalHidden = await page.evaluate(() => {
    return !document.getElementById('roomModal').classList.contains('active');
  });

  if (modalHidden) {
    console.log('✅ Room modal was closed via Escape key.');
  } else {
    console.error('❌ Room modal was NOT closed via Escape key.');
  }

  console.log('Testing lightbox keyboard interaction...');

  // Re-open modal
  await firstRoomCard.click();
  await page.waitForSelector('#roomModal.active', { state: 'visible' });

  console.log('Clicking view all photos button...');
  await page.locator('#viewAllPhotosBtn').click();

  console.log('Checking lightbox visibility...');
  await page.waitForSelector('#lightbox.active', { state: 'visible' });

  const lightboxVisible = await page.evaluate(() => {
    return document.getElementById('lightbox').classList.contains('active');
  });

  if (lightboxVisible) {
    console.log('✅ Lightbox is visible.');
  } else {
    console.error('❌ Lightbox is NOT visible.');
  }

  console.log('Testing ArrowRight key...');
  const initialIndex = await page.evaluate(() => currentLightboxIndex);
  await page.keyboard.press('ArrowRight');
  const newIndex = await page.evaluate(() => currentLightboxIndex);

  if (newIndex > initialIndex) {
    console.log(`✅ Lightbox advanced to next image via ArrowRight. (${initialIndex} -> ${newIndex})`);
  } else {
    console.error('❌ Lightbox did NOT advance to next image.');
  }

  console.log('Testing Escape key to close lightbox...');
  await page.keyboard.press('Escape');

  const lightboxHidden = await page.evaluate(() => {
    return !document.getElementById('lightbox').classList.contains('active');
  });

  if (lightboxHidden) {
    console.log('✅ Lightbox was closed via Escape key.');
  } else {
    console.error('❌ Lightbox was NOT closed via Escape key.');
  }

  await browser.close();
})();
