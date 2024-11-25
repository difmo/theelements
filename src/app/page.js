import React from 'react'
import MainFrame from './component/MainFrame'
import StyledFrame from './component/SliderFrame'
import OurSolutions from './component/OurSolutions'
import OurServices from './component/OurServices'
import Whoweserve from './component/Whoweserve'
import Ourcustomervoice from './component/Ourcustomervoice'
import WhyPartners from './component/WhyPartners'
import Footer from './component/Footer'
import OurSuccessStory from './component/OurSuccessStory'
import OurServices2 from './component/OurServices2'
import OurLeadership from './component/OurLeadership'

const page = () => {
  return (
    <div className='bg-[#E8F6FC]'>
      <MainFrame/>
      {/* <StyledFrame/> */}
      <OurSuccessStory/>
      <OurSolutions/>
      <OurServices2/>
      <Whoweserve/>
      <Ourcustomervoice/>
      <WhyPartners/>
      <OurLeadership/>
      {/* <Footer/> */}

       
    </div>
  )
}

export default page