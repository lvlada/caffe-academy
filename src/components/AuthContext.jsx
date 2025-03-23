import { createContext, useState, useContext, useEffect } from "react";
import data from "../data/coffe-list.json";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);



  function handleLogin(loginState, logedUser) {
    setIsLogin(loginState);
    setUser(logedUser);
  }

  function handleOrder(newOrder){
    console.log(newOrder);
    handleCart(newOrder);
  }
  
  function handleCart(newOrder){
    const cartItem = {
      id: Date.now(),
      idUser: user?.id,
      order: newOrder
    }
    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
  
  }
  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  function handleTotalPrice() {
    const calTotal = cart.reduce((total, item) => {
      const price = parseFloat(item.order.price);
      return total + price * item.order.quantity;
    }, 0);
    setTotalPrice(calTotal.toLocaleString('sr-RS', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  }

  function handleDelete(orderId) {
    const newCart = cart.filter((item) => item.order.orderId !== orderId);
    setCart(newCart);
  }

  

  const value = {
    data,
    user,
    isLogin,
    cart,
    totalPrice,
    orderId,
    setOrderId,
    setCart,
    handleLogin,
    handleOrder,  
    handleDelete
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
