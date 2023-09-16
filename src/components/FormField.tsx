import { FormFieldProps } from "../types/type"

export default function FormField({
  label,
  name,
  placeholder,
  id,
  type
}: FormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}
