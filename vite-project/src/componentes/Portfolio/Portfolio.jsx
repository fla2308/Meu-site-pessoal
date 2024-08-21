import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./portfolio.css";

function portfolio({portfolio}) {
 
    return(
        <main>
          
           {portfolio.map(
            (item, index)=>
           <ItemPortfolio
            key={index}
            link={item.link}
            image={item.image}
            title={item.title}
            ></ItemPortfolio>
           )}
       
     </main>
    )
}

export default portfolio;
