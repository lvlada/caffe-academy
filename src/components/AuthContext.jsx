import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { fetchCoffeeTypes, fetchUsers } from "../services/firebaseService";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [data, setDate] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [idCart, setIdCart] = useState(0);
  const [allCarts, setAllCarts] = useState(() => {
    const savedCarts = sessionStorage.getItem('allCarts');
    return savedCarts ? JSON.parse(savedCarts) : [];
  });

  useEffect(()=>{
    fetchCoffeeTypes().then((coffeeTypes) => {
      setDate(coffeeTypes);
    });

    fetchUsers().then((users) => {
      setUserData(users);

    });
  }, []);


  useEffect(() => {
    sessionStorage.setItem('allCarts', JSON.stringify(allCarts));
  }, [allCarts]);



  function handleLogin(loginState, logedUser) {
    setIsLogin(loginState);
    setUser(logedUser);
  }

  function handleOrder(newOrder){
    handleCart(newOrder);
  }

  function handleCart(newOrder) {
    const cartItem = {
      id: Date.now(),
      idUser: user?.id,
      orders: [...cart.flatMap(item => item.orders), newOrder]
    };
  
    setCart([cartItem]); 
    setIdCart(cartItem.id);
  }
  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  function handleTotalPrice() {
    const calTotal = cart.reduce((total, cartItem) => {
      return total + cartItem.orders.reduce((sum, order) => {
        return sum + (parseFloat(order.price) * (order.quantity || 1)); 
      }, 0);
    }, 0);
  
    setTotalPrice(calTotal.toLocaleString('sr-RS', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  }

  function handleDelete(orderId) {
    const newCart = cart
      .map((cartItem) => ({
        ...cartItem,
        orders: cartItem.orders.filter((order) => order.orderId !== orderId),
      }))
      .filter((cartItem) => cartItem.orders.length > 0); 
  
    setCart(newCart);
  }
  

  function handleAllCarts() {
    const updateAllCarts = allCarts.concat(cart);
    setAllCarts(updateAllCarts);
  }
  

  const value = useMemo(()=> ({
    data,
    user,
    isLogin,
    cart,
    totalPrice,
    orderId,
    allCarts,
    idCart,
    userData,
    setOrderId,
    setCart,
    setIdCart,
    handleLogin,
    handleOrder,  
    handleDelete,
    handleAllCarts
  }), 
  [data, user, isLogin, cart, totalPrice, orderId, allCarts, idCart]
);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
