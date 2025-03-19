import React from 'react'

const Heading = ({ title }) => {
  const capitalizeTitle = (str) => {
    return str
      .split(' ')
      .map(word => word.toUpperCase())
      .join(' ');
  };

  return (
    <div className='font-lato'>
      <div className="flex items-center justify-center w-full mt-8 sm:mt-12">
        <div
          className="flex items-center capitalize bg-[#ffffff] justify-center gap-3 px-8 py-1 text-center border-[1px] rounded-full text-[#0C455E] border-[#1DA4DF]"
          style={{
            fontFamily: "Lato",
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
          }}
        >
         <span className='text-md'> {capitalizeTitle(title)}</span>
        </div>  
      </div>
    </div>
  );
};

export default Heading;