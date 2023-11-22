import React from "react";

import  { portfolioTemplate } from "../../util/text_mappings/portfolio.js"


export const PortfolioContainers = () => {
  return (
    <div className="container-wrapper">

      {
        portfolioTemplate.map((data, key) =>{
          return(
            <React.Fragment>
              <div className="image-container" key={key}>
                <img src={data.image} alt="Placeholder" />
              </div>
              <div className="right-container">
              {data.text}
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  );
};

export default PortfolioContainers;
