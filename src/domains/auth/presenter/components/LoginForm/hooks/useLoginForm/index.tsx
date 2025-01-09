import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

type Schema = z.infer<typeof schema>

export const useLoginForm = () => {
  const methods = useForm<Schema>({ defaultValues: {
    email: '',
    password: ''
  }, resolver: zodResolver(schema)})

  const onSubmit = (formData: Schema) => console.log(formData)
  
  return {
    methods,
    onSubmit: methods.handleSubmit((formData) => onSubmit(formData)),
  }
}
