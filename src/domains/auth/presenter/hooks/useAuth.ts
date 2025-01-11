import { useRouteContext } from "@tanstack/react-router"
import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "@/domains/auth/store/AuthStore"
import { LogoutPayload } from "../../domain/types/logoutTypes"

export function useAuth() {
  const { logoutUseCase } = useRouteContext({ from: '__root__' })
  const { deleteUser, user } = useAuthStore()
  
  const { mutate } = useMutation({
    mutationFn: ({ token }: LogoutPayload) => logoutUseCase({ token }),
  })
  
  const logout = () => {
    if (user?.token) {
      mutate({ token: user?.token})
    }
    deleteUser()
  }
  
  return logout
}