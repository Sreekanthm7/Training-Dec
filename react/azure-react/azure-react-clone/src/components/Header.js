import React from "react"
import hamburger from "./assets/hamburger.svg"

function Header() {
  return (
    <>
      <div className="azure-header">
        <div className="azure-mobile-header">
            <div className="azure-hamburger">
                <div className="hamburger">
                <img src={hamburger} />
                </div>
                <div className="azure-text">
                <a href="#">Azure</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
