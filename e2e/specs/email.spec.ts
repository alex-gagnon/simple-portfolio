import { test, expect } from '../fixtures/baseTest';


test.describe('Email Form - Network Mocking', () => {
    test('shows success state after valid submission', async({ homePage }) => {
        await homePage.page.route('**/submit-form.com/**', route => route.fulfill({ status: 200, body: '{}' }));

        await homePage.contactForm.fillAndSubmit({ name: 'testName', email: 'a@b.com', message: 'Hello there'});
        await expect(homePage.page.getByText('Message sent!')).toBeVisible();
    });

    test('shows error when submission fails', async ({ homePage }) => {
        await homePage.page.route('**/submit-form.com/**', route => route.fulfill({ status: 500 }));

        await homePage.contactForm.fillAndSubmit({ name: 'testName', email: 'a@b.com', message: 'Hello there'});
        await expect(homePage.page.getByText(/Something went wrong/)).toBeVisible();
    });
});

test.describe('Email Form - Client-side', () => {
    test('shows validation error for empty form', async ({ homePage }) => {
        await homePage.contactForm.submit();
        await expect(homePage.page.getByText('Name is required.')).toBeVisible();
    });

    test('shows error for invalid email', async ({ homePage }) => {
        await homePage.contactForm.nameField.fill("testName");
        await homePage.contactForm.emailField.fill("invalid email");
        await homePage.contactForm.submit();
        await expect(homePage.page.getByText('A valid email address is required.')).toBeVisible();
    });
});
