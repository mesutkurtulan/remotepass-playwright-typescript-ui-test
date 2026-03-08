import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'
import { IntegrationsPage } from '../features/pages/IntegrationsPage'

test.describe('Integrations Page Tests', () => {
    let homePage: HomePage
    let integrationsPage: IntegrationsPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        integrationsPage = new IntegrationsPage(page)
        await homePage.navigateToIntegrationsPage()
    })

    test(`Verify Integrations Page`, async () => {
        await integrationsPage.verifyIntegrationsPage()
    })
})
