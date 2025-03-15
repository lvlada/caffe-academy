
export function CartItemList(){
    return(
        <>
        <div className="cart-item-list">
        <div className="cart-item-list-name">
        <p>
            <span>2</span> x <span>Espresso</span>
        </p>
        <p>
            <span>1</span> x <span>Americano</span>
        </p>
        <p>
            <span>1</span> x <span>Cappucino</span>
        </p>
        <p>
            <span>1</span> x <span>Ice Coffe</span>
        </p>
        </div>

        <div className="cart-item-list-remove">
            <p><strong>x</strong></p>
            <p><strong>x</strong></p>
            <p><strong>x</strong></p>
            <p><strong>x</strong></p>
        </div>  
        </div>
        </>
    )
}