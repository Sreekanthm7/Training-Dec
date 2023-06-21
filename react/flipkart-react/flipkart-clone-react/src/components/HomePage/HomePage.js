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
  const [carousel, setCarousel] = useState([])
  let [index, setIndex] = useState(0)
  const [PopularPicksCardData, setPopularPicksCardData] = useState([])
  const [grabOrGoneCardData, setGrabOrGoneCardData] = useState([])
  const [salesCardData, setSalesCardData] = useState([])
  const [productCard, setProductCard] = useState([])
  const [productCardBeauty, setProductCardBeauty] = useState([])
  const [productSportsCard, setProductSportsCard] = useState([])
  const [productCardMonsoon, setProductCardMonsoon] = useState([])
  const [components, setComponents] = useState([])

  const fetchData = () => {
    fetch("http://127.0.0.1:5500/flipkart.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPopularPicksCardData(data.popularPicksCardsMobile)
        setGrabOrGoneCardData(data.grabGoneCards)
        setSalesCardData(data.salesLiveCards)
        setProductCard(data.ElectronicsDesktop)
        setProductCardBeauty(data.BeautyFoodToysAndMoreDesktopCards)
        setProductSportsCard(data.SportEssentialsDesktopCards)
        setProductCardMonsoon(data.MonsoonEssentialsDesktopCards)
        setComponents(data)
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
  }, [])

  setTimeout(CallIndex, 3000)

  let arr = []
  Object.keys(components).map((key) => {
    let obj = {
      key: key,
      value: components[key],
    }
    arr.push(obj)
  })
  console.log(arr)

  const getMobileData = (item) => {
    switch (item.key) {
      case "flipkartNavMobile":
        return <MobileNav navData={item.value} />
      case "flipkartCarouselMobile":
        return <Carousel carousel={item.value} />
      case "fashionNavMobile":
        return <FashionNav fashionData={item.value} />
      case "navOfferSales":
        return <OfferNav offerNavData={item.value} />
      case "popularPicksMobile":
        return (
          <PopularPicks
            PopularPicksData={item.value}
            PopularPicksCardData={PopularPicksCardData}
          />
        )
      case "seasonEndSaleMobile":
        return <SeasonSaleEnd seasonSaleEnd={item.value} />
      case "grabOrGone":
        return (
          <GraborGone
            grabOrGone={item.value}
            grabOrGoneCard={grabOrGoneCardData}
          />
        )
      case "saleIsLive":
        return (
          <SalesIsLive salesIsLive={item.value} salesCardData={salesCardData} />
        )
    }
  }

  const getDesktopData = (item) => {
    switch (item.key) {
      case "flipkartDesktopNav":
        return <DesktopNav desktopNavData={item.value} />
      case "DesktopCarousel":
        return <DesktopCarousel desktopCarousel={item.value} />
      case "BestOfElectronics":
        return (
          <BestOfElectronics
            mainCardData={item.value}
            productCard={productCard}
          />
        )
      case "BeautyFoodToysAndMore":
        return (
          <BeautyAndMore
            mainCardData={item.value}
            productCard={productCardBeauty}
          />
        )
      case "SportsEssentialMainCard":
        return (
          <SportsEssential
            mainCardData={item.value}
            productCardTwo={productSportsCard}
          />
        )
      case "MonsoonEssentialsMainCard":
        return (
          <MonsoonEssentials
            mainCardData={item.value}
            productCardTwo={productCardMonsoon}
          />
        )
    }
  }

  return (
    <>
      <div className="Mobile-home-page">
        <Header />
        {arr.map((item) => getMobileData(item))}
      </div>

      <div className="Desktop-home-page">
        <HeaderDesktop />

        {arr.map((item) => getDesktopData(item))}
      </div>
      <div className="flipkart-footer">
      <FlipkartFooter />
      </div>
    </>
  )
}

export default HomePage



