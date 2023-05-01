import React from "react";

import {useNavigate} from "react-router-dom";
import {DirectoryItemBodyContainer, BackgroundImage, DirectoryItemContainer} from "./directory-item.styles";

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
                <BackgroundImage style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                />
                <DirectoryItemBodyContainer>
                    <h1>{title}</h1>
                    <p>Shop now</p>
                </DirectoryItemBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;