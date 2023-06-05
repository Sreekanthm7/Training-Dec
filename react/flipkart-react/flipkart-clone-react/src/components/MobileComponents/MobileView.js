import React from 'react'
import Carousel from './Carousel'
import FashionNav from './FashionNav'
import Header from './Header'
import MobileNav from './MobileNav'
import OfferNav from './OfferNav'
import PopularPicks from './PopularPicks'
import SeasonSaleEnd from './SeasonSaleEnd'

function MobileView() {
  return (
   <>
   <Header />
   <MobileNav />
   <Carousel />
   <FashionNav />
   <OfferNav />
   <PopularPicks />
   <SeasonSaleEnd />
   </>
  )
}

export default MobileView