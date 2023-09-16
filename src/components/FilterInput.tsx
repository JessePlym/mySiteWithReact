import { FilterInputProps } from "../types/props"

export default function FilterInput({
  className,
  label,
  id,
  type,
  value,
  minValue,
  placeholder,
}: FilterInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        min={minValue}
        id={id}
      />
      {placeholder && // if placeholder present, render search button
        <button className="search-button">
          Search
        </button>}
    </div>
  )
}
