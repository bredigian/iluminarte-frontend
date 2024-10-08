import React, { useEffect, useState } from "react"

import { Navigate } from "react-router-dom"
import { useUserStore } from "../../store"

const RoutePrivate = ({ children, route }) => {
  const { token, verifyToken } = useUserStore()
  const [verifyingToken, setVerifyingToken] = useState(true)

  useEffect(() => {
    const verify = async () => {
      await verifyToken()
      setVerifyingToken(false)
    }
    verify()
  }, [verifyToken])

  if (verifyingToken) return null

  if (!token) {
    return <Navigate to={route} />
  }

  return children
}

export default RoutePrivate
