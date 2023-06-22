import React from "react"
import "./GraborGone.css"
import GrabOrGoneCards from "./GrabOrGoneCards"

function GraborGone({grabOrGone, grabOrGoneCard}) {
  return (
    <>
      <div className="grab-or-gone-container">
        <div className="grab-or-gone-container-head">
          <div className="grab-or-gone-head-img">
            <img src={grabOrGone.img} />
          </div>
          <div className="grab-or-gone-head-content">
            <p>{grabOrGone.text}</p>
            <div className="view-all-btn">
              <p>View all</p>
            </div>
          </div>
        </div>
        <div className="grab-or-gone-card-container">
          <div className="grab-or-gone-card-container-box">
            {grabOrGoneCard.map((item) => {
              return (
                <GrabOrGoneCards
                  img={item.img}
                  text={item.text}
                  link={item.link}
                  key={item.img}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default GraborGone
