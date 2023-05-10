import {selectCategoriesMap} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview";
import {useSelector} from "react-redux";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className='category-preview-container'>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} products={products} title={title}/>
            })}
        </div>
    )
}

export default CategoriesPreview;