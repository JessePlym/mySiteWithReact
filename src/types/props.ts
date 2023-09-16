export type Credentials = {
  username: string
  password: string
}

export type HomeProps = {
  isLoggedIn: boolean
}

export type FormFieldProps = {
  label: string
  name: string
  placeholder: string
  id: string
  type: string
}

export type FilterInputProps = {
  className: string
  label: string
  id: string
  type: string
  value: string | number
  minValue?: number
  placeholder?: string
}
