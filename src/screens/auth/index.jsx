import React, { useEffect, useState } from "react"
import { formStore, initialState } from "../../store/auth"

import { AuthForm } from "../../components"
import { onInputChange } from "../../utils/authForm"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useReducer } from "react"
import { useUserStore } from "../../store"
import useWidth from "../../hooks/useWidth"

const Auth = () => {
  const width = useWidth()
  const navigate = useNavigate()

  const { logIn, verifyToken, token } = useUserStore()

  const [isLogging, setIsLogging] = useState(false)

  const [formState, dispatchFormState] = useReducer(formStore, initialState)
  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState)
  }

  const labels = [
    {
      id: "label_email",
      type: "email",
      placeholder: "Correo electronico",
    },
    {
      id: "label_password",
      type: "password",
      placeholder: "Contraseña",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLogging(true)
    const userCredentials = {
      email: e.target[0].value,
      password: e.target[1].value,
    }
    try {
      await logIn(userCredentials)
      toast.success("Inicio de sesión exitoso")
      setTimeout(() => {
        navigate("/administration")
      }, 1500)
    } catch {
      toast.error("Usuario o contraseña incorrectos")
      setIsLogging(false)
    }
  }

  useEffect(() => {
    verifyToken()
    if (token) navigate("/administration")
  }, [token])

  if (width <= 970) {
    return (
      <div className="auth flex flex-col items-center gap-4 p-8">
        <h2 className="xs:text-xl md:text-2xl text-center font-serif font-bold">
          Funciones administrativas deshabilitadas
        </h2>
        <p className="xs:text-base md:text-lg text-center italic">
          Para acceder a las funciones administrativas se debe acceder desde un
          navegador de Escritorio.
        </p>
      </div>
    )
  } else {
    return (
      <div className="auth grid place-items-center p-8">
        <div className="auth-container flex flex-col items-center gap-6 bg-[#f4e5e1] rounded-[33px] w-5 h-[300px] p-8">
          <h1 className="font-serif text-4xl text-dark">Autenticación</h1>
          <AuthForm
            labels={labels}
            handleSubmit={handleSubmit}
            isLogging={isLogging}
            onHandleChangeInput={onHandleChangeInput}
            formState={formState}
          />
        </div>
      </div>
    )
  }
}

export default Auth
