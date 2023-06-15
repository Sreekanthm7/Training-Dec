import React from "react"
import "./OfferNav.css"

function OfferNav({ img }) {
  return (
    <>
      <div className="offer-nav-img" key={img}>
        <img src={img} />
      </div>
    </>
  )
}

export default OfferNav
