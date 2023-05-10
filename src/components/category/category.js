import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {CategoryTitle, CategoryContainer} from "./category.styles";
import ProductCard from "../product-card";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

const Category = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);


    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

                {
                    products &&
                    products.map((product) => (<ProductCard key={product.id} product={product}/>))
                }
            </CategoryContainer>
        </>
    )
};

export default Category;