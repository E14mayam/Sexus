import React from "react";

const Article = ({title, article, coverImg}) => {
    return(
        <div>
            <img src={coverImg} alt="" />
            <h1>{title}</h1>
            <p>{article}</p>
        </div>
    )
}

export default Article;