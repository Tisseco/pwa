import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/contexts/shared/presenter/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/contexts/shared/presenter/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/contexts/shared/presenter/components/ui/popover"
import useDebounce from "@/contexts/shared/presenter/hooks/useDebounce"
import { useMutation } from "@tanstack/react-query"

const getAddressListAPIDataGouv = async (value: string) => {
    return fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}`).then(res => res.json())
}

export function AddressCombobox({ setAddress }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

const debounce = useDebounce()

const { data, mutate, reset } = useMutation({
    mutationFn: (value: string) => getAddressListAPIDataGouv(value)
})

const comboboxOptionLabel = value
? value?.properties?.label
: "Selectionner une adresse...";

// 35 allée des troubadours
return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size='lg'
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between text-primary border-primary overflow-hidden whitespace-pre-wrap"
        >
          {comboboxOptionLabel}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 z-[1000]">
        <Command>
            <CommandInput 
              className="h-9"
              placeholder="Rechercher une adresse..."
              onValueChange={(value) => debounce(() => mutate(value), 700)}
            />
          <CommandList>
            <CommandGroup forceMount>
              {
                data?.features?.map((feature, key) => {
                  return (
                    <CommandItem
                    key={key}
                    value={feature}
                    onSelect={() => {
                      setOpen(false)
                      setAddress(feature)
                      setValue(feature)
                      reset()
                    }}
                    >
                    {feature.properties.label}
                    </CommandItem>
                  )
                })
              }
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}