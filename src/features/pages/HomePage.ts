import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async navigateToHomePage() {
        await this.navigate('/')
        await this.waitForPageToBeStable()
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.getByRole('link', { name: 'Login' }).click()
        await this.waitForPageToBeStable()
    }

    async navigateToContractorsPage(): Promise<void> {
        await this.page.goto('/contractors')
        await expect(this.page).toHaveURL(/contractors/)
        await expect(this.page).toHaveTitle(
            'RemotePass: Top Contractor Management Platform | Onboard, Pay & Support Contractors Globally'
        )
    }

    async navigateToIntegrationsPage(): Promise<void> {
        await this.page.goto('/integrations')
        await expect(this.page).toHaveURL(/integrations/)
        await expect(this.page).toHaveTitle(
            'Integrate Your Daily Apps for Effortless Collaboration | RemotePass'
        )
    }

    async navigateToCountryGuidePage(): Promise<void> {
        await this.page.goto('/countryguide')
        await expect(this.page).toHaveURL(/countryguide/)
        await expect(this.page).toHaveTitle(
            'Country-Specific Guides for Global Hiring Compliance'
        )
    }

    async navigateToPerksPage(): Promise<void> {
        await this.page.goto('/perks')
        await expect(this.page).toHaveURL(/perks/)
        await expect(this.page).toHaveTitle(
            'Exclusive Perks for Remote Teams | RemotePass'
        )
    }

    async navigateToGlossaryPage(): Promise<void> {
        await this.page.goto('/remote-work-glossary')
        await expect(this.page).toHaveURL(/remote-work-glossary/)
        await expect(this.page).toHaveTitle(
            'Remote Work Glossary: Essential Terms and Definitions for Remote Teams'
        )
    }

    async verifyHomePage() {
        await expect(this.page).toHaveTitle(
            'RemotePass: Global HR & Payroll Platform | Hire, Pay, and Manage Teams Worldwide'
        )
        await expect(this.page).toHaveURL('https://www.remotepass.com/')

        await this.verifyHeader()

        await expect(
            this.page.getByRole('heading', {
                name: 'Onboard, Manage, and Pay Your',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Book A Demo', exact: true })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Start For Free' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('link', {
                name: 'contractors Onboard, manage,',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', {
                name: 'EOR employees Hire full-time',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', {
                name: 'Direct Employees Onboard your',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'SpendCards Issue SpendCards' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Go Global with Confidence',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', {
                name: 'Onboard Your Entire Workforce',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Start Today' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Pay Everyone in One Go' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Pay Everyone in One Go' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Centralize Your HR Operations',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Get Started Today' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Offer World-Class Benefits',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Offer World-Class Benefits' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'International Compliance' })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Get Compliant Today' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Get Instant Workforce Answers',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', {
                name: 'Get Instant Workforce Answers',
            })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Trusted by Customers,' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Always here for you: 24/7',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Always here for you: 24/' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Privacy and Data Security:',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Get More Info' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'The All-In-One Solution for',
            })
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('link', { name: 'Onboard Local and Global' })
                .first()
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('link', { name: 'Onboard Local and Global' })
                .nth(1)
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('link', { name: 'Onboard Local and Global' })
                .nth(2)
        ).toBeVisible()
        await expect(
            this.page
                .getByRole('link', { name: 'Onboard Local and Global' })
                .nth(3)
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Integrate with Your Tech Stack',
                exact: true,
            })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Expand your recruitment' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'Practical Guides to Help You',
            })
        ).toBeVisible()

        await expect(this.page.getByText('People are talking')).toBeVisible()
    }
}
