import { Dispatch, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { ChevronsUpDown } from "lucide-react"

import { Feature, getAddressListAPIDataGouv } from "@/contexts/map/presenter/components/AddressCombobox/services/getAddressListAPIDataGouv"
import useDebounce from "@/contexts/shared/presenter/hooks/useDebounce"
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
import { useRouteContext } from "@tanstack/react-router"

export function AddressCombobox({ setAddress }: { setAddress: Dispatch<Feature | null> }) {
  const { i18n: { t } } = useRouteContext({ from: '__root__' })
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Feature | null>(null)

  const debounce = useDebounce()

  const { data, mutate, reset } = useMutation({
      mutationFn: (value: string) => getAddressListAPIDataGouv(value)
  })

  const comboboxOptionLabel = value
  ? value?.properties?.label
  : t("common:select.an.address");

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
              placeholder={`${t("common:find.an.address")}...`}
              onValueChange={(value) => debounce(() => mutate(value), 700)}
            />
          <CommandList>
            <CommandGroup forceMount>
              {data?.features?.map((feature, key) => {
                  return (
                    <CommandItem
                      key={key}
                      value={feature.properties.label}
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