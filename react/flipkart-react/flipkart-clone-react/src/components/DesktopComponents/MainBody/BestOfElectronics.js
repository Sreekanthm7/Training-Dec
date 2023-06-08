import React, { useState, useEffect } from "react"
import "./BestOfElectronics.css"
import DataMainCard from "./DataMainCard"
import ProductDesktopCards from "./ProductDesktopCards"

function BestOfElectronics() {
  const [mainCardData, setMainCardData] = useState({})
  const [productCard, setProductCard] = useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/flipkart-json-data/flipkart.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMainCardData(data.BestOfElectronics)
        setProductCard(data.ElectronicsDesktop)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="best-of-electronics">
        <div className="best-of-electronics-container">
          <DataMainCard
            img={mainCardData.backgroundImg}
            text={mainCardData.text}
          />
          <div className="electronics-card-container">
            {productCard.map((item) => {
              return(
              <ProductDesktopCards img={item.img} heading={item.heading} link={item.link} text={item.text} />
              )
            })}
          </div>
        </div>
        <div className="flight-trip-add">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/00b3f96c786dd3d6.jpg?q=70" />
        </div>
      </div>
    </>
  )
}

export default BestOfElectronics
