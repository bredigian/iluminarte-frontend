import React from "react"

const Input = ({
  data,
  styles,
  name,
  value,
  step,
  onChangeValue,
  required,
}) => {
  if (data.type !== "textarea") {
    return (
      <input
        name={name}
        required={required}
        key={data.id}
        onChange={onChangeValue}
        value={value}
        step={step}
        autoComplete={(data.type === "email") & "true"}
        className={`bg-[#FFFFFF65] px-4 py-2 text-base ${styles} rounded-full outline-none ${
          data.type === "tel"
            ? "col-span-1"
            : data.type === "email"
            ? "col-span-2"
            : "col-span-3"
        }`}
        type={data.type}
        placeholder={data.placeholder}
      />
    )
  } else {
    return (
      <textarea
        key={data.id}
        className={`${styles} bg-[#FFFFFF65] p-4 rounded-xl outline-none col-span-3 min-h-[150px] text-base resize-none`}
        placeholder={data.placeholder}
        onChange={onChangeValue}
        value={value}
        required={required}
        name={name}
      ></textarea>
    )
  }
}

export default Input
