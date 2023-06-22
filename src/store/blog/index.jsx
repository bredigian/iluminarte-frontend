import { API_URL } from "../../constants"
import { create } from "zustand"

export const useBlogStore = create((set, get) => ({
  blog: [],

  getBlog: async () => {
    const response = await fetch(`${API_URL}/blog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error("Error fetching blog")
    } else {
      const data = await response.json()
      set({ blog: data })
    }
  },

  addPost: async (post) => {
    const formData = new FormData()
    formData.append("post", JSON.stringify(post))
    post.imagenes.forEach((imagen, index) => {
      formData.append(`images`, imagen)
    })
    const response = await fetch(`${API_URL}/blog`, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      await response.json()
      get().getBlog()
    }
  },

  deletePost: async (id) => {
    const response = await fetch(`${API_URL}/blog`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      await response.json()
      get().getBlog()
    }
  },
}))
