import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview";
import Category from "../../components/category";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':category' element={<Category />}/>
        </Routes>
    )
}

export default Shop;