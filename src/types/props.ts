import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Payment } from "./type"

export type HomeProps = {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export type LoginProps = {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export type FormFieldProps = {
  label: string
  name: string
  value: string
  placeholder: string
  id: string
  type: string
  setValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export type FilterInputProps = {
  className: string
  label: string
  id: string
  type: string
  value: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: any
  handleSearch?: (input: string, searchType: string) => Promise<void>
  minValue?: number
  placeholder?: string
}

export type PaymentTableProps = {
  payments: Payment[]
  paymentType: string
}
