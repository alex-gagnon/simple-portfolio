// @ts-check

import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

export const test = base.extend<{ 
    homePage: HomePage;
    scrollPage: (url: string) => Promise<void>;
 }>({
    homePage: async ({ page }, use) => {
        // Disable all CSS transitions and animations so tests don't race against
        // reveal/fade timing. Registered before goto() so it runs on every navigation.
        await page.addInitScript(() => {
            const style = document.createElement('style');
            style.textContent = `*, *::before, *::after {
                animation-duration: 0s !important;
                animation-delay: 0s !important;
                transition-duration: 0s !important;
                transition-delay: 0s !important;
            }`;
            document.head.appendChild(style);
        });
        const homePage = new HomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    scrollPage: async ({ page }, use) => {
        const scrollAndLoad = async(url: string) => {
            await page.goto(url);

            // #contact is the last section — if it's visible, React has fully rendered the page
            await page.waitForSelector('#contact', { state: 'visible' });

            // Scroll in viewport-height steps so every RevealSection's IntersectionObserver
            // fires. One rAF yield per step lets the observer process before moving on.
            // With animations disabled by the homePage init script this completes in ~100ms
            // vs the previous 100px/100ms interval approach (~5s for a full-length page).
            await page.evaluate(async () => {
                const vh = window.innerHeight;
                for (let y = 0; y < document.body.scrollHeight; y += vh) {
                    window.scrollTo(0, y);
                    await new Promise<void>(r => requestAnimationFrame(() => r()));
                }
                window.scrollTo(0, 0);
            });
        };

        await use(scrollAndLoad);
    }
});

export { expect } from '@playwright/test';
