import React from 'react'
import MainFrame from './component/MainFrame'
import OurSolutions from './component/OurSolutions'
import Whoweserve from './component/Whoweserve'
import Ourcustomervoice from './component/Ourcustomervoice'
import WhyPartners from './component/WhyPartners'
import OurSuccessStory from './component/OurSuccessStory'
import OurServices from './component/OurServices'
import OurLeadership from './component/OurLeadership'

// efosijdfkla
const page = () => {
  return (
    <div className='bg-[#E8F6FC] font-lato'>
      <div className=""> 

      <MainFrame  className="font-lato"/>
      <OurSuccessStory  className="font-lato"/>
      <OurSolutions  className="font-lato"/>
      <OurServices  className="font-lato"/>
      <Whoweserve  className="font-lato"/>
      <Ourcustomervoice  className="font-lato"/>
      <WhyPartners  className="font-lato"/>
      <OurLeadership  className="font-lato"/>
      </div>

       
    </div>
  )
}

export default page