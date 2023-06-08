import React from "react"
import BeautyAndMore from "./BeautyAndMore"
import BestOfElectronics from "./BestOfElectronics"
import DesktopCarousel from "./DesktopCarousel"
import './DesktopMainBody.css'
import SportsEssential from "./SportsEssential"

function DesktopMainBody() {
  return (
    <>
      <div className="desktop-main-body">
        <DesktopCarousel />
        <BestOfElectronics />
        <BeautyAndMore />
        <SportsEssential />
      </div>
    </>
  )
}

export default DesktopMainBody
