import React from "react"
import "./Carousel.css"

function Carousel({carousel, index}) {
  return (
    <>
      <div className="carousel-mobile">
        {carousel.map((item) => {
          return (
            <div
              className="carousel-img"
              style={{
                transform: `translateX(${-100 * index}%)`,
                transition: "transform ease-out 0.45s",
              }}
              key={item}
            >
              <img src={item} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Carousel
