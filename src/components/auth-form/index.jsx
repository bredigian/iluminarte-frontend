import Input from "../input"
import { Pulsar } from "@uiball/loaders"
import React from "react"

const AuthForm = ({ labels, handleSubmit, isLogging }) => {
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
      <div className="px-4 py-2 grid place-items-center h-[60px] ">
        {isLogging ? (
          <Pulsar size={40} color="#292929" />
        ) : (
          <button
            type="submit"
            className="text-dark px-4 py-2 border-[2px] border-dark font-bold rounded-full bg-transparent duration-150 ease-in-out hover:bg-dark hover:text-white"
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </form>
  )
}

export default AuthForm
