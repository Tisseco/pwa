import { Puzzle } from "lucide-react"
import { cn } from "@/domains/shared/presenter/lib/utils"
import { Button } from "@/domains/shared/presenter/components/ui/button"
import { FormProvider, useForm } from "react-hook-form"
import { InputControlled } from "@/domains/shared/presenter/components/InputControlled"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const methods = useForm()

  const onSubmit = (data: { email?: string, password?: string }) => console.log(data)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  <Puzzle className="size-6" />
              </div>
              <span className="sr-only">Tisseco</span>
              <h1 className="text-xl font-bold">Welcome to Tisseco</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <InputControlled
                  name="email"
                  label="Email"
                  placeholder="m@example.com"
                  autoComplete="email"
                />
                <InputControlled
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
