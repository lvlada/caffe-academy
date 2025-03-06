import { CoffeItem } from "./CoffeItem";
import data from "../data/coffe-list.json";
import { useState, useEffect } from "react";

export function CoffeList() {
    const [coffeList, setCoffeList] = useState(data);

    useEffect(() => {   
        setCoffeList(data);
    }
    , []);
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