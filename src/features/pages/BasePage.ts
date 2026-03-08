import { Page, Locator, expect } from '@playwright/test'

export abstract class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigate(path: string = '/'): Promise<void> {
        await this.page.goto(path, { waitUntil: 'domcontentloaded' })
        await this.waitForPageToBeStable()
    }

    async waitForPageToBeStable(timeout = 15000): Promise<void> {
        await this.page.waitForSelector(
            'h1, main, [role="main"], .hero, body',
            {
                state: 'visible',
                timeout,
            }
        )
    }

    async isVisible(locator: Locator, timeout = 10000): Promise<boolean> {
        return locator.isVisible({ timeout }).catch(() => false)
    }

    async clickAndWait(locator: Locator): Promise<void> {
        await locator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async expectUrlContains(substring: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(substring), {
            timeout: 15000,
        })
    }

    async verifyHeader() {
        await expect(
            this.page.getByText('Platform', { exact: true })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('navigation')
                .getByRole('link', { name: 'For Contractors' })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('navigation')
                .getByRole('link', { name: 'Integrations' })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('navigation')
                .getByRole('link', { name: 'Ask AI' })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('navigation')
                .getByRole('link', { name: 'Pricing' })
        ).toBeVisible()
        await expect(
            this.page.getByText('Resources', { exact: true }).nth(0)
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Login' }).first()
        ).toBeVisible({ timeout: 15000 })
        await expect(
            this.page.getByRole('link', { name: 'Book a Demo', exact: true })
        ).toBeVisible()
    }
}
