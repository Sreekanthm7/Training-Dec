import React from "react"
import "./OfferNav.css"

function OfferNav({ offerNavData }) {
  return (
    <>
      <div className="offer-nav">
        {offerNavData.map((item) => {
          return (
            <div className="offer-nav-img" key={item}>
              <img src={item} alt="offer nav images" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OfferNav
