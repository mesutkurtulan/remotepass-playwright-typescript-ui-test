import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class PerksPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async verifyPerksPage() {
        await expect(this.page).toHaveTitle(
            'Exclusive Perks for Remote Teams | RemotePass'
        )
        await expect(this.page).toHaveURL(/perks/)
        await this.verifyHeader()

        await expect(
            this.page.getByRole('heading', {
                name: 'Save up to $50k on tools your',
            })
        ).toBeVisible()
        await expect(
            this.page.getByRole('link', { name: 'Get started', exact: true })
        ).toBeVisible()
        await expect(
            this.page.getByRole('heading', { name: 'Perks', exact: true })
        ).toBeVisible()
        await expect(
            this.page.getByRole('textbox', { name: 'Search for keyword' })
        ).toBeVisible()
        await this.page
            .getByRole('textbox', { name: 'Search for keyword' })
            .scrollIntoViewIfNeeded()
        await this.page
            .getByRole('textbox', { name: 'Search for keyword' })
            .fill('Datapills')
        // await expect(this.page.locator('.perk-item-label')).toHaveText('Data');
        await expect(
            this.page.getByRole('heading', { name: '500 perks and benefits' })
        ).toBeVisible()
        await expect(this.page.getByText('People are talking')).toBeVisible()
        await expect(
            this.page.getByRole('heading', {
                name: 'Hear what teams love about',
            })
        ).toBeVisible()
    }
}
