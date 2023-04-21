import {useContext, useState} from "react";
import {Link} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";

import Button from "../button";
import CartItem from "../cart-item";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Link to="/checkout"><Button>Go to checkout</Button></Link>

        </div>

    )
}

export default CartDropdown;