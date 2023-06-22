import { API_URL } from "../../constants"
import { create } from "zustand"

export const useProductsStore = create((set, get) => ({
  products: [],
  productOfTheMonth: null,

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

  addProduct: async (product) => {
    const formData = new FormData()
    formData.append("product", JSON.stringify(product))
    product.imagenes.forEach((imagen, index) => {
      formData.append(`images`, imagen)
    })
    const result = await fetch(`${API_URL}/products`, {
      method: "POST",
      body: formData,
    })
    if (!result.ok) {
      const { message } = await result.json()
      throw new Error(message)
    } else {
      await result.json()
      get().getProducts()
    }
  },

  deleteProduct: async (codigo) => {
    const result = await fetch(`${API_URL}/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo }),
    })
    if (!result.ok) {
      const { message } = await result.json()
      throw new Error(message)
    } else {
      await result.json()
      get().getProducts()
    }
  },

  getProductOfTheMonth: async () => {
    const result = await fetch(`${API_URL}/products/favorite`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!result.ok) {
      throw new Error("Error fetching product of the month")
    } else {
      const data = await result.json()
      set({ productOfTheMonth: data.vela })
    }
  },

  setProductOfTheMonth: async (codigo) => {
    const result = await fetch(`${API_URL}/products/favorite`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo }),
    })
    if (!result.ok) {
      const { message } = await result.json()
      throw new Error(message)
    } else {
      await result.json()
      get().getProductOfTheMonth()
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
