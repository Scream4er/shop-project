import {BsArrowRight, BsArrowLeft, BsXLg} from "react-icons/bs"

import {CheckoutItemContainer, ImageContainer, Arrow, Quantity, Value, BaseSpan, RemoveButton} from "./checkout-item.styles";
import {useSelector, useDispatch} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, removeItemFromCart, clearItemFromCart} from "../../store/cart/cart.action";

const CheckoutItem = ({cartItem}) => {

    const {imageUrl, price, name, quantity} = cartItem;

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeProductFromCart = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearHandle = () => dispatch(clearItemFromCart(cartItems, cartItem));

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