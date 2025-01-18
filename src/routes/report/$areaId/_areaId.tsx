import { Button } from '@/contexts/shared/presenter/components/ui/button'
import { Separator } from '@/contexts/shared/presenter/components/ui/separator'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Label } from '@/contexts/shared/presenter/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/contexts/shared/presenter/components/ui/radio-group'
import { Camera } from '@/contexts/shared/presenter/components/Camera'

export const Route = createFileRoute('/report/$areaId/_areaId')({
  component: RouteComponent,
})

function RouteComponent() {
  const [currentStep, setCurrentStep] = useState({
    type: 'confirmationAddress',
  })

  function renderReportSteps(action) {
    switch (action.type) {
      case 'confirmationAddress':
        return (
          <AddressConfirmation
            position={data}
            setCurrentStep={setCurrentStep}
          />
        )

      case 'reportType':
        return <ReportType setCurrentStep={setCurrentStep} />

      case 'done':
        return <ReportDone setCurrentStep={setCurrentStep} />

      default:
        break
    }
  }

  return (
    // <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
    //   {renderReportSteps(currentStep)}
    // </div>
    <div className="container mx-auto min-h-screen max-h-screen grid grid-rows-12">
      <Outlet></Outlet>
    </div>
  )
}

function ReportType({ setCurrentStep }) {
  return (
    <>
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
        {/* <div className='h-1 w-full bg-slate-400'></div> */}
      </div>
      {/* <div className='min-h-full rounded-xl bg-muted/95 row-span-5'></div> */}
      <div className="mx-3 row-span-8 place-content-center">
        <Camera />
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
          onClick={() => setCurrentStep({ type: 'confirmationAddress' })}
        >
          Annuler le signalement
        </Button>
        <Button
          className="w-full"
          size="lg"
          onClick={() => setCurrentStep({ type: 'done' })}
        >
          Faire un signalement
        </Button>
        <p className="text-xs text-muted-foreground font-bold">
          Après votre signalement nous vous proposerons d'autres points de
          collecte.
        </p>
      </div>
    </>
  )
}

function ReportDone({ setCurrentStep }) {
  console.log('ReportDone')

  return (
    <>
      {/* <div className='px-3 pb-2 flex items-end bg-primary'>
        <h1 className='text-primary-foreground font-bold text-xl'>Signalement</h1>
      </div> */}
      <div className="mx-3 row-span-10 place-content-center"></div>
      <div className="px-3 row-span-2 flex flex-col gap-2">
        <Button className="w-full" size="lg">
          Point de collecte le plus proche
        </Button>
      </div>
    </>
  )
}
