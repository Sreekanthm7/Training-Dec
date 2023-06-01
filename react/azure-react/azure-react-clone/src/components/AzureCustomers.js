import React, { useState, useEffect, useRef } from "react"
import AzureCustomerCards from "./AzureCustomerCards"
import "./AzureCustomers.css"

function AzureCustomers() {
  const [nav, setNav] = useState([])
  const [fujitsuData, setFujitsuData] = useState({})
  const [nbaData, setNbaData] = useState({})
  const [val, setVal] = useState("Fujitsu")
  const [handrData, setHandRData] = useState({})
  const [nhsData, setNhsData] = useState({})
  const [forzaData, setForzaData] = useState([])
  const [style, setStyle] = useState("customer-img-container")


  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/azure-json-data/data.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setNav(data.CustomerList)
        setFujitsuData(data.Fujitsu)
        setNbaData(data.NBA)
        setHandRData(data.HandR)
        setNhsData(data.NHS)
        setForzaData(data.Forza)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = (item) => {
    setVal(item)
  }

  const changeStyle = () => {
    console.log("you just clicked")
    setStyle("customer-img-container-two")
  }


  return (
    <>
      <div className="azure-customer-container">
        <div className="customer-icons-container">
          {nav.map((item) => {
            return (
              <a key={item.value}>
                <div
                  className={style}
                  onClick={() => {
                    handleClick(item.value)
                    changeStyle()
                  }}
                >
                  <img src={item.image} />
                
                </div>
              </a>
            )
          })}
        </div>
        {val === "Fujitsu" && (
          <AzureCustomerCards
            img={fujitsuData.backgroundImg}
            text={fujitsuData.text}
          />
        )}
        {val === "NBA" && (
          <AzureCustomerCards img={nbaData.backgroundImg} text={nbaData.text} />
        )}
        {val === "HandR" && (
          <AzureCustomerCards
            img={handrData.backgroundImg}
            text={handrData.text}
          />
        )}
        {val === "NHS" && (
          <AzureCustomerCards img={nhsData.backgroundImg} text={nhsData.text} />
        )}
        {val === "Forza" && (
          <AzureCustomerCards
            img={forzaData.backgroundImg}
            text={forzaData.text}
          />
        )}
      </div>
    </>
  )
}

export default AzureCustomers
