import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { routeTree } from "@/routeTree.gen"
import i18n from '@/domains/shared/services/i18next/initTranslation'
import { InMemoryAuthRepository } from "@/domains/auth/gateways/InMemoryAuthRepository"
import { loginUseCase } from "@/domains/auth/domain/use-cases/login"
import { logoutUseCase } from "@/domains/auth/domain/use-cases/logout"
import { useAuthStore } from "@/domains/auth/store/AuthStore"

const authRepositoryInstance = new InMemoryAuthRepository([{
  id: 1,
  email: 'fverin.recrutement@gmail.com',
  password: 'test',
  role: 'DRIVER',
  username: 'fansoa',
  token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
}])

const queryClient = new QueryClient()

export function App() {
  const { user } = useAuthStore()

  const router = createRouter({
    routeTree,
    Wrap: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    ),
    context: {
      i18n,
      queryClient,
      loginUseCase: loginUseCase(authRepositoryInstance),
      logoutUseCase: logoutUseCase(authRepositoryInstance),
      user
    }
  })

  return <RouterProvider router={router} />
}

describe('Auth | Integration | Use-cases | Login', () => {

  beforeEach(async () => {
    
    // GIVEN Login page is mounted
    render(<App />)

    // THEN Welcome message should be visible 
    const loginPage = await screen.findByRole('heading', { name: /welcome to tisseco!/i })
    expect(loginPage).toBeVisible()
  })

  it('Login form prevents submission and displays error message when invalid input is provided', async () => {
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

  it('Login form display an toast error if invalid credentials are provided', async () => {
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const passwordInput = screen.getByPlaceholderText(/••••••••/i)
    const submitButton = screen.getByRole('button', { name: /log in/i })
    
    // WHEN Login form is filled with invalid credentials
    await userEvent.type(emailInput, 'invalid.user@example.com')
    await userEvent.type(passwordInput, 'wrongpassword')
    await userEvent.click(submitButton)
    
    // THEN Toast error should be displayed
    const toastError = await screen.findByText(/invalid user credentials/i)
    expect(toastError).toBeVisible()

    // WHEN Toast error close icon is clicked
    const status = screen.getByRole('region');
    await userEvent.click(within(status).getByRole('button'))
    // await userEvent.keyboard('{Escape}')

    // THEN Toast error should not be displayed
    expect(toastError).not.toBeInTheDocument()
  })

  it('Login form redirect the user if valid credentials are provided', async () => {
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const passwordInput = screen.getByPlaceholderText(/••••••••/i)
    const submitButton = screen.getByRole('button', { name: /log in/i })
    
    // WHEN Login form is filled with valid credentials
    await userEvent.type(emailInput, 'fverin.recrutement@gmail.com')
    await userEvent.type(passwordInput, 'test')

    // WHEN Submit button is clicked
    await userEvent.click(submitButton)

    const authLocalStorageItem = localStorage.getItem('auth')
    const parsedAuthLocalStorageItem = typeof authLocalStorageItem === 'string' ? JSON.parse(authLocalStorageItem) : null
    const expectedAuthStore = {
      state: {
        user: {
          type: 'bearer',
          name: 'fansoa',
          token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI',
          abilities: ['DRIVER'],
          lastUsedAt: null,
          expiresAt: '2025-01-04T16:45:25.353Z'
        }
      },
      version: 0
    }
    
    // THEN Related data of logged user should be stored in localstorage
    expect(parsedAuthLocalStorageItem).toEqual(expectedAuthStore)

    // THEN User should be redirect on Home page
    const text = await screen.findByText(/application/i)
    expect(text).toBeVisible()
  })

})
