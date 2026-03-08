import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class IntegrationsPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async verifyIntegrationsPage() {
        await expect(this.page).toHaveTitle(
            'Integrate Your Daily Apps for Effortless Collaboration | RemotePass'
        )
        await expect(this.page).toHaveURL(/integrations/)

        await this.verifyHeader()

        await expect(
            this.page.getByRole('heading', {
                name: 'Keep all your data and dots',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Get started today' })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', {
                name: 'All your favorite tools are',
            })
        ).toBeVisible()

        await expect(
            this.page.getByRole('heading', { name: 'Made for every workflow.' })
        ).toBeVisible()

        await expect(this.page.getByText('People are talking')).toBeVisible()
    }
}
