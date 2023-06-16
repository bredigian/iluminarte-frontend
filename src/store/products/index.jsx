import { API_URL } from "../../constants"
import { create } from "zustand"

export const useProductsStore = create((set) => ({
  products: [],

  getProducts: async () => {
    const result = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!result.ok) {
      throw new Error("Error fetching products")
    } else {
      const data = await result.json()
      set({ products: data })
    }
  },

  categories: [],

  getCategories: async () => {
    const result = await fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!result.ok) {
      throw new Error("Error fetching categories")
    } else {
      const data = await result.json()
      set({ categories: data })
    }
  },
}))
