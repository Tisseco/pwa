import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/contexts/shared/presenter/components/ui/form"
import { Input } from "@/contexts/shared/presenter/components/ui/input"

type InputControlledProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  name: string
  label?: string
  helperText?: string
}

export function InputControlled({ className, name, label, helperText, ...inputProps } : InputControlledProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          { label && <FormLabel>{label}</FormLabel> }
          <FormControl>
            <Input {...field} {...inputProps}/>
          </FormControl>
          { helperText && <FormDescription>{helperText}</FormDescription> }
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
