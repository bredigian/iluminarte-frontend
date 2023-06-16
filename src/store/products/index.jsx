import { create } from "zustand"

const url = "http://localhost:3001"
export const useProductsStore = create((set) => ({
  products: [],

  getProducts: async () => {
    const result = await fetch(`${url}/products`, {
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
    const result = await fetch(`${url}/categories`, {
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
