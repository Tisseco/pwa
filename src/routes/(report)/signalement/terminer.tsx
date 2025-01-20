import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { createFileRoute, useNavigate, useRouteContext } from '@tanstack/react-router'
import { MailCheck } from 'lucide-react'

export const Route = createFileRoute('/(report)/signalement/terminer')({
  component: RouteComponent,
})

function RouteComponent() {
  const { i18n: { t } } = useRouteContext({ from: '/(report)/signalement/terminer' })
  const navigate = useNavigate({ from: '/signalement/terminer' })

  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex flex-col justify-end row-span-1">
      </div>
      <div className="m-3 row-span-8 rounded-md flex flex-col justify-center items-center gap-4">
        <MailCheck className='text-primary' absoluteStrokeWidth size={80}/>
        <h1 className="text-primary font-bold text-lg">{t('common:thank.you.for.your.report')}</h1>
      </div>
      <span />
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button
          className="w-full"
          variant="outline"
          size="lg"
          onClick={() => navigate({ to: '/carte-interactive' })}
        >
          {t('common:find.another.delevery.point')}
        </Button>
      </div>
    </div>
  )
}
