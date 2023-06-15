import React from "react"
import "./MobileNav.css"

function MobileNav({navData}) {
  return (
    <>
         <div className="nav-bar-container">
          {navData.map((item) => {
            return <img src={item}></img>
          })}
        </div>
    </>
  )
}

export default MobileNav
