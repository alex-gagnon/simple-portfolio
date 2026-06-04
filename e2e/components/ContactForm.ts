import { type Locator } from '@playwright/test';

export interface ContactFormFields {
    name?: string;
    email?: string;
    message?: string;
}

export class ContactForm {
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly messageField: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    // The error <p> has no role/data-testid — scoped to the form container
    // to avoid matching body text elsewhere. Adding role="alert" to the
    // Typography in ContactForm.tsx would be the cleaner long-term approach.
    readonly errorMessage: Locator;

    // Accept a Locator (not Page) so this can be scoped to any container —
    // pass page.locator('form') from the parent page object.
    constructor(container: Locator) {
        this.nameField = container.getByLabel('Name');
        this.emailField = container.getByLabel('Email');
        this.messageField = container.getByLabel('Message');
        this.submitButton = container.getByRole('button', { name: 'Send message' });
        this.successMessage = container.getByText('Message sent!');
        this.errorMessage = container.locator('.MuiTypography-body1').last();
    }

    async fill({ name, email, message }: ContactFormFields) {
        if (name !== undefined)    await this.nameField.fill(name);
        if (email !== undefined)   await this.emailField.fill(email);
        if (message !== undefined) await this.messageField.fill(message);
    }

    async submit() {
        await this.submitButton.click();
    }

    async fillAndSubmit(fields: ContactFormFields) {
        await this.fill(fields);
        await this.submit();
    }
}
