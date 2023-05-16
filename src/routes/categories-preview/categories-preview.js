import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview";
import Spinner from "../../components/spinner";

import {useSelector} from "react-redux";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <div className='category-preview-container'>
            {
                isLoading ? <Spinner/> :
                    Object.keys(categoriesMap).map((title) => {
                            const products = categoriesMap[title];
                            return <CategoryPreview key={title} products={products} title={title}/>
                        })
            }

        </div>
    )
}

export default CategoriesPreview;