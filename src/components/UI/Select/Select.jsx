import React from 'react'

export default function Select({options, value, onChange}) {
  return (
    <select
        value={value}
        onChange = {e => onChange(e.target.value)}
    >
        {options.map(option => 
        <option value={option.value}>
            {option.name}
        </option>
        )

        }
        
    </select>
  )
}
