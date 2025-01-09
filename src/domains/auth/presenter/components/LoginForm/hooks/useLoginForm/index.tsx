import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { LoginPayload } from "@/domains/auth/domain/types/loginTypes"
import { useRouteContext } from "@tanstack/react-router"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

type Schema = z.infer<typeof schema>

export const useLoginForm = () => {
  const { loginUseCase } = useRouteContext({ from: '__root__' })
  const methods = useForm<Schema>({ defaultValues: {
    email: '',
    password: ''
  }, resolver: zodResolver(schema)})

  const { mutate } = useMutation({
    mutationFn: ({ email, password } : LoginPayload) => loginUseCase({ email, password }),
    onSuccess: async (data) => {
      console.log("🚀 ~ useLoginForm ~ data:", data)
    }
})

  return {
    methods,
    onSubmit: methods.handleSubmit((formData) => mutate(formData)),
  }
}
