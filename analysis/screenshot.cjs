const { chromium } = require('playwright');

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
  
  // Get viewport screenshot for cleaner view
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_homepage_view.png' });
  console.log('Homepage viewport screenshot saved');
  
  // Get all internal links from homepage
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href^="/"]'))
      .map(a => a.getAttribute('href'))
      .filter(h => h && h.length > 1 && !h.includes('#'))
      .filter((v, i, a) => a.indexOf(v) === i);
  });
  console.log('Found links:', links);
  
  // Screenshot detail page
  const detailUrl = links.find(l => l.includes('membership') || l.includes('store') || l.includes('hub')) || links[0];
  if (detailUrl) {
    const detailPage = await context.newPage();
    await detailPage.goto('https://www.prettylittlemarketer.com' + detailUrl, { waitUntil: 'networkidle', timeout: 60000 });
    await detailPage.waitForTimeout(3000);
    await detailPage.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_detail.png', fullPage: true });
    await detailPage.screenshot({ path: '/Users/linglingqi/cv/analysis/screenshot_detail_view.png' });
    console.log('Detail page screenshot saved: ' + detailUrl);
    await detailPage.close();
  }
  
  await page.close();
  await browser.close();
  console.log('Done');
})();
