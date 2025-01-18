import { Camera } from '@/contexts/shared/presenter/components/Camera'
import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { Separator } from '@/contexts/shared/presenter/components/ui/separator'
import {
    RadioGroup,
    RadioGroupItem,
  } from '@/contexts/shared/presenter/components/ui/radio-group'
import { Label } from '@/contexts/shared/presenter/components/ui/label'
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { Input } from '@/contexts/shared/presenter/components/ui/input'

export const Route = createFileRoute('/report/$areaId/signalement')({
  component: RouteComponent,
})

function RouteComponent() {
  const { areaId } = useParams({
      from: '/report/$areaId/signalement',
    })
  const navigate = useNavigate({ from: '/report/$areaId/signalement' })
  
  return (
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <div className="px-3 pb-2 flex items-end bg-primary">
        <h1 className="text-primary-foreground font-bold text-xl">
          Signalement
        </h1>
      </div>
      <div className="px-3 pb-2 flex flex-col justify-end">
        <h2 className="text-primary font-bold text-lg">
          Que voulez-vous signaler
        </h2>
        <Separator />
      </div>
      {/* <div className='min-h-full rounded-xl bg-muted/95 row-span-5'></div> */}
      <div className="mx-3 row-span-8 place-content-center space-y-4">
        {/* <Camera /> */}
        <Input name='toto' type='file' capture='environment'  accept='i'/>
        <RadioGroup className="space-y-2" defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Le conteneur est plein</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Le conteneur est dégradé</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button
          className="w-full"
          variant="outline"
          size="lg"
          onClick={() => navigate({ to: `/report/${areaId}/confirmer-la-localisation`})}
        >
          Annuler le signalement
        </Button>
        <Button
          className="w-full"
          size="lg"
          onClick={() => navigate({ to: `/report/${areaId}/signalement-reussi`})}
        >
          Faire un signalement
        </Button>
        <p className="text-xs text-muted-foreground font-bold">
          Après votre signalement nous vous proposerons d'autres points de
          collecte.
        </p>
      </div>
    </div>
  )
}