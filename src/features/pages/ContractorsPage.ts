import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class ConstractorsPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async verifyConstractorsPage() {
        await expect(this.page).toHaveTitle(
            'RemotePass: Top Contractor Management Platform | Onboard, Pay & Support Contractors Globally'
        )
        await expect(this.page).toHaveURL(/contractors/)

        await this.verifyHeader()

        await expect(
            this.page.getByRole('heading', {
                name: 'Onboard, Manage, & Pay your',
            })
        ).toBeVisible()
        await expect(this.page.locator('#main-content')).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Introducing RemotePass for',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', {
                name: 'Onboard Contractors in 150+',
            })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Document Collection' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Flexible Contract Types' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'E-Signature' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Smart Contract Editor' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Generate NDAs' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Background Checks & KYC' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Bulk Actions' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Analytics & Reporting' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Trusted by Customers,' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Simplify Contractor Payments',
            })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('heading', { name: 'Automated Invoicing' })
                .first()
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Recurring Allowances' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Additions & Deductions' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Mass Payments' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', {
                name: 'Integration with Accounting',
            })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Your team gets access to' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'USD Debit Card' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Health Benefits' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Payout Methods' })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('heading', { name: 'Automated Invoicing' })
                .nth(1)
        ).toBeVisible()

        await expect(this.page.getByText('People are talking')).toBeVisible()
    }
}
