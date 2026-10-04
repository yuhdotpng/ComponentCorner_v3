import CartItem from "../assets/components/CartItem";

function CartPage (cart, removeFromCart) {
    return(
        <div className="CartPage">
            {cart.length > 0 ? (
        cart.map((item, index) => (
        <CartItem
        item = {item}
        itemIndex = {index}
        name = {item.name}
        price = {item.price}
        onRemoveFromCart = {removeFromCart}
        />
      )) 
      )
      : (
        <div className='empty-cart'> 
          <h2> Your cart is empty! </h2>
        </div>
      )}
     

    {cartTotal > 0 && (
      <p>Total: {cartTotal}</p>
    )}

        </div>
    )
}

export default CartPage;