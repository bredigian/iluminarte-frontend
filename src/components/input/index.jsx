import React from "react"

const Input = ({ data, styles, value, onChangeValue }) => {
  if (data.type !== "textarea") {
    return (
      <input
        key={data.id}
        onChange={onChangeValue && onChangeValue}
        value={value && value}
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
        className="bg-[#FFFFFF65] p-4 rounded-xl outline-none col-span-3 min-h-[150px] text-base resize-none placeholder:text-white text-white"
        placeholder={data.placeholder}
      ></textarea>
    )
  }
}

export default Input
