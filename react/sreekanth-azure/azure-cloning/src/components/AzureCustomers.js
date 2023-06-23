import React from "react"
import AzureCustomerCards from "./AzureCustomerCards"
import "./AzureCustomers.css"

function AzureCustomers({
  customerNav,
  fujitsuData,
  val,
  handleClick,
  nbaData,
  handrData,
  nhsData,
  forzaData,
}) {
  return (
    <>
      <div className="azure-customer-container">
        <div className="customer-icons-container">
          {customerNav.map((item) => {
            return (
              <a key={item.value}>
                <div
                  className="customer-img-container"
                  onClick={() => {
                    handleClick(item.value)
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
