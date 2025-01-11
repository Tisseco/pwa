import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Token } from "@/domains/auth/domain/types/authSharedTypes"

type AuthState = {
  user: Token | null
}

type AuthActions = {
  storeUser: (user: Token) => void
  deleteUser: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,
      storeUser: (user) => set(() => ({ user })),
      deleteUser: () => set(() => ({ user: null }))
    }),
    { name: 'auth' }
  )
)
