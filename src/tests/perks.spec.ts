import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'
import { PerksPage } from '../features/pages/PerksPage'

test.describe('Perks Page Tests', () => {
    let homePage: HomePage
    let perksPage: PerksPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        perksPage = new PerksPage(page)
        await homePage.navigateToPerksPage()
    })

    test(`Verify Perks Page`, async () => {
        await perksPage.verifyPerksPage()
    })
})
