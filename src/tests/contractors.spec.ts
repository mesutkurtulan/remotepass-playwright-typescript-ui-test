import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'
import { ConstractorsPage } from '../features/pages/ContractorsPage'

test.describe('Contractors Page Tests', () => {
    let homePage: HomePage
    let constractorsPage: ConstractorsPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        constractorsPage = new ConstractorsPage(page)
        await homePage.navigateToContractorsPage()
    })

    test(`Verify Constractors Page`, async () => {
        await constractorsPage.verifyConstractorsPage()
    })
})
