import React from "react"
import "./DiscoverAzure.css"
import DiscoverAzureCards from "./DiscoverAzureCards"

function DiscoverAzure({ discoverData }) {
  return (
    <>
      <div className="discover-azure">
        <div className="discover-azure-container">
          <div className="discover-azure-heading">
            <h2>Discover what's happening on Azure</h2>
          </div>
          <div className="discover-azure-card-container">
            {discoverData.map((item) => {
              return (
                <DiscoverAzureCards
                  img={item.image}
                  title={item.title}
                  text={item.text}
                  key={item.text}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscoverAzure
