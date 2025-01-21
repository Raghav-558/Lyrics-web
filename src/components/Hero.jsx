import React, { useState } from 'react'
import Header from '../common/Header'
import { DownArrow } from '../utils/icons'
import { useSearchParams } from 'react-router-dom'
import { ITEMS_LIST } from '../utils/helper'
import HeroImage from '../assets/images/hero.webp'
import Profile from '../assets/images/profile-image.webp'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  const [activeParams, setActiveParams] = useSearchParams('value')
  const [text, setText] = useState('')

  const handleChange = item => {
    setText(item)
  }
  const handleDomainChange = value => {
    setActiveParams({ value })
  }

  return (
    <div className='pt-[10px] pb-[60px]'>
      <Header />
      <div className='max-w-[1160px] mx-auto px-4'>
        <div className='flex items-center gap-[15px] py-2 pt-[17px] max-xl:overflow-x-auto '>
          <div className='flex items-center gap-[5px]'>
            <CustomButton
              customOnClick={() => handleDomainChange('soft')}
              myClass={`${
                activeParams.get('value') === 'soft'
                  ? 'bg-black text-white'
                  : ''
              } !text-xs px-[13.48px] py-[5.84px]`}
              buttonText='All'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('pop')}
              myClass={`${
                activeParams.get('value') === 'pop' ? 'bg-black text-white' : ''
              } !text-xs text-customBlack py-[5.84px] px-[11.37px]`}
              buttonText='Pop'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('rock')}
              myClass={`${
                activeParams.get('value') === 'rock'
                  ? 'bg-black text-white'
                  : ''
              } !text-xs text-customBlack py-[5.84px] px-[11.8px]`}
              buttonText='Rock'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('music')}
              myClass={`${
                activeParams.get('value') === 'music'
                  ? 'bg-custom-black text-white'
                  : ''
              } !text-xs text-custom-black py-[5.84px] px-[9.2px] flex items-center gap-[5px]`}
              buttonText='More'
              icon={
                <DownArrow
                  myClass={`${
                    activeParams.get('value') === 'music' ? 'stroke-white' : ''
                  } group-hover:stroke-white transition-all duration-300`}
                />
              }
            />
          </div>
          <div className='flex items-center gap-[2px]'>
            {ITEMS_LIST.map(function (item, i) {
              return (
                <a
                  key={i}
                  href='#link'
                  onClick={() => handleChange(item)}
                  className='flex items-center hover:!bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]'
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
        <div className='flex justify-between relative pl-12 pr-[43px] pt-[38px] pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20 rounded-[22px] bg-custom-black mt-[35px] max-sm:mt-5'>
          <h1 className='font-montserrat text-5xl leading-[58.51px] uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl'>
            hit me hard and{' '}
            {activeParams.get('value') === 'music'
              ? 'music'
              : activeParams.get('value') === 'pop'
              ? 'pop'
              : activeParams.get('value') === 'rock'
              ? 'rock'
              : 'soft'}
          </h1>
          <img
            src={HeroImage}
            alt='hero'
            className='size-[261px] pointer-events-none  max-lg:size-48 max-sm:mx-auto max-sm:mt-4 !rounded-[10px]'
          />
          <div className='absolute flex items-center gap-[26px] max-sm:gap-5 -bottom-16 max-lg:-bottom-10 max-sm:-bottom-7 max-sm:left-[40px]'>
            <img
              src={Profile}
              alt='profile'
              className='size-[206px] pointer-events-none max-lg:size-32 max-sm:size-24'
            />
            <div>
              <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-xl'>
                Billie Eilish {text}
              </p>
              <p className='font-montserrat font-medium leading-5 pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm font text-custom-gray'>
                Relesed May 17, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
