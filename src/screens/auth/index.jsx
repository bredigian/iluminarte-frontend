import React, { useEffect } from "react"

import { AuthForm } from "../../components"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../../store"

const Auth = () => {
  const { logIn, verifyToken, token } = useUserStore()
  const navigate = useNavigate()
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
    const userCredentials = {
      email: e.target[0].value,
      password: e.target[1].value,
    }
    try {
      await logIn(userCredentials)
      toast.success("Sesión iniciada")
      setTimeout(() => {
        navigate("/administration")
      }, 1500)
    } catch {
      toast.error("Usuario o contraseña incorrectos")
    }
  }
  useEffect(() => {
    verifyToken()
    if (token) navigate("/administration")
  }, [token])
  return (
    <div className="auth grid place-items-center p-8">
      <div className="auth-container flex flex-col items-center gap-6 bg-[#f4e5e1] rounded-[33px] w-5 h-[300px] p-8">
        <h1 className="font-serif text-4xl text-dark">Autenticación</h1>
        <AuthForm labels={labels} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Auth
