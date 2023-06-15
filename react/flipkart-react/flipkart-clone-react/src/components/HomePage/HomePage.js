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
  const [PopularPicksData, setPopularPicksData] = useState({})
  const [PopularPicksCardData, setPopularPicksCardData] = useState([])
  const [seasonSaleEndData, setSeasonSaleEndData] = useState([])
  const [grabOrGoneData, setGrabOrGoneData] = useState({})
  const [grabOrGoneCardData, setGrabOrGoneCardData] = useState([])
  const [salesIsLiveData, setSalesLiveData] = useState({})
  const [salesCardData, setSalesCardData] = useState([])
  const [Desktopcarousel, setDesktopCarousel] = useState([])
  const [mainCardData, setMainCardData] = useState({})
  const [productCard, setProductCard] = useState([])
  const [mainCardBeautyData, setMainCardBeautyData] = useState({})
  const [productCardBeauty, setProductCardBeauty] = useState([])
  const [productSportsCard, setProductSportsCard] = useState([])
  const [mainCardSports, setMainCardSports] = useState([])
  const [mainCardMonsoon, setMainCardMonsson] = useState([])
  const [productCardMonsoon, setProductCardMonsoon] = useState([])

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
        setPopularPicksData(data.popularPicksMobile)
        setPopularPicksCardData(data.popularPicksCardsMobile)
        setSeasonSaleEndData(data.seasonEndSaleMobile)
        setGrabOrGoneData(data.grabOrGone)
        setGrabOrGoneCardData(data.grabGoneCards)
        setSalesLiveData(data.saleIsLive)
        setSalesCardData(data.salesLiveCards)
        setDesktopCarousel(data.DesktopCarousel)
        setMainCardData(data.BestOfElectronics)
        setProductCard(data.ElectronicsDesktop)
        setMainCardBeautyData(data.BeautyFoodToysAndMore)
        setProductCardBeauty(data.BeautyFoodToysAndMoreDesktopCards)
        setMainCardSports(data.SportsEssentialMainCard)
        setProductSportsCard(data.SportEssentialsDesktopCards)
        setMainCardMonsson(data.MonsoonEssentialsMainCard)
        setProductCardMonsoon(data.MonsoonEssentialsDesktopCards)
     
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
  const CallCarouselIndex = () => {
    setIndex(index == carousel.length - 1 ? 0 : index + 1)
  }

  setTimeout(CallIndex, 3000)

  const handleClickRight = () => {
    setIndex(index + 1)
    CallCarouselIndex()
    clearTimeout()
  }

  const handleClickLeft = () => {
    setIndex(index - 1)
    CallCarouselIndex()
    clearTimeout()
  }

  console.log()
  return (
    <>
      <div className="Mobile-home-page">
        <Header />

        <MobileNav navData={navData} />

        <Carousel carousel={carousel} />

        <FashionNav fashionData={fashionData} />

 
       <OfferNav offerNavData={offerNavData} />
     

        <PopularPicks
          PopularPicksData={PopularPicksData}
          PopularPicksCardData={PopularPicksCardData}
        />
        <SeasonSaleEnd seasonSaleEnd={seasonSaleEndData} />
        <GraborGone
          grabOrGone={grabOrGoneData}
          grabOrGoneCard={grabOrGoneCardData}
        />
        <SalesIsLive
          salesIsLive={salesIsLiveData}
          salesCardData={salesCardData}
        />
      </div>
      <div className="Desktop-home-page">
        <HeaderDesktop />

        <DesktopNav desktopNavData={desktopNavData} />

        <div className="desktop-main-body">
          <DesktopCarousel desktopCarousel={Desktopcarousel} />
          <BestOfElectronics
            mainCardData={mainCardData}
            productCard={productCard}
          />
          <BeautyAndMore
            mainCardData={mainCardBeautyData}
            productCard={productCardBeauty}
          />
          <SportsEssential
            mainCardData={mainCardSports}
            productCardTwo={productSportsCard}
          />
          <MonsoonEssentials mainCardData={mainCardMonsoon} productCardTwo={productCardMonsoon}/>
        </div>
        <FlipkartFooter />
      </div>
    </>
  )
}

export default HomePage
