import React, {useState} from "react"
import "./DesktopCarousel.css"
import arrow from "../../../assets/img/btnarrowdesktop.svg"

function DesktopCarousel({desktopCarousel}) {
  const [index, setIndex] = useState(0)
  const CallIndex = () => {
    setIndex(index == desktopCarousel.length - 1 ? 0 : index + 1)
  }
  // useEffect(() => {
     setTimeout(CallIndex, 3000)
  // })
  const handleClickRight = () => {
    setIndex(index + 1)
    CallIndex()
    clearTimeout()
  }

  const handleClickLeft = () => {
    setIndex(index - 1)
    CallIndex()
    clearTimeout()
  }

  // const clearInterval = () => {
  //   clearTimeout()
  //   setTimeout(CallIndex, 3000)
  // }
  return (
    <>
      <div className="desktop-carousel">
        <div className="left-btn" onClick={handleClickLeft}>
          <img src={arrow} />
        </div>
        <div className="desktop-carousel-container">
          {desktopCarousel.map((item) => {
            return (
              <div
                className="desktop-carousel-img"
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
        <div className="right-btn" onClick={handleClickRight}>
          <img src={arrow} />
        </div>
      </div>
    </>
  )
}

export default DesktopCarousel
