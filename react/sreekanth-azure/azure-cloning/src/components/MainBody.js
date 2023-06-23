import React, { useState, useEffect } from "react"
import AzureProducts from "./AzureProducts"
import HybridData from "./HybridData"
import Innovation from "./Innovation"
import "./MainBody.css"
import AzureCustomers from "./AzureCustomers"
import AccelarationMigration from "./AccelarationMigration"
import DiscoverAzure from "./DiscoverAzure"
import DeveloperStories from "./DeveloperStories"
import AzureSupport from "./AzureSupport"

function MainBody() {
  const [innovationData, setInnovationData] = useState([])
  const [hybridData, setHybridData] = useState([])
  const [nav, setNav] = useState([])
  const [val, setVal] = useState("featured")
  const [featuredData, setFeaturedData] = useState([])
  const [aiData, setAiData] = useState([])
  const [computeData, setComputeData] = useState([])
  const [containerData, setContainerData] = useState([])
  const [hybridMulticloudData, setHybridMulticloudData] = useState([])
  const [iotData, setIotData] = useState([])
  const [customerNav, setCustomerNav] = useState([])
  const [fujitsuData, setFujitsuData] = useState({})
  const [customerVal, setCustomerVal] = useState("Fujitsu")
  const [nbaData, setNbaData] = useState({})
  const [handrData, setHandRData] = useState({})
  const [nhsData, setNhsData] = useState({})
  const [forzaData, setForzaData] = useState([])
  const [accelarationData, setAccelarationData] = useState({})
  const [discoverData, setDiscoverData] = useState([])
  const [developerData, setDeveloperData] = useState([])
  const [supportData, setSupportData] = useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/azure-json-data/data.json"
    )
      .then((responce) => {
        return responce.json()
      })
      .then((data) => {
        setHybridData(data.hybridData)
        setInnovationData(data.innovation)
        setNav(data.productsList)
        setFeaturedData(data.featured)
        setAiData(data.AIML)
        setComputeData(data.compute)
        setContainerData(data.containers)
        setHybridMulticloudData(data.hybridMulticloud)
        setIotData(data.Iot)
        setFujitsuData(data.Fujitsu)
        setCustomerNav(data.CustomerList)
        setNbaData(data.NBA)
        setHandRData(data.HandR)
        setNhsData(data.NHS)
        setForzaData(data.Forza)
        setAccelarationData(data.accelarationMigration)
        setDiscoverData(data.discoverAzure)
        setDeveloperData(data.developerStories)
        setSupportData(data.azureSupport)

      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = (item) => {
    setVal(item)
    setCustomerVal(item)
  }

  return (
    <div>
      <Innovation innovationData={innovationData} />
      <div className="on-premise-hybrid">
        <div className="on-premise-hybrid-container">
          <h2>
            On-premises, hybrid, multicloud, or at the edge—create secure,
            future-ready cloud solutions on Azure
          </h2>
        </div>
      </div>
      <div className="hybrid-data-container">
        <div className="hybrid-data">
          {hybridData.map((item, index) => (
            <HybridData
              img={item.backgroundImg}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="new-to-azure">
        <div className="new-to-azure-container">
          <p>New to Azure?</p>
          <a href="#">Get an overview</a>
        </div>
      </div>
      <div className="products-service-heading">
        <div className="products-service-heading-container">
          <h2>
            Start putting your ideas into action with Azure products and
            services
          </h2>
        </div>
      </div>
      <div className="blank-container"></div>
      <AzureProducts
        nav={nav}
        handleClick={handleClick}
        featuredData={featuredData}
        val={val}
        aiData={aiData}
        computeData={computeData}
        containerData={containerData}
        hybridMulticloudData={hybridMulticloudData}
        iotData={iotData}
      />
      <div className="see-all-products-container">
        <a>
          <span>See all products(200+)</span>
          <span className="arrow"></span>
        </a>
      </div>
      <div className="customer-innovating">
        <div className="customer-innovation-container">
          <h2>Find out how these customers are innovating with Azure</h2>
        </div>
      </div>
      <AzureCustomers
        customerNav={customerNav}
        fujitsuData={fujitsuData}
        val={customerVal}
        nbaData={nbaData}
        handleClick={handleClick}
        handrData={handrData}
        nhsData={nhsData}
        forzaData={forzaData}
      />
      <AccelarationMigration accelarationData={accelarationData} />
      <DiscoverAzure discoverData={discoverData} />
      <DeveloperStories developerData={developerData} />
      <AzureSupport supportData={supportData} />
    </div>
  )
}

export default MainBody
