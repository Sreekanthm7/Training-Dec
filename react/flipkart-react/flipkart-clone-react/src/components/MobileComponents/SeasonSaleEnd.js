import React from "react"
import "./SeasonSaleEnd.css"

function SeasonSaleEnd({seasonSaleEnd}) {
  return (
    <>
      <div className="season-end-sale">
        <div className="season-end-sale-head">
          <h3>End of Season Sale</h3>
          <p>Sponsored</p>
        </div>
        <div className="season-end-sale-cards">
          {seasonSaleEnd.map((item) => {
            return <img src={item} className="season-end-sale-img" key={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default SeasonSaleEnd
