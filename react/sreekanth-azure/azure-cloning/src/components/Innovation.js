import React from "react"
import "./Innovation.css"

function Innovation({innovationData}) {
  
  return (
    <>
        <div className="azure-innovation-mobile">
          <div className="innovation-background-img-mobile">
            <img src={innovationData.backgroundImg} />
          </div>
          <div className="innovation-content-container">
            <div className="innovation-content-body">
              <div className="innovation-content">
                <h1>{innovationData.title}</h1>
                <div className="innovation-content-text-container">
                  <h1>{innovationData.heading}</h1>
                  <p>{innovationData.text}</p>
                </div>
                <div className="innovation-buttons">
                  <a href="#" className="get-started-btn">
                    <span>Get started</span>
                  </a>
                  <a href="#" className="try-azure-btn">
                    <span>Try Azure for free</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Innovation
