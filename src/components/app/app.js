import "./app.styles.scss";
import {Routes, Route} from "react-router-dom";
import Home from "../../routes/home";
import Navigation from "../../routes/navigation";
import SignIn from "../../routes/sign-in";

const App = () => {
   return (
       <Routes>
           <Route path='/' element={<Navigation />}>
               <Route path='sign-in' element={<SignIn />}/>
               <Route index element={<Home />}/>
           </Route>

       </Routes>
   )
};

export default App;
