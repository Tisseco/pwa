import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { MailCheck } from 'lucide-react'

export const Route = createFileRoute('/report/$areaId/signalement-reussi')({
  component: RouteComponent,
})

function RouteComponent() {
  const { areaId } = useParams({
    from: '/report/$areaId/signalement-reussi',
  })

  const navigate = useNavigate({ from: '/report/$areaId/signalement-reussi' })

  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      {/* <div className='px-3 pb-2 flex items-end bg-primary'>
        <h1 className='text-primary-foreground font-bold text-xl'>Signalement</h1>
      </div> */}
      <div className="mx-3 row-span-10 place-content-center justify-items-center">
        <MailCheck size={96} />
        <h1 className='mt-6 text-primary text-xl'>Merci pour votre signalement !</h1>
      </div>
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button className="opacity-0" size="lg">
          Point de collecte le plus proche
        </Button>
        <Button 
          className="w-full"
          size="lg" 
          onClick={() => navigate({ to: `/report/${areaId}/point-de-collecte-le-plus-proche` })}
        >
          Point de collecte le plus proche
        </Button>
      </div>
    </div>
  )
}
