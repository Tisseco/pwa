import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@/index.css'

import i18n from './domains/shared/services/i18next/initTranslation'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import { loginUseCase } from './domains/auth/domain/use-cases/login'
import { InMemoryAuthRepository } from '@/domains/auth/gateways/InMemoryAuthRepository'

// Create a new router instance
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

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
