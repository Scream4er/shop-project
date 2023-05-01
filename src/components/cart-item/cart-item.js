import {CartItemContainer, Img, Name, ItemDetails} from "./cart-item.styles";


const CartItem = ({cartItem}) => {

    const { imageUrl, price, name, quantity } = cartItem;

    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;