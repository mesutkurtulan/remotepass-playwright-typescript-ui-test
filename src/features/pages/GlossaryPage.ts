import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class GlossaryPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async verifyGlossaryPage() {
        await expect(this.page).toHaveTitle(
            'Remote Work Glossary: Essential Terms and Definitions for Remote Teams'
        )
        await expect(this.page).toHaveURL(/remote-work-glossary/)
        await this.page.waitForLoadState('networkidle')
        await this.verifyHeader()
        await expect(
            this.page.getByRole('heading', { name: 'Remote Glossary' })
        ).toBeVisible()
    }

    async searchKeywordAndVerifyGlossaryTerms(keyword: string) {
        await this.page
            .getByRole('textbox', { name: 'Search for keyword' })
            .click()
        await this.page
            .getByRole('textbox', { name: 'Search for keyword' })
            .fill(keyword)
        const glossaryPagePromise = this.page.waitForEvent('popup')
        await this.page.getByRole('link', { name: keyword }).click()
        const glossaryPage = await glossaryPagePromise
        await expect(
            glossaryPage.getByRole('link', { name: 'Back to Glossary' })
        ).toBeVisible()
        await expect(
            glossaryPage.getByRole('heading', { name: keyword, exact: true })
        ).toBeVisible()
        await glossaryPage
            .getByRole('link', { name: 'Back to Glossary' })
            .click()
        await expect(
            this.page.getByRole('heading', { name: 'Remote Glossary' })
        ).toBeVisible()
    }
}
