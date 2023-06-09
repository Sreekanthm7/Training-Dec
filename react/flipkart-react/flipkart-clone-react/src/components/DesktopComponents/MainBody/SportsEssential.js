import React, { useState, useEffect } from "react"
import DataMainCardTwo from "./DataMainCardTwo"
import ProductDesktopCards from "./ProductDesktopCards"
import "./SportsEssential.css"
import arrow from "../../../assets/img/btnarrowdesktop.svg"


function SportsEssential() {
  const [productCard, setProductCard] = useState([])
  const [mainCard, setMainCard] = useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/flipkart-json-data/flipkart.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProductCard(data.SportEssentialsDesktopCards)
        setMainCard(data.SportsEssentialMainCard)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="sports-essentials">
        <div className="sports-essential-main-card">
          <DataMainCardTwo text={mainCard} />
        </div>
        <div className="sports-essential-products">
          {productCard.map((item) => {
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
        <div className="right-btn-sports">
          <img src={arrow} />
        </div>
      </div>
    </>
  )
}

export default SportsEssential
