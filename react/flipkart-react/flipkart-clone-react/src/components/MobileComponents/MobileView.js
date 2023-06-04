import React from 'react'
import Carousel from './Carousel'
import FashionNav from './FashionNav'
import Header from './Header'
import MobileNav from './MobileNav'
import OfferNav from './OfferNav'

function MobileView() {
  return (
   <>
   <Header />
   <MobileNav />
   <Carousel />
   <FashionNav />
   <OfferNav />
   </>
  )
}

export default MobileView