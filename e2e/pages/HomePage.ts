import { expect, type Locator, type Page } from '@playwright/test';
import { ContactForm } from '../components/ContactForm';

type NavLabel = 'About' | 'Experience' | 'Projects' | 'Contact';

export class HomePage {
    readonly page: Page;
    readonly heroHeading: Locator;
    readonly menu: Locator;
    readonly toggleHoverTheme: Locator;
    readonly contactLink: Locator;
    readonly floatingNav: Locator;

    // Scoping this to the MUI menu panel means mobileNavLink() won't
    // accidentally match the (CSS-hidden) desktop links in the same DOM.
    readonly mobileMenuPanel: Locator;

    readonly contactForm: ContactForm;

    constructor(page: Page) {
        this.page = page;
        this.heroHeading = page.locator('h1');
        this.menu = page.getByRole('button', { name: 'menu' });
        this.toggleHoverTheme = page.getByTestId('toggleHoverTheme');
        this.contactLink = page.getByRole('link', { name: 'Email Address' });
        this.floatingNav = page.getByLabel('Scroll to top');
        this.mobileMenuPanel = page.locator('[id="menu-appbar"]');
        this.contactForm = new ContactForm(page.locator('form'));
    }

    async goto() {
        await this.page.goto('/');
    }

    // Returns a locator — callers can .click(), .toBeVisible(), .hover(), etc.
    navLink(name: NavLabel): Locator {
        return this.page.getByRole('link', { name });
    }

    // Same, but scoped inside the mobile menu panel.
    mobileNavLink(name: NavLabel): Locator {
        return this.mobileMenuPanel.getByRole('link', { name });
    }

    async clickNavLink(name: NavLabel) {
        return this.navLink(name).click();
    }

    async clickMobileNavLink(name: NavLabel) {
        return this.mobileNavLink(name).click();
    }

    async clickMenu() {
        await this.menu.click();
    }

    async clickHoverToggle() {
        await this.toggleHoverTheme.click();
    }

    async clickContactLink() {
        await this.contactLink.click();
    }

    async clickFloatingNav() {
        await this.floatingNav.click();
    }
}
