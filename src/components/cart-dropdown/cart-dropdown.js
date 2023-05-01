import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";

import CartItem from "../cart-item";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import Button from "../button";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

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