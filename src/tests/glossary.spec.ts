import { test } from '@playwright/test'
import { HomePage } from '../features/pages/HomePage'
import { GlossaryPage } from '../features/pages/GlossaryPage'
import { terms } from '../utils/data/glossary'

test.describe('Glossary Page Tests', () => {
    let homePage: HomePage
    let glossaryPage: GlossaryPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        glossaryPage = new GlossaryPage(page)
        await homePage.navigateToGlossaryPage()
        await glossaryPage.verifyGlossaryPage()
    })

    terms.forEach((term) => {
        test(`Verify Glossary Page for ${term.name}`, async () => {
            await glossaryPage.searchKeywordAndVerifyGlossaryTerms(term.name)
        })
    })
})
