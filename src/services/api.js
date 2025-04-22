const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const data = await res.json();

    return data.products; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};
