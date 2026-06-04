// @ts-check

import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

export const test = base.extend<{ 
    homePage: HomePage;
    scrollPage: (url: string) => Promise<void>;
 }>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    scrollPage: async ({ page }, use) => {
        const scrollAndLoad = async(url: string) => {
            // Disable CSS animations and transitions so screenshots are stable
            await page.emulateMedia({ reducedMotion: 'reduce' });

            await page.goto(url);

            // #contact is the last section — if it's visible, React has fully rendered the page
            await page.waitForSelector('#contact', { state: 'visible' });

            // Scroll through the full page so every RevealSection's
            // IntersectionObserver fires and sets visible = true
            await page.evaluate(async () => {
                await new Promise<void>((resolve) => {
                    let totalHeight = 0;
                    const distance = 100;
                    const timer = setInterval(() => {
                        const scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;
                        if (totalHeight >= scrollHeight) {
                            clearInterval(timer);
                            resolve();
                        }
                    }, 100);
                });
            });

            await page.evaluate(() => window.scrollTo(0, 0));

            // Wait for all reveal transitions to finish.
            // Worst case: reducedMotion transition (0.4s) + longest stagger delay
            // (SkillsGrid i*70 or Projects i*80, ~4 items => ~280-320ms) = ~720ms.
            await page.waitForTimeout(1000);
        };

        await use(scrollAndLoad);
    }
});

export { expect } from '@playwright/test';
