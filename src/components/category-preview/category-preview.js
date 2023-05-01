import ProductCard from "../product-card";
import {Link} from 'react-router-dom';

import {CategoryPreviewContainer, Title, Preview} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title>
                    <Link to={title}>
                         {title.toUpperCase()}
                    </Link>
                </Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (<ProductCard product={product} key={product.id}/>))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;