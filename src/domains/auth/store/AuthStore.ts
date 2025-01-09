import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Token } from "@/domains/auth/domain/types/loginTypes"

type AuthState = {
  user: Token | null
}

type AuthActions = {
  storeUser: (user: Token) => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,
      storeUser: (user) => set(() => ({ user })),
    }),
    { name: 'auth' }
  )
)
