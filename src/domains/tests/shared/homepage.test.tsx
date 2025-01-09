import { createRouter, RouterProvider } from '@tanstack/react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import i18n from '../../../domains/shared/services/i18next/initTranslation'

// Import the generated route tree
import { routeTree } from '../../../routeTree.gen';
// Create a new router instance
const router = createRouter({
    routeTree,
    context: {
      i18n
    }
})

describe('Shared | Integration', () => {

    it('Home page should be displayed and button with state should work', async () => {
        // GIVEN Home page is mounted
        render(<RouterProvider router={router}/>)
        
        // THEN Welcome Home! should be displayed
        const homePageTextContent = screen.getByRole('heading', { name: /welcome home!/i })
        expect(homePageTextContent).toBeVisible()

        // WHEN User click About link
        const aboutLink = screen.getByRole('link', { name: /about/i })
        await userEvent.click(aboutLink)
        
        // THEN User should be redirect to About page an see
        const aboutPageTextContent = screen.getByText(/hello from about!/i)
        expect(aboutPageTextContent).toBeVisible()
    })

})
