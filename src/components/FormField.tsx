import { FormFieldProps } from "../types/props"

export default function FormField({
  label,
  name,
  value,
  placeholder,
  id,
  type,
  setValue
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
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={setValue}
      />
    </div>
  )
}
