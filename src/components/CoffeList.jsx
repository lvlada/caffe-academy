import { CoffeItem } from "./CoffeItem";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export function CoffeList() {
    const { data } = useAuth();
    const [coffeList, setCoffeList] = useState(data);


    useEffect(() => {   
        setCoffeList(data);
    }
    , [data]);
    return (
        <>
        <div className="coffe-list">
            {coffeList.map((coffeItem) => (
                <CoffeItem key={coffeItem.id} coffe={coffeItem} />
            ))}
        </div>
          
        </>

    );
}