import { Puzzle } from "lucide-react"
import { cn } from "@/domains/shared/presenter/lib/utils"
import { Button } from "@/domains/shared/presenter/components/ui/button"
import { FormProvider } from "react-hook-form"
import { InputControlled } from "@/domains/shared/presenter/components/InputControlled"
import { useLoginForm } from "@/domains/auth/presenter/components/LoginForm/hooks/useLoginForm"
import { useRouteContext } from "@tanstack/react-router"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { i18n: { t } } = useRouteContext({ from: '__root__' })
  const { methods, onSubmit } = useLoginForm()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  <Puzzle className="size-6" />
              </div>
              <span className="sr-only">Tisseco</span>
              <h1 className="text-xl font-bold">{t('welcome.to.tisseco')}</h1>
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
                  label={t('glossary:password')}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
              <Button type="submit" className="w-full">{t('glossary:login')}</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
