import React from "react"
import "./FashionNav.css"

function FashionNav({img}) {
 
  return (
    <>
   
        <div className="fashion-nav-img" key={img}> 
          <img src={img} />
        </div>
    </>
  )
}

export default FashionNav
