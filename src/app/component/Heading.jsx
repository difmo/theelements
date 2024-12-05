import React from 'react'

const Heading = ({title}) => {
  return (
  <div className="flex items-center justify-center w-full mt-8 sm:mt-12">
    <div
      className="flex items-center capitalize bg-[#F3F4F6] justify-center gap-3 px-4  text-center border-[1px] rounded-full text-[#0C455E] border-[#1DA4DF]"
      style={{
        fontFamily: "Lato",
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: "1.5rem",
      }}
    >
      {title}
    </div>
  </div>
  )
}

export default Heading