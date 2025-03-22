import { CartItemList } from "./CartItemList";
import { useAuth } from "./AuthContext";

export function CartItem(){

    const {cart} = useAuth();

    return(
        <>
        {cart.map((item) =>(
              <CartItemList key={item.id} item={item}/>
        ))}

        </>
    )
}