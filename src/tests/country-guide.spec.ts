import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'
import { CountryGuidePage } from '../features/pages/CountryGuidePage'
import { countries } from '../utils/data/countries'

test.describe('Country Guide Page Tests', () => {
    let homePage: HomePage
    let countryGuidePage: CountryGuidePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        countryGuidePage = new CountryGuidePage(page)

        await homePage.navigateToCountryGuidePage()
        await countryGuidePage.verifyCountryGuidePage()
    })

    countries.forEach((country) => {
        test(`Verify Country Guide for ${country.name}`, async () => {
            await test.step(`Select ${country.name}`, async () => {
                await countryGuidePage.selectCountry(country.name)
            })

            await test.step(`Verify ${country.name} specifications`, async () => {
                await countryGuidePage.verifyCountry(country)
            })
        })
    })
})
