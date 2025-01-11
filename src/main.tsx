import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@/index.css'

import i18n from '@/contexts/shared/services/i18next/initTranslation'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import { loginUseCase } from '@/contexts/auth/domain/use-cases/login'
import { InMemoryAuthRepository } from '@/contexts/auth/gateways/InMemoryAuthRepository'
import { logoutUseCase } from '@/contexts/auth/domain/use-cases/logout'
import { useAuthStore } from '@/contexts/auth/store/AuthStore'

const authRepositoryInstance = new InMemoryAuthRepository([{
  id: 1,
  email: 'fverin.recrutement@gmail.com',
  password: 'test',
  role: 'DRIVER',
  username: 'fansoa',
  token: 'oat_MTEy.ZmJMWGlXY2dmUkp3WUgzdU5yS0wzYnBuVUc5N2hyRld5bGtMWG5VeDQwMDIxNjMwMDI'
}])

 
// For authentication, I need to pass the value of my authStore 
// into the context of the TanStack Router to redirect users based on their store. 
// Since accessing a store requires using a hook, I cannot create the router outside 
// of a React component. However, to register the TypeScript typings for my router 
// instance, I must create the instance outside of a React component. As a result, 
// I need to create a router instance in this way.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    logoutUseCase: logoutUseCase(authRepositoryInstance)
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

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

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
