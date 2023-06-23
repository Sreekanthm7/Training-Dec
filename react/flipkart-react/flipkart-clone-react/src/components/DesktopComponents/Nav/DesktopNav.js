import React from "react"
import "./DesktopNav.css"

function DesktopNav({desktopNavData}) {
  return (
    <>
      <div className="desktop-nav-container">
        {desktopNavData.map((item) => {
          return (
            <div className="desktop-nav">
              <div className="desktop-nav-cards" key={item}>
                <div className="desktop-nav-img">
                  <img src={item.img} alt="nav bar images" />
                </div>
                <div className="nav-title">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DesktopNav
