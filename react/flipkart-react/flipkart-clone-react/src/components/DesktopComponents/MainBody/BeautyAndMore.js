import React, { useState, useEffect } from "react"
import "./BeautyAndMore.css"
import DataMainCardTwo from "./DataMainCardTwo"
import ProductDesktopCards from "./ProductDesktopCards"

function BeautyAndMore() {
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
        setMainCardData(data.BeautyFoodToysAndMore)
        setProductCard(data.BeautyFoodToysAndMoreDesktopCards)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="beauty-and-more">
        <div className="beauty-and-more-main-card">
          <DataMainCardTwo
            img={mainCardData.backgroundImg}
            text={mainCardData.text}
          />
        </div>
        <div className="beauty-and-more-products">
          {productCard.map((item) => {
            return (
              <ProductDesktopCards
                img={item.img}
                heading={item.heading}
                link={item.link}
                text={item.text}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BeautyAndMore
