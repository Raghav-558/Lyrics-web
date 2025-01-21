import React from 'react'

const CustomButton = ({ myClass, customOnClick, buttonText, icon }) => {
  return (
    <button
      onClick={customOnClick}
      className={`${myClass} border border-black text-nowrap font-medium text-sm max-sm:text-xs leading-6 max-sm:px-3 max-sm:py-2  rounded-[9px] transition-all duration-300`}
    >
      {buttonText}
      {icon}
    </button>
  )
}

export default CustomButton
