import React, {useState, useEffect} from 'react'
import HybridData from './HybridData'
import Innovation from './Innovation'
import './MainBody.css'

function MainBody() {
  const [data, setData] = useState([])
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/azure-json-data/data.json"
    )
      .then((responce) => {
        return responce.json()
      })
      .then((data) => {
        setData(data.hybridData)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data);
  return (
    
    <div>
      <Innovation />
      <div className='on-premise-hybrid'>
        <div className='on-premise-hybrid-container'> 
          <h2>On-premises, hybrid, multicloud, or at the edge—create secure, future-ready cloud solutions on Azure</h2>
        </div>
      </div>
      <div className="hybrid-data-container">
        <div className="hybrid-data">
      {
        data.map((item) => (
          <HybridData img={item.backgroundImg} title={item.title} text={item.text}/>

        ))
      }
      </div>
      </div>
      <div className='new-to-azure'>
        <div className='new-to-azure-container'>
          <p>New to Azure?</p>
          <a href='#'>Get an overview</a>
        </div>
      </div>
    </div>
  )
}

export default MainBody