import React, { useState } from 'react'
import { ITEMS_LIST } from '../utils/helper'
import { useSearchParams } from 'react-router-dom'

const AlphaTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selected, setSelected] = useState(ITEMS_LIST[0])

  const handleChange = item => {
    setSearchParams({ value: item.toLowerCase() })
    setSelected(item)
  }

  return (
    <div className='pb-[37px] pt-[42px] max-md:py-5 border-t border-t-gray border-b border-b-gray'>
      <div className='max-w-[853px] px-4 mx-auto'>
        <div className='flex items-center gap-[2px] lg:justify-center xl:justify-start max-lg:overflow-x-auto whitespace-nowrap w-full'>
          {ITEMS_LIST.map((item, i) => (
            <p
              key={i}
              onClick={() => handleChange(item)}
              className={`flex items-center text-custom-black text-xs leading-[18px] cursor-pointer flex-shrink-0 hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium ${
                selected === item ? 'bg-custom-black text-white' : ''
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlphaTable
