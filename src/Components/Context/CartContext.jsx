import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ADD PRODUCT
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {

        updatedCart = previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      } else {

        updatedCart = [
          ...previousCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {

    setCart((previousCart) => {

      const updatedCart = previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {

    setCart((previousCart) => {

      const updatedCart = previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {

    setCart((previousCart) => {

      const updatedCart = previousCart.filter(
        (item) => item.id !== id
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  // TOTAL NUMBER OF ITEMS
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;