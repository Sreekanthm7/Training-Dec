import React from "react"
import "./PopularPicks.css"
import PopularCards from "./PopularCards"

function PopularPicks({ PopularPicksData, PopularPicksCardData }) {
  return (
    <>
      <div className="popular-picks-cotainer">
        <div className="popular-picks-top">
          <div className="popular-picks-img">
            <img src={PopularPicksData.backgroundImg} />
          </div>
          <div className="popular-picks-content">
            <p>{PopularPicksData.text}</p>
            <img src="https://rukminim1.flixcart.com/www/32/32/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=80" />
          </div>
        </div>
        <div className="popular-picks-card-container">
          {PopularPicksCardData.map((item) => {
            return (
              <PopularCards
                img={item.img}
                alt="popular picks images"
                text={item.text}
                link={item.link}
                key={item.img}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PopularPicks
