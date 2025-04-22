
export const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  }
  
  
  export const saveCartToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  