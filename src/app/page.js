import React from 'react'
import MainFrame from './component/MainFrame'
import OurSolutions from './component/OurSolutions'
import Whoweserve from './component/Whoweserve'
import Ourcustomervoice from './component/Ourcustomervoice'
import WhyPartners from './component/WhyPartners'
import OurSuccessStory from './component/OurSuccessStory'
import OurServices2 from './component/OurServices2'
import OurLeadership from './component/OurLeadership'

const page = () => {
  return (
    <div className='bg-[#E8F6FC]'>
      <MainFrame/>
      <OurSuccessStory/>
      <OurSolutions/>
      <OurServices2/>
      <Whoweserve/>
      <Ourcustomervoice/>
      <WhyPartners/>
      <OurLeadership/>

       
    </div>
  )
}

export default page