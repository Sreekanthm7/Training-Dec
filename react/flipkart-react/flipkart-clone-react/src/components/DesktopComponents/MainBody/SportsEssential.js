import React, { useState, useEffect } from "react"
import ProductDesktopCards from "./ProductDesktopCards"
import "./SportsEssential.css"

function SportsEssential() {
  const [productCard, setProductCard] = useState([])
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/flipkart-json-data/flipkart.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProductCard(data.SportEssentialsDesktopCards)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="sports-essentials">
        <div className="sports-essential-main-card">
          <div className="data-main-card-two-content">
            <h2>Sports & Fitness Essentials</h2>
            <span className="view-all-btn-card-two">VIEW ALL</span>
          </div>
          </div>
        <div className="sports-essential-products">
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

export default SportsEssential
