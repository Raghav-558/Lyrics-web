import React, { useState } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { DownArrow } from '../utils/icons'
import { useNavigate } from 'react-router-dom'
import { ITEMS_LIST } from '../utils/helper'
import HeroImage from '../assets/images/hero.webp'
import Profile from '../assets/images/profile-image.webp'

const Hero = () => {
  const [text, setText] = useState('HIT ME HARD AND SOFT')
  const [alphabet, setAlphabet] = useState()
  const navigate = useNavigate()

  const handleDomainChange = newDomain => {
    navigate(`?value=${newDomain}`)
    setText(`HIT ME HARD AND ${newDomain.toUpperCase()}`)
  }

  const handleChange = newText => setAlphabet(`${newText}`)
  return (
    <div className='pt-[10px] pb-10'>
      <Header />
      <div className='max-w-[1160px] mx-auto px-4'>
        <div className='flex items-center gap-[15px] py-2 pt-[17px] max-xl:overflow-x-auto '>
          <div className='flex items-center gap-[5px]'>
            <CustomButton
              customOnClick={() => handleDomainChange('all')}
              myClass='!text-xs px-[13.48px] py-[5.84px] text-custom-black hover:!bg-custom-black hover:text-white'
              buttonText='All'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('pop')}
              myClass='!text-xs text-custom-black py-[5.84px] px-[11.37px] hover:!bg-custom-black hover:text-white'
              buttonText='Pop'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('rock')}
              myClass='!text-xs text-custom-black py-[5.84px] px-[11.8px] hover:!bg-custom-black hover:text-white'
              buttonText='Rock'
            />
            <CustomButton
              customOnClick={() => handleDomainChange('music')}
              myClass='!text-xs text-custom-black py-[5.84px] px-[9.2px] hover:!bg-custom-black hover:text-white group flex items-center gap-[5px]'
              buttonText='More'
              icon={
                <DownArrow myClass='group-hover:stroke-white transition-all duration-300' />
              }
            />
          </div>
          <div className='flex items-center gap-[2px]'>
            {ITEMS_LIST.map(function (item, index) {
              return (
                <a
                  onClick={() => handleChange(item)}
                  key={index}
                  href='#link'
                  className='flex items-center hover:!bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]'
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
        <div className='flex justify-between relative pl-12 pr-[43px] pt-[38px] pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20 rounded-[22px] bg-custom-black mt-[35px] max-sm:mt-5'>
          <h1 className='font-montserrat font-bold text-5xl leading-[58.51px] text-white max-lg:text-4xl max-sm:text-center max-sm:text-3xl'>
            {text}
          </h1>
          <img
            src={HeroImage}
            alt='hero'
            className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 !rounded-[10px] pointer-events-none'
          />
          <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-7'>
            <img
              src={Profile}
              alt='profile'
              className='size-[206px] max-lg:size-32 max-sm:size-24 pointer-events-none'
            />
            <div>
              <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-xl'>
                Billie Eilish {alphabet}
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
