import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../common/Header'
import HeroImage from '../assets/images/hero.webp'
import ProfileImage from '../assets/images/profile-image.webp'
import CustomButton from '../common/CustomButton'
import { ITEMS_LIST } from '../utils/helper'
import { DownArrow } from '../utils/icons'

const Hero = () => {
  const navigate = useNavigate()
  const { id = 'all' } = useParams()
  const [, setActive] = useState(id)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleTextChange = id => {
    navigate(`/${id}`)
    setActive(id)
    setIsDropdownOpen(false)
  }

  const [, setText] = useState()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.get('value')?.toUpperCase()
  const handleChange = (value, item) => {
    setSearchParams({ value: value.toLowerCase() })
    setText(`${item}`)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='pt-[11px] pb-[60px]'>
      <Header />
      <div className='max-w-[1160px] px-4 mx-auto'>
        <div className='flex items-center gap-[15px] pt-[17px] pb-2 max-xl:flex-col'>
          <div className='flex items-center gap-[5px]'>
            <CustomButton
              customOnClick={() => handleTextChange('all')}
              myClass={`${
                id === 'all' ? '!bg-custom-black !text-white' : ''
              } !text-xs !text-custom-black !px-[13.48px] !py-[5.84px] hover:!bg-custom-black hover:!text-white`}
              buttonText='All'
            />
            <CustomButton
              customOnClick={() => handleTextChange('pop')}
              myClass={`${
                id === 'pop' ? 'bg-custom-black !text-white' : ''
              } !text-xs !text-custom-black !py-[5.84px] !px-[11.37px] hover:!bg-custom-black hover:!text-white`}
              buttonText='Pop'
            />
            <CustomButton
              customOnClick={() => handleTextChange('rock')}
              myClass={`${
                id === 'rock' ? 'bg-custom-black !text-white' : ''
              } !text-xs !text-custom-black !py-[5.84px] !px-[11.8px] hover:!bg-custom-black hover:!text-white`}
              buttonText='Rock'
            />
            <div className='relative' ref={dropdownRef}>
              <CustomButton
                customOnClick={toggleDropdown}
                myClass={`${
                  id === 'more' ? 'bg-custom-black !text-white' : ''
                } !text-xs !text-custom-black !py-[5.84px] !px-[9.2px] hover:!bg-custom-black hover:!text-white group flex items-center gap-[5px]`}
                buttonText='More'
                icon={
                  <DownArrow
                    myClass={`${
                      id === 'more' ? 'stroke-white' : ''
                    } group-hover:stroke-white transition-all duration-300`}
                  />
                }
              />
              {isDropdownOpen && (
                <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10'>
                  <button
                    onClick={() => handleTextChange('all')}
                    className='!text-custom-black py-1 px-4 hover:bg-custom-black transition-all duration-300 text-sm hover:!text-white w-full rounded-[4px]'
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleTextChange('pop')}
                    className='!text-custom-black py-1 px-4 hover:bg-custom-black transition-all duration-300 text-sm hover:!text-white w-full rounded-[4px]'
                  >
                    Pop
                  </button>
                  <button
                    onClick={() => handleTextChange('rock')}
                    className='!text-custom-black py-1 px-4 hover:bg-custom-black transition-all duration-300 text-sm hover:!text-white w-full rounded-[4px]'
                  >
                    Rock
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center gap-[2px] lg:justify-center xl:justify-start max-lg:overflow-x-auto whitespace-nowrap w-full'>
            {ITEMS_LIST.map((item, index) => (
              <p
                onClick={() => handleChange(item)}
                key={index}
                className={`flex-shrink-0 flex items-center hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:!text-white hover:font-medium !text-custom-black text-xs leading-[18px] cursor-pointer ${
                  value === item.toUpperCase()
                    ? 'bg-custom-black !text-white'
                    : ''
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className='flex pl-12 pr-[43px] justify-between pt-[38px] max-sm:mt-6 mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20 bg-custom-black rounded-[22px]'>
          <h1 className='font-Montserrat leading-[58px] text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto'>
            hit me hard and{' '}
            {id === 'music'
              ? 'music'
              : id === 'pop'
              ? 'pop'
              : id === 'rock'
              ? 'rock'
              : 'all'}
          </h1>
          <img
            src={HeroImage}
            alt='hero'
            className='size-[261px] rounded-[10px] pointer-events-none max-lg:size-48 max-sm:mx-auto max-sm:mt-4'
          />
          <div className='absolute flex items-center gap-[26px] max-sm:gap-4 -bottom-16 max-lg:-bottom-10 max-sm:-bottom-7 max-sm:left-[40px]'>
            <img
              src={ProfileImage}
              alt='profile'
              className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none'
            />
            <div>
              <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'>
                Billie Eilish <span className='uppercase'>{value}</span>
              </p>
              <p className='font-Montserrat text-custom-gray font-medium leading-5 pt-[5px] max-lg:pt-0 max-sm:pb-8 pb-[21px] max-sm:text-sm'>
                Released May 17, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
