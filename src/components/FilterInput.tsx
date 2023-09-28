import { useRef } from "react"
import { FilterInputProps } from "../types/props"

export default function FilterInput({
  className,
  label,
  id,
  type,
  value,
  setValue,
  handleSearch,
  minValue,
  placeholder,
}: FilterInputProps) {
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        ref={searchRef}
        type={type}
        placeholder={placeholder}
        value={value}
        min={minValue}
        id={id}
        onChange={e => setValue(e.target.value)}
      />
      {placeholder && // if placeholder present, render search button
        <button className="search-button" onClick={() => handleSearch!(value as string, searchRef.current?.id as string)}>
          Search
        </button>}
    </div>
  )
}
