import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { LoginPayload } from "@/domains/auth/domain/types/loginTypes"
import { useRouteContext } from "@tanstack/react-router"
import { useToast } from "@/domains/shared/presenter/hooks/use-toast"
import { useAuthStore } from "@/domains/auth/store/AuthStore"
import { t } from "i18next"

// TODO : Write an article about this in the Wiki
// The createSchema function was created to address unexpected behavior related to form validation. 
// Without this function, custom error messages defined in the validation schemas (e.g., using `t` for i18n)
// were not correctly applied or recognized.
const createSchema = () => z.object({
  email: z.string().email(t("errorValidation:your.email.is.invalid")),
  password: z.string({ errorMap: (issue, ctx)=> {
    if (issue.code === 'too_small') return {
      message: t('errorValidation:your.input.name.must.contain.at.least', { inputName: t("glossary:password").toLowerCase(), number: issue.minimum })
    }
    return { message: ctx.defaultError }
  }}).min(4),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schema = createSchema()
type Schema = z.infer<typeof schema>

export const useLoginForm = () => {
  const { i18n: { t },loginUseCase } = useRouteContext({ from: '__root__' })
  const { toast } = useToast()
  const { storeUser } = useAuthStore()

  const methods = useForm<Schema>({ defaultValues: {
    email: '',
    password: ''
  }, resolver: zodResolver(createSchema())})

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
    },
})

  return {
    methods,
    onSubmit: methods.handleSubmit((formData) => mutate(formData)),
  }
}
