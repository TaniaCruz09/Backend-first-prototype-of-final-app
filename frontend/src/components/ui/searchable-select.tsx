"use client";

import React from "react";
import Select from "react-select";
import { ChevronDown } from "lucide-react";

export interface SearchableOption {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: SearchableOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isClearable?: boolean;
}

// Estilos personalizados para que el select se vea igual que los inputs (.input-style)
const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "0.75rem",
    borderColor: state.isFocused ? "#a5b4fc" : "#d1d5db",
    boxShadow: state.isFocused ? "0 0 0 2px #c7d2fe" : "none",
    backgroundColor: "#ffffff",
    paddingLeft: "4px",
    cursor: "text",
    "&:hover": {
      borderColor: state.isFocused ? "#a5b4fc" : "#d1d5db",
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#9ca3af",
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "0.75rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    overflow: "hidden",
    zIndex: 50,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#6366f1"
      : state.isFocused
      ? "#e0e7ff"
      : "#ffffff",
    color: state.isSelected ? "#ffffff" : "#1f2937",
    cursor: "pointer",
    "&:active": {
      backgroundColor: state.isSelected ? "#6366f1" : "#c7d2fe",
    },
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#9ca3af",
    "&:hover": { color: "#6b7280" },
  }),
  clearIndicator: (base: any) => ({
    ...base,
    color: "#9ca3af",
    "&:hover": { color: "#ef4444" },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (base: any) => ({
    ...base,
    color: "#1f2937",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#1f2937",
  }),
};

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Seleccionar...",
  isClearable = true,
}: SearchableSelectProps) {
  const selected = options.find((opt) => opt.value === value) ?? null;

  return (
    <Select
      options={options}
      value={selected}
      onChange={(option) => onChange(option ? option.value : "")}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable
      noOptionsMessage={() => "No se encontraron resultados"}
      styles={customStyles}
      components={{
        DropdownIndicator: () => (
          <ChevronDown className="mr-2 size-4 text-gray-400" />
        ),
      }}
      className="w-full"
      classNamePrefix="searchable-select"
    />
  );
}
