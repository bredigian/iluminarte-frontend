import { create } from "zustand"

export const useProductsStore = create((set) => ({
  products: [],

  getProducts: async () => {
    const url = "http://localhost:3001"
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
}))
