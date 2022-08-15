import React from 'react'

interface Props {}

function FormInput(props: Props) {
  const {} = props

  return (
    <div className="flex flex-col">
      <label className="text-sm mb-1">Label</label>
      <input
        className="border bg-gray-200 p-2 rounded-sm"
        type="text"
        name="name"
        placeholder="Placeholder"
      />
    </div>
  )
}

export default FormInput
