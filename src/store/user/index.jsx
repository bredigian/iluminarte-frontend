import { API_URL } from "../../constants"
import { create } from "zustand"

export const useUserStore = create((set, get) => ({
  user: null,
  token: null,

  verifyToken: async () => {
    const token = localStorage.getItem("token")
    if (token !== null) {
      const result = await fetch(`${API_URL}/authentication/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
      if (!result.ok) {
        throw new Error("Invalid token")
      }
      const data = await result?.json()
      if (data.tokenIsValid) {
        const userData = JSON.parse(localStorage.getItem("user"))
        set({ user: userData, token: token })
      } else {
        localStorage.setItem("user", null)
        localStorage.setItem("token", null)
      }
    }
  },

  logIn: async (userCredentials) => {
    const result = await fetch(`${API_URL}/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
    if (!result.ok) {
      throw new Error("Error getting user credentials")
    }
    const data = await result?.json()
    localStorage.setItem("token", data.token)
    localStorage.setItem("user", JSON.stringify(data.userData))
    set({ user: data.userData, token: data.token })
  },

  logOut: async () => {
    const token = get().token
    const result = await fetch(`${API_URL}/authentication/tokens`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
    if (!result.ok) {
      throw new Error("Internal error")
    }
    const data = await result?.json()
    if (data.tokenDeleted) {
      localStorage.setItem("user", null)
      localStorage.setItem("token", null)
      set({ user: null, token: null })
    }
  },
}))
