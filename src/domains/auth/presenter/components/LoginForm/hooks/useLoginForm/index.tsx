import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { LoginPayload } from "@/domains/auth/domain/types/loginTypes"
import { useRouteContext } from "@tanstack/react-router"
import { useToast } from "@/domains/shared/presenter/hooks/use-toast"
import { useAuthStore } from "@/domains/auth/store/AuthStore"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

type Schema = z.infer<typeof schema>

export const useLoginForm = () => {
  const { i18n: { t },loginUseCase } = useRouteContext({ from: '__root__' })
  const { toast } = useToast()
  const { storeUser } = useAuthStore()

  const methods = useForm<Schema>({ defaultValues: {
    email: '',
    password: ''
  }, resolver: zodResolver(schema)})

  const { mutate } = useMutation({
    mutationFn: ({ email, password } : LoginPayload) => loginUseCase({ email, password }),
    onSuccess: async (data) => {
      if ("errors" in data) {
        toast({
          variant: "destructive",
          title: t("something.went.wrong"),
          description: data.errors?.[0]?.message
        })
        return
      }
      storeUser(data)
    }
})

  return {
    methods,
    onSubmit: methods.handleSubmit((formData) => mutate(formData)),
  }
}
