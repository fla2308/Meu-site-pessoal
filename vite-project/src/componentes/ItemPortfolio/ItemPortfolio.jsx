import React from "react";

import "./ItemPortfolio.css";

function ItemPortfolio() {
return (
<div className="item-portfolio">
    <a href={portfolio.link} target="_blank">
        <p>{portfolio.title}</p>
        </a>
</div>
 
    );
}

export default ItemPortfolio;