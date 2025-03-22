import { CoffeItem } from "./CoffeItem";
import { useAuth } from "./AuthContext";

export function CoffeList() {
    const { data } = useAuth();
 
    return (
        <>
        <div className="coffe-list">
            {data.map((item) => (
                <CoffeItem key={item.id} coffe={item} />
            ))}
        </div>
          
        </>

    );
}