import React from "react"
import "./AccelarationMigration.css"

function AccelarationMigration({ accelarationData }) {
  return (
    <>
      <div className="accelaration-migration">
        <div className="accelaration-migration-container">
          <div className="accelaraton-migration-img">
            <img src={accelarationData.image} />
          </div>
          <div className="accelaration-migration-content">
            <h2>{accelarationData.text}</h2>
            <div className="explore-btn">
              <a>Explore help and tools</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccelarationMigration
