import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import React from "react"

const Input = ({
  data,
  styles,
  colSpan,
  name,
  value,
  step,
  onChangeValue,
  required,
  isAuth,
  hasError,
  id,
}) => {
  if (data.type !== "textarea") {
    if (!isAuth) {
      return (
        <input
          id={id}
          name={name}
          required={required}
          key={data.id}
          onChange={onChangeValue}
          value={value}
          step={step}
          autoComplete={(data.type === "email") & "true"}
          className={`bg-[#FFFFFF65] ${styles} px-4 py-2 xs:text-sm rounded-full outline-none ${
            data.type === "tel"
              ? "xs:col-span-4 md:col-span-1"
              : data.type === "email"
              ? "xs:col-span-4 md:col-span-2"
              : `xs:col-span-4 md:col-span-3 ${colSpan}`
          }`}
          type={data.type}
          placeholder={data.placeholder}
        />
      )
    } else {
      return (
        <div className="input-container flex flex-col justify-center items-end">
          <input
            id={id}
            name={name}
            required={required}
            key={data.id}
            onChange={onChangeValue}
            value={value}
            step={step}
            autoComplete={(data.type === "email") & "true"}
            className={`bg-[#FFFFFF65] px-4 py-2 text-base ${styles} rounded-full outline-none ${
              data.type === "tel"
                ? "xs:col-span-4 md:col-span-1"
                : data.type === "email"
                ? "xs:col-span-4 md:col-span-2"
                : "xs:col-span-4 md:col-span-3"
            }`}
            type={data.type}
            placeholder={data.placeholder}
          />
          {hasError && (
            <div className="absolute mr-2">
              <ExclamationCircleIcon width={30} color="#292929" />
            </div>
          )}
        </div>
      )
    }
  } else {
    return (
      <textarea
        id={id}
        key={data.id}
        className={`${styles} bg-[#FFFFFF65] p-4 rounded-xl outline-none xs:col-span-4 md:col-span-3 lg:col-span-8 xs:text-sm resize-none`}
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
