import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";

import {NavigationContainer, NavLink, LogoContainer, NavLinks} from "./navigation.styles";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) :
                            (<NavLink to="/auth">SIGN IN</NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;