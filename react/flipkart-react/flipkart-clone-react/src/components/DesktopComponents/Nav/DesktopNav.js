import React from "react"
import "./DesktopNav.css"

function DesktopNav({ img, text }) {
  return (
    <>
      <div className="desktop-nav">
        <div className="desktop-nav-cards" key={img}>
          <div className="desktop-nav-img">
            <img src={img} />
          </div>
          <div className="nav-title">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopNav
