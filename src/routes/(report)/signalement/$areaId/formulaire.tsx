import { createFileRoute, useNavigate, useRouteContext } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/contexts/shared/presenter/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/contexts/shared/presenter/components/ui/radio-group"
import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { Input } from '@/contexts/shared/presenter/components/ui/input'

export const Route = createFileRoute(
  '/(report)/signalement/$areaId/formulaire',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t }, postReportForm } = useRouteContext({ from: '/(report)/signalement/$areaId/formulaire' })
  const navigate = useNavigate({ from: '/signalement/$areaId/formulaire' })

  const FormSchema = z.object({
    type: z.enum(['FULL', 'DEGRADED'], {
      required_error: t('common:you.need.to.select.a.report.type'),
    }),
    picture: z.instanceof(File)
      .refine((file) => ["image/png", "image/jpeg", "image/jpg"].includes(file.type), {
        message: t('common:invalid.image.file.type.allowed.types.are.png.jpeg.jpg'),
      })
      .refine((file) => file.size < 2000000, {
        message: t('common:file.size.must.be.less.than.2MB'),
      }).optional()
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const { mutate } = useMutation({
    mutationFn: (payload: z.infer<typeof FormSchema>) => postReportForm(payload),
    onSuccess: (data) => {
      if (data.message === 'success') navigate({ to: '/signalement/terminer' })
    }
  })

  const onSubmit = (payload: z.infer<typeof FormSchema>) => {
    mutate(payload)
  }
  
  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
        <h1 className="text-primary font-bold text-lg">{t("common:report.form")}</h1>
      </div>
      <div className="m-3 row-span-8 rounded-md flex justify-center items-end">
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{t('common:what.do.you.want.to.report')}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="FULL" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {t('common:the.delivery.point.is.full')}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="DEGRADED" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {t('common:the.delivery.point.is.degraded')}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="picture"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>{t('common:add.a.picture')}</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="Picture"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg,"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <span />
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button
          className="w-full"
          variant="outline"
          size="lg"
          onClick={() => navigate({ to: '/signalement/$areaId/confirmer-la-localisation' })}
        >{t("glossary:cancel")}</Button>
        <Button
          className="w-full"
          size="lg"
          onClick={form.handleSubmit(onSubmit)}
        >
          {t('common:send.a.report')}
        </Button>
      </div>
    </div>
  )
}
