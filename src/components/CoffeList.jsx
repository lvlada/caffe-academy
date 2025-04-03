import { CoffeItem } from "./CoffeItem";
import { useAuth } from "./AuthContext";


export function CoffeList() {
    const { data } = useAuth();
 
    return (
        <>
        { data && data.length > 0 ? (
                    <div className="coffe-list">
                    {data.map((item) => (
                        <CoffeItem key={item.id} coffe={item} />
                    ))}
                </div>
        ) : (<div className="loader-container">
            <span className="loader"></span>
          </div>)}

  
          
        </>

    );
}