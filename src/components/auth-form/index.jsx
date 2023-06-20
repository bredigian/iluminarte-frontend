import Input from "../input"
import React from "react"

const AuthForm = ({ labels, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
      {labels?.map((label) => {
        return (
          <Input
            key={label.id}
            data={label}
            styles={"text-dark placeholder:text-dark w-3"}
          />
        )
      })}
      <button
        type="submit"
        className="text-dark px-4 py-2 border-[2px] border-dark font-bold rounded-full bg-transparent duration-150 ease-in-out hover:bg-dark hover:text-white"
      >
        Iniciar sesión
      </button>
    </form>
  )
}

export default AuthForm
