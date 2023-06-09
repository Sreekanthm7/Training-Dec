import React, { useState, useEffect } from "react"
import DataMainCardTwo from "./DataMainCardTwo"
import "./MonsoonEssentials.css"
import ProductDesktopCards from "./ProductDesktopCards"
import arrow from "../../../assets/img/btnarrowdesktop.svg"


function MonsoonEssentials() {
  const [mainCard, setMainCard] = useState([])
  const [productCard, setProductCard] = useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/flipkart-json-data/flipkart.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMainCard(data.MonsoonEssentialsMainCard)
        setProductCard(data.MonsoonEssentialsDesktopCards)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="monsoon-essentials">
        <div className="moonsoon-essential-main-card">
          <DataMainCardTwo text={mainCard} />
        </div>
        <div className="monsoon-essential-products">
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
        <div className="right-btn-monsoon">
        <img src={arrow} />
        </div>
      </div>
    </>
  )
}

export default MonsoonEssentials
