import React, { useState, useEffect, useRef } from "react"
import DataMainCardTwo from "./DataMainCardTwo"
import ProductDesktopCards from "./ProductDesktopCards"
import "./SportsEssential.css"
import arrow from "../../../assets/img/btnarrowdesktop.svg"

function SportsEssential({mainCardData, productCardTwo}) {
  const imageCard = useRef()
  const arrowRight = useRef()
  const arrowLeft = useRef()

  const handleClickRight = () => {
    imageCard.current.style.transform = `translateX(${-50}%)`
    arrowRight.current.style.display = "none"
    arrowLeft.current.style.display="flex"
    imageCard.current.style.transition = "transform ease-in-out 0.45s"
  }
  const handleClickLeft = () => {
    imageCard.current.style.transform = `translateX(${2}%)`
    arrowLeft.current.style.display = "none"
    arrowRight.current.style.display="flex"
    imageCard.current.style.transition = "transform ease-in-out 0.45s"
  }

  return (
    <>
      <div className="sports-essentials">
        <div className="sports-essential-main-card">
          <DataMainCardTwo text={mainCardData[0]} />
        </div>
        <div
          className="left-btn-sports"
          ref={arrowLeft}
          onClick={handleClickLeft}
        >
          <img src={arrow} />
        </div>
        <div className="sports-essential-products" ref={imageCard}>
          {productCardTwo.map((item) => {
            return (
              <ProductDesktopCards
                img={item.img}
                heading={item.heading}
                link={item.link}
                text={item.text}
                key={item.img}
              />
            )
          })}
        </div>
        <div
          className="right-btn-sports"
          onClick={handleClickRight}
          ref={arrowRight}
        >
          <img src={arrow} />
        </div>
      </div>
    </>
  )
}

export default SportsEssential
