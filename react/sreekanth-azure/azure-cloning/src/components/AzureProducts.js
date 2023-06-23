import React, { useState, useEffect } from "react"
import "./AzureProducts.css"
import AzureServicesCards from "./AzureServicesCards"

function AzureProducts({
  nav,
  handleClick,
  featuredData,
  val,
  aiData,
  computeData,
  containerData,
  hybridMulticloudData,
  iotData,
}) {
  return (
    <>
      <div className="azure-products-services">
        <div className="azure-products-service-container">
          <div className="azure-products">
            <div className="azure-products-container">
              {nav.map((item) => {
                return (
                  <a onClick={() => handleClick(item.value)} key={item.value}>
                    {item.text}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="azure-services">
            <div className="azure-services-container">
              {val === "featured" &&
                featuredData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
              {val === "AIML" &&
                aiData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
              {val === "compute" &&
                computeData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
              {val === "containers" &&
                containerData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
              {val === "hybridMulticloud" &&
                hybridMulticloudData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
              {val === "Iot" &&
                iotData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                      key={item.image}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AzureProducts
