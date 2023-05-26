import React, { useState, useEffect } from "react"
import "./AzureProducts.css"
import AzureServicesCards from "./AzureServicesCards"

function AzureProducts() {
  const [data, setData] = useState([])
  const [nav, setNav] = useState([])
  const [val, setVal] = useState("featured")
  const [aiData, setAiData] = useState([])
  const [computeData, setComputeData] = useState([])
  const [containerData, setContainerData] = useState([])
  const [hybridData, setHybridData] = useState([])
  const [iotData, setIotData] = useState([])
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/azure-json-data/data.json"
    )
      .then((responce) => {
        return responce.json()
      })
      .then((data) => {
        setData(data.featured)
        setAiData(data.AIML)
        setComputeData(data.compute)
        setNav(data.productsList)
        setContainerData(data.containers)
        setHybridData(data.hybridMulticloud)
        setIotData(data.Iot)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  // console.log(data)

  const handleClick = (item) => {
    setVal(item)
  }
  console.log(val)
  console.log(data.val)

  return (
    <>
      <div className="azure-products-services">
        <div className="azure-products-service-container">
          <div className="azure-products">
            <div className="azure-products-container">
              {nav.map((item) => {
                return (
                  <a onClick={() => handleClick(item.value)}>{item.text}</a>
                )
              })}
            </div>
          </div>
          <div className="azure-services">
            <div className="azure-services-container">
              {val === "featured" &&
                data.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
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
                    />
                  )
                })}
              {val === "containers" &&
                aiData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
                    />
                  )
                })}
              {val === "hybridMulticloud" &&
                hybridData.map((item) => {
                  return (
                    <AzureServicesCards
                      img={item.image}
                      text={item.text}
                      link={item.link}
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
