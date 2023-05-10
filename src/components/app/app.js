import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Home from "../../routes/home";
import Navigation from "../../routes/navigation";
import Authentication from "../../routes/authentication";
import Shop from "../../routes/shop";
import Checkout from "../../routes/checkout";

import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../../utils/firebase/firebase.utils";
import {setCurrentUser} from "../../store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

   return (
       <Routes>
           <Route path='/' element={<Navigation />}>
               <Route path='auth' element={<Authentication />}/>
               <Route path='shop/*' element={<Shop />}/>
               <Route index element={<Home />}/>
               <Route path='checkout' element={<Checkout />}/>
           </Route>

       </Routes>
   )
};

export default App;
