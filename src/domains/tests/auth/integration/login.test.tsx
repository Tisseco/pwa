import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { render, screen } from "@testing-library/react"

import { routeTree } from "@/routeTree.gen"
import i18n from '@/domains/shared/services/i18next/initTranslation'
import { InMemoryAuthRepository } from "@/domains/auth/gateways/InMemoryAuthRepository"
import { loginUseCase } from "@/domains/auth/domain/use-cases/login"
import userEvent from "@testing-library/user-event"

const queryClient = new QueryClient()
describe('Auth | Integration | Use-cases | Login', () => {

  it('Login form prevents submission and displays error message when invalid input is provided', async () => {
    const router = createRouter({
      routeTree,
      basepath: '/login',
      Wrap: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
      context: {
        i18n,
        queryClient,
        loginUseCase: loginUseCase(new InMemoryAuthRepository([{
          id: 1,
          email: 'fverin.recrutement@gmail.com',
          password: 'test',
          role: 'DRIVER',
          username: 'fansoa',
          token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
        }]))
      }
    })
    
    // GIVEN Login page is mounted
    render(<RouterProvider router={router} />)

    // THEN Welcome message should be visible 
    const loginPage = await screen.findByRole('heading', { name: /welcome to tisseco!/i })
    expect(loginPage).toBeVisible()

    const passwordInput = screen.getByPlaceholderText(/••••••••/i)
    const submitButton = screen.getByRole('button', { name: /log in/i })

    // WHEN Leave email blank and type a short password
    await userEvent.type(passwordInput, 'tes')
    
    // WHEN Submit button is clicked
    await userEvent.click(submitButton)

    // THEN Error validation should be displayed
    expect(screen.getByText(/your email is invalid/i)).toBeVisible()
    expect(screen.getByText(/your password must contain at least 4 characters/i)).toBeVisible()
  })

})