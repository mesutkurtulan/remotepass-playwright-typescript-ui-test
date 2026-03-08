import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'

test.describe('Home Page Tests', () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        await homePage.navigateToHomePage()
    })

    test('Verify Home Page', async () => {
        await homePage.verifyHomePage()
    })
})
