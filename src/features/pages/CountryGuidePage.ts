import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class CountryGuidePage extends BasePage {
    private searchInput = this.page.getByPlaceholder('Search country')

    private featureValue(label: string): Locator {
        return this.page.locator(
            `.rp-country-feature:has(.rp-cms-label:text-is("${label}")) .cms-txt-data`
        )
    }

    private countryHeading(name: string): Locator {
        return this.page.getByRole('heading', { name })
    }

    async verifyCountryGuidePage() {
        await expect(this.page).toHaveURL(/countryguide/)

        await expect(
            this.page.locator('h1').filter({
                hasText: 'Your guide to global employment',
            })
        ).toBeVisible()
    }

    async selectCountry(country: string): Promise<void> {
        await this.searchInput.fill(country)

        const countryLink = this.page.getByRole('link', {
            name: country,
            exact: true,
        })
        await expect(countryLink).toBeVisible()

        await countryLink.click()

        await expect(this.page).toHaveURL(
            new RegExp(`/country/${country.toLowerCase()}`)
        )
    }

    async verifyCountry(country: {
        name: string
        currency: string
        language: string
    }) {
        await expect(this.countryHeading(country.name)).toBeVisible()

        await expect(this.featureValue('Currency')).toHaveText(country.currency)
        await expect(this.featureValue('Language')).toHaveText(country.language)
    }
}
