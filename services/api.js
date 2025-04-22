const API_URL = 'https://dummyjson.com/products'

export const fetchProducts = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  return data.products
}
