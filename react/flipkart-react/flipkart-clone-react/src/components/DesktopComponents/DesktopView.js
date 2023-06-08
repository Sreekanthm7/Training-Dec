import React from 'react'
import DesktopNav from './Nav/DesktopNav'
import HeaderDesktop from './Header/HeaderDesktop'
import DesktopMainBody from './MainBody/DesktopMainBody'

function DesktopView() {
  return (
    <>
        <HeaderDesktop />
        <DesktopNav />
        <DesktopMainBody />
    </>
  )
}

export default DesktopView