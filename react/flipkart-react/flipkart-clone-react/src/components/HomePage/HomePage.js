import React, { useState, useEffect, useRef } from "react"
import FlipkartFooter from "../DesktopComponents/Footer/FlipkartFooter"
import HeaderDesktop from "../DesktopComponents/Header/HeaderDesktop"
import BeautyAndMore from "../DesktopComponents/MainBody/BeautyAndMore"
import BestOfElectronics from "../DesktopComponents/MainBody/BestOfElectronics"
import DesktopCarousel from "../DesktopComponents/MainBody/DesktopCarousel"
import MonsoonEssentials from "../DesktopComponents/MainBody/MonsoonEssentials"
import SportsEssential from "../DesktopComponents/MainBody/SportsEssential"
import DesktopNav from "../DesktopComponents/Nav/DesktopNav"
import Carousel from "../MobileComponents/Carousel"
import FashionNav from "../MobileComponents/FashionNav"
import GraborGone from "../MobileComponents/GraborGone"
import Header from "../MobileComponents/Header"
import MobileNav from "../MobileComponents/MobileNav"
import OfferNav from "../MobileComponents/OfferNav"
import PopularPicks from "../MobileComponents/PopularPicks"
import SalesIsLive from "../MobileComponents/SalesIsLive"
import SeasonSaleEnd from "../MobileComponents/SeasonSaleEnd"
import "./HomePage.css"

function HomePage() {
  const [navData, setNavData] = useState([])
  const [desktopNavData, setDesktopNavData] = useState([])
  const [carousel, setCarousel] = useState([])
  let [index, setIndex] = useState(0)
  const [fashionData, setFashionData] = useState([])
  const [offerNavData, setOfferNavData] = useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Sreekanthm7/jsondata/main/flipkart-json-data/flipkart.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDesktopNavData(data.flipkartDesktopNav)
        setNavData(data.flipkartNavMobile)
        setCarousel(data.flipkartCarouselMobile)
        setFashionData(data.fashionNavMobile)
        setOfferNavData(data.navOfferSales)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const CallIndex = () => {
    setIndex(index === carousel.length - 1 ? 0 : index + 1)
  }

  useEffect(() => {
    setTimeout(CallIndex, 2000)
  })

  return (
    <>
      <div className="Mobile-home-page">
        <Header />
        <div className="nav-bar-container">
          {navData.map((item) => {
            return <MobileNav img={item} />
          })}
        </div>

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
                <Carousel img={item} />
              </div>
            )
          })}
        </div>
        <div className="fashion-nav">
          {fashionData.map((item) => {
            return <FashionNav img={item} />
          })}
        </div>

        <div className="offer-nav">
          {offerNavData.map((item) => {
            return(
             <OfferNav img={item}/>
            )
          })}
        </div>

        <PopularPicks />
        <SeasonSaleEnd />
        <GraborGone />
        <SalesIsLive />
      </div>
      <div className="Desktop-home-page">
        <HeaderDesktop />
        <div className="desktop-nav-container">
          {desktopNavData.map((item) => {
            return <DesktopNav img={item.img} text={item.text} />
          })}
        </div>
        <div className="desktop-main-body">
          <DesktopCarousel />
          <BestOfElectronics />
          <BeautyAndMore />
          <SportsEssential />
          <MonsoonEssentials />
        </div>
        <FlipkartFooter />
      </div>
    </>
  )
}

export default HomePage
