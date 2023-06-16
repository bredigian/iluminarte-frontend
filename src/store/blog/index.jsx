import { API_URL } from "../../constants"
import { create } from "zustand"

export const useBlogStore = create((set) => ({
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
      console.log(data)
      set({ blog: data })
    }
  },
}))
