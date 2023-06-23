import React from "react"
import "./MobileNav.css"

function MobileNav({ navData }) {
  return (
    <>
      <div className="nav-bar-container">
        {navData.map((item) => {
          return <img src={item} alt="mobile nav images" />
        })}
      </div>
    </>
  )
}

export default MobileNav
