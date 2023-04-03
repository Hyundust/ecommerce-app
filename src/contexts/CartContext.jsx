import React from 'react'
import { createContext, useState, useEffect } from 'react'

// create a new context for the cart
export const CartContext = createContext();

// define the CartProvider component
function CartProvider({ children }) {
  // initialize the cart state as an empty array
  const [cart, setCart] = useState([]);
  const [itemCount ,setItemCount] = useState(0);
  const [total,setTotal] = useState(0);


  // define a function to add a product to the cart
  const addToCart = (product, id) => {
    // create a new item object 
    const newItem = { ...product, count: 1 };

    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if the item is already in the cart, update its count
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      setItemCount(itemCount+1);
    } else {
      // if the item is not in the cart, add it
      setCart([...cart, newItem]);
      setItemCount(itemCount+1)
    }

    // log that the item was added to the cart
    console.log(`item ${product.title} added to the cart `)
  }
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.count;
    }, 0);
    setTotal(total);
  }, [cart]);

  const decreaseCount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id && item.count > 1) {
        setItemCount(itemCount-1);
        return { ...item, count: item.count - 1 };
      } else if (item.id === id && item.count === 1) {
        removeCart(id);
        setItemCount(0);
        return null;
        
      } else {
        return item;
      }
    }).filter(item => item !== null);
    setCart(newCart);
  }
  
  

  const removeCart = (id)=>{
    const newCart = [...cart].filter((item) => {
      setItemCount(itemCount -item.count);
      return item.id !== id;
    })
    setCart(newCart);

  }
  const clearCart = () => {
    setCart([]);
    setItemCount(0);
  }
  



  // render the CartContext provider with the current cart state and addToCart function
  return <CartContext.Provider value={{ cart, addToCart,removeCart,decreaseCount,clearCart,itemCount,total }}>{children}</CartContext.Provider>
}

// export the CartProvider component as the default export
export default CartProvider;
