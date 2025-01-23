import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../common/Header'
import HeroImage from '../assets/images/hero.webp'
import ProfileImage from '../assets/images/profile-image.webp'
import CustomButton from '../common/CustomButton'
import { ITEMS_LIST } from '../utils/helper'
import { DownArrow } from '../utils/icons'

const Hero = () => {
  const [selectId, setSelectId] = useState()
  const navigate = useNavigate()
  const { id = 'all' } = useParams()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleChange = id => {
    setSelectId(id)
    navigate(`/${id}`)
  }

  useEffect(() => {
    setSelectId(id)
  }, [id])

  const handleSelectChange = event => {
    const selectedValue = event.target.value
    handleChange(selectedValue)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const [activeParams, setActiveParams] = useSearchParams()
  const value = activeParams.get('value')?.toUpperCase() || 'ALL'

  useEffect(() => {
    setActiveParams({ value: value.toLowerCase() })
  }, [value, setActiveParams])

  const handleDomainChange = value => {
    setActiveParams({ value: value.toLowerCase() })
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
  }, [dropdownRef])

  return (
    <div className='pt-[11px] mb-[60px]'>
      <Header />
      <div className='max-w-[1160px] px-4 mx-auto'>
        <div className='flex items-center gap-[15px] pt-[17px] pb-2 max-xl:flex-col'>
          <div className='flex items-center gap-[5px]'>
            <CustomButton
              customOnClick={() => handleChange('all')}
              myClass={`${
                selectId === 'all' ? '!bg-custom-black text-white' : ''
              } !text-xs px-[13.48px] py-[5.84px] hover:!bg-custom-black hover:text-white`}
              buttonText='All'
            />
            <CustomButton
              customOnClick={() => handleChange('pop')}
              myClass={`${
                selectId === 'pop' ? '!bg-custom-black text-white' : ''
              } !text-xs text-custom-black py-[5.84px] px-[11.37px] hover:!bg-custom-black hover:text-white`}
              buttonText='Pop'
            />
            <CustomButton
              customOnClick={() => handleChange('rock')}
              myClass={`${
                selectId === 'rock' ? '!bg-custom-black text-white' : ''
              } !text-xs text-custom-black py-[5.84px] px-[11.37px] hover:!bg-custom-black hover:text-white`}
              buttonText='Rock'
            />
            <div className='relative' ref={dropdownRef}>
              <CustomButton
                customOnClick={toggleDropdown}
                myClass={`${
                  id === 'music' ? 'bg-custom-black text-white' : ''
                } !text-xs !text-custom-black !py-[5.84px] !px-[9.2px] hover:!bg-custom-black hover:!text-white !group flex items-center gap-[5px]`}
                buttonText='More'
                icon={
                  <DownArrow
                    className={`${
                      id === 'music' ? 'stroke-white' : ''
                    } group-hover:stroke-white transition-all duration-300`}
                  />
                }
              />
              {isDropdownOpen && (
                <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10'>
                  <button
                    onClick={() => handleChange('all')}
                    className='py-1 px-2 hover:bg-custom-black hover:text-white text-custom-black w-full rounded-md'
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleChange('pop')}
                    className='py-1 px-2 hover:bg-custom-black hover:text-white text-custom-black w-full rounded-md'
                  >
                    pop
                  </button>
                  <button
                    onClick={() => handleChange('rock')}
                    className='py-1 px-2 hover:bg-custom-black hover:text-white text-custom-black w-full rounded-md'
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
                onClick={() => handleDomainChange(item)}
                key={index}
                className={`${
                  activeParams.get('value') === item.toLowerCase()
                    ? 'bg-custom-black text-white'
                    : ''
                } flex items-center text-custom-black cursor-pointer hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-xs leading-[18px]`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className='relative flex justify-between pt-[38px] pl-12 pr-[43px] max-sm:mt-6 mt-[35px] pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20 bg-custom-black rounded-[22px]'>
          <h1 className='font-Montserrat leading-[58px] text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto'>
            HIT ME HARD AND{' '}
            {selectId === 'pop'
              ? 'POP'
              : selectId === 'rock'
              ? 'ROCK'
              : selectId === 'All'
              ? 'ALL'
              : 'All'}
          </h1>
          <img
            src={HeroImage}
            alt='hero'
            className='size-[261px] rounded-[10px] pointer-events-none max-lg:size-48 max-sm:mx-auto max-sm:mt-4'
          />
          <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-7'>
            <img
              src={ProfileImage}
              alt='profile-image'
              className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none'
            />
            <div>
              <p className='font-semibold leading-[42px] text-[32px] max-lg:text-2xl text-white max-sm:text-lg'>
                Billie Eilish <span className='uppercase'>{value}</span>
              </p>
              <p className='font-Montserrat text-custom-gray font-medium leading-[19px] pt-[5px] max-lg:pt-0 max-sm:pb-8 pb-[21px] max-sm:text-sm'>
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
