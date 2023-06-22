import React from "react"
import "./SalesIsLive.css"

function SalesIsLive({salesIsLive, salesCardData}) {
  return (
    <>
      <div className="sales-is-live-container">
        <div className="sales-is-live-top-img">
          <img src={salesIsLive} />
        </div>
        <div className="sales-live-cards-container">
          {salesCardData.map((item) => {
            return (
              <div className="sales-is-live-card-img" key={item}>
                <img src={item} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SalesIsLive
