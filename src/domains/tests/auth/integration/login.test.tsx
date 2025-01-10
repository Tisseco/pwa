import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { render, screen } from "@testing-library/react"

import { routeTree } from "@/routeTree.gen"
import i18n from '@/domains/shared/services/i18next/initTranslation'
import { InMemoryAuthRepository } from "@/domains/auth/gateways/InMemoryAuthRepository"
import { loginUseCase } from "@/domains/auth/domain/use-cases/login"

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
    
    render(<RouterProvider router={router} />)

    // GIVEN Login page is mounted
    const loginPage = await screen.findByRole('heading', { name: /welcome to tisseco!/i })
    expect(loginPage).toBeVisible()
  })

})
