import {BsArrowRight, BsArrowLeft, BsXLg} from "react-icons/bs"
import './checkout-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {

    const {imageUrl, price, name, quantity} = cartItem;

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(cartItem);
    const removeProductFromCart = () => removeItemFromCart(cartItem);
    const clearHandle = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={removeProductFromCart}>{<BsArrowLeft/>}</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addProductToCart}>{<BsArrowRight/>}</span>
            </span>
            <span className='price'>
              {price}
            </span>
            <div className='remove-button' onClick={clearHandle}>
                {<BsXLg/>}
            </div>

        </div>
    );
}

export default CheckoutItem;