import React from 'react'
import MainFrame from './component/MainFrame'
import OurSolutions from './component/OurSolutions'
import Whoweserve from './component/Whoweserve'
import Ourcustomervoice from './component/Ourcustomervoice'
import WhyPartners from './component/WhyPartners'
import OurSuccessStory from './component/OurSuccessStory'
import OurServices from './component/OurServices'
import OurLeadership from './component/OurLeadership'

import DummyLast from './component/DumyLast'

const page = () => {
  return (
    <div className='bg-[#E8F6FC]'>
      <MainFrame/>
      <OurSuccessStory/>
      <OurSolutions/>
      <OurServices/>
      {/* <AnimatedMenu/> */}
      <DummyLast/>
      <Whoweserve/>
      <Ourcustomervoice/>
      <WhyPartners/>
      <OurLeadership/>

       
    </div>
  )
}

export default page