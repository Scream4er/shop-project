import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import CartItem from "../cart-item";
import Button from "../button";
import {selectCartItems} from "../../store/cart/cart.selector";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>

        </CartDropdownContainer>

    )
}

export default CartDropdown;