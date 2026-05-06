const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 4000 }
  });
  
  // Screenshot homepage
  const page = await context.newPage();
  await page.goto('https://www.prettylittlemarketer.com/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  
  // Full page screenshot
  await page.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_homepage.png', fullPage: true });
  console.log('Homepage screenshot saved');
  
  // Also get a viewport screenshot for cleaner view
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_homepage_view.png' });
  console.log('Homepage viewport screenshot saved');
  
  // Try to navigate to a detail page (membership or about)
  const links = await page.$$('a');
  let detailUrl = null;
  for (const link of links) {
    const href = await link.getAttribute('href');
    if (href && href.startsWith('/') && href !== '/' && !href.includes('#')) {
      detailUrl = href;
      break;
    }
  }
  
  if (detailUrl) {
    const detailPage = await context.newPage();
    await detailPage.goto('https://www.prettylittlemarketer.com' + detailUrl, { waitUntil: 'networkidle', timeout: 60000 });
    await detailPage.waitForTimeout(3000);
    await detailPage.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_detail.png', fullPage: true });
    console.log('Detail page screenshot saved: ' + detailUrl);
    await detailPage.close();
  }
  
  await page.close();
  await browser.close();
  console.log('Done');
})();
