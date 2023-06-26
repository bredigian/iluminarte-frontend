import Input from "../input"
import { Pulsar } from "@uiball/loaders"
import React from "react"

const AuthForm = ({
  labels,
  handleSubmit,
  isLogging,
  onHandleChangeInput,
  formState,
}) => {
  const isValid = !formState.email.hasError && !formState.password.hasError
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
      {labels?.map((label) => {
        return (
          <Input
            key={label.id}
            data={label}
            onChangeValue={(e) =>
              onHandleChangeInput(e.target.value, label.type)
            }
            value={formState[label.type].value}
            hasError={formState[label.type].hasError}
            clicked={formState[label.type].clicked}
            styles={`text-dark placeholder:text-dark w-3`}
            isAuth={true}
          />
        )
      })}
      <div className="px-4 py-2 grid place-items-center h-[60px] ">
        {isLogging ? (
          <Pulsar size={40} color="#292929" />
        ) : (
          <button
            type="submit"
            disabled={
              !isValid ||
              !formState.email.clicked ||
              !formState.password.clicked
            }
            className={`text-dark px-4 py-2 border-[2px] font-bold rounded-full bg-transparent duration-150 ease-in-out ${
              isValid && formState.email.clicked && formState.password.clicked
                ? "border-dark hover:bg-dark hover:text-white"
                : "border-transparent"
            }`}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </form>
  )
}

export default AuthForm
