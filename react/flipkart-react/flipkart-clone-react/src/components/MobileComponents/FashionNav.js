import React from "react"
import "./FashionNav.css"

function FashionNav({fashionData}) {
  return (
    <>
      <div className="fashion-nav">
        {fashionData.map((item) => {
          return (
            <div className="fashion-nav-img" key={item}>
              <img src={item} alt="fashion nav images" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FashionNav
