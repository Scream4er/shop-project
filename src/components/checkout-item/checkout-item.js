import {BsArrowRight, BsArrowLeft, BsXLg} from "react-icons/bs"

import {CheckoutItemContainer, ImageContainer, Arrow, Quantity, Value, BaseSpan, RemoveButton} from "./checkout-item.styles";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {

    const {imageUrl, price, name, quantity} = cartItem;

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(cartItem);
    const removeProductFromCart = () => removeItemFromCart(cartItem);
    const clearHandle = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            <BaseSpan>{name}</BaseSpan>
            <Quantity className='quantity'>
                <Arrow onClick={removeProductFromCart}>{<BsArrowLeft/>}</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addProductToCart}>{<BsArrowRight/>}</Arrow>
            </Quantity>
            <BaseSpan>
              {price}
            </BaseSpan>
            <RemoveButton onClick={clearHandle}>
                {<BsXLg/>}
            </RemoveButton>

        </CheckoutItemContainer>
    );
}

export default CheckoutItem;