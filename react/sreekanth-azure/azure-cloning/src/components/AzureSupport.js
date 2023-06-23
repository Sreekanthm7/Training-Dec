import React from "react"
import "./AzureSupport.css"
import AzureSupportCard from "./AzureSupportCard"

function AzureSupport({ supportData }) {
  return (
    <>
      <div className="azure-support">
        <div className="azure-support-container">
          {supportData.map((item, index) => {
            return (
              <AzureSupportCard
                bg={item.bg}
                img={item.image}
                title={item.title}
                text={item.text}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AzureSupport
