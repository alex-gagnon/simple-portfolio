// @ts-check

import { test, expect } from '../fixtures/baseTest';
import { AxeBuilder } from '@axe-core/playwright';


test.describe('Home Page', () => {
  test('has title', async ({ homePage }) => {
    await expect(homePage.heroHeading).toBeVisible();
  });

  test('floating nav appears after scrolling and returns to top on click', async ({ homePage }) => {
    await expect(homePage.floatingNav).toHaveCSS('opacity', '0');

    await homePage.page.evaluate(() => window.scrollBy(0, 300));
    await expect(homePage.floatingNav).toHaveCSS('opacity', '1');

    await homePage.clickFloatingNav();
    await homePage.page.waitForFunction(() => window.scrollY === 0);
  });

});

// Mobile menu
test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 300, height: 844 } });

  test('opens and closes hamburger menu', async ({ homePage}) => {
    await homePage.clickMenu();
    await expect(homePage.mobileNavLink('About')).toBeVisible();

    await homePage.clickMobileNavLink('About')
    await expect(homePage.mobileNavLink('About')).not.toBeVisible();
  });
});


test.describe('Accessibility Scans', () => {
  test('homepage should pass basic WCAG rules', async ({ homePage }) => {
    // Let reveal-section transitions finish before scanning — on Mobile Chrome the
    // IntersectionObserver fires immediately and axe can catch elements mid-opacity-fade
    await homePage.page.waitForTimeout(1000);

    const accessibilityScaneResults = await new AxeBuilder({ page: homePage.page })
      .withTags(['wcag2', 'wcag2aa', 'best-practice'])
      .analyze();

    expect(accessibilityScaneResults.violations).toEqual([]);
  });

  // Keyboard navigation
  // Safari requires OS-level "Full Keyboard Access"; mobile/Edge headless don't Tab to links
  test('nav links are reachable by keyboard', async ({ homePage, browserName, isMobile }, testInfo) => {
    test.skip(
      browserName === 'webkit' || !!isMobile || testInfo.project.name === 'Microsoft Edge',
      'Mobile, Safari, and Edge headless tab-to-link navigation not applicable'
    );
    await homePage.page.keyboard.press('Tab');
    const hasFocus = await homePage.page.evaluate(
      () => document.activeElement !== null && document.activeElement !== document.body
    );
    expect(hasFocus).toBe(true);
  });
});


test.describe('Visual Regressions - Dynamic Content', () => {
  // Double-navigation (homePage + scrollPage) can make Firefox slow under parallelism
  test.setTimeout(90_000);
  test('homepage layout snapshot matches baseline', async ({ homePage, scrollPage }) => {
    await scrollPage('/');

    await expect(homePage.page).toHaveScreenshot('homepage.png', {
      maxDiffPixelRatio: 0.02,
      fullPage: true
    });
  });
});


test.describe('Local Storage Persistance', () => {
  test('hover toggle state persists across reload', async ({ homePage }) => {
    await expect(homePage.toggleHoverTheme).toHaveAttribute('aria-label', 'Disable hover effects')
    await homePage.clickHoverToggle();

    await homePage.page.reload();
    await expect(homePage.toggleHoverTheme).toHaveAttribute('aria-label', 'Enable hover effects');
  });
});