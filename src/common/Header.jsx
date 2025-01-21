import React from 'react'
import PageLogo from '../assets/images/page-logo.webp'
import CustomButton from './CustomButton'
import { SearchIcon } from '../utils/icons'

const Header = () => {
  return (
    <div className='max-w-[1160px] px-4 mx-auto'>
      <div className='w-full flex items-center justify-between rounded-[20px] pl-[38px] pr-3 py-[10px] gap-4 max-md:px-3 shadow-[0px_10px_10px_0px] shadow-light-gray'>
        <a href='#logo'>
          <img
            src={PageLogo}
            alt='logo'
            className='h-[26.42px] max-sm:h-[22px] pointer-events-none'
          />
        </a>
        <form className='max-w-[650px] rounded-full flex items-center max-md:hidden max-xl:!max-w-[580px] max-lg:!max-w-[400px] border border-gray w-full pr-[7px] overflow-hidden'>
          <input
            type='text'
            placeholder='What do you feel like listening to right now ?'
            className='w-[95%] px-[30px] pt-[13px] pb-[14px] outline-none placeholder-dark-gray'
          />
          <CustomButton
            icon={
              <SearchIcon myClass='transition-all duration-300 group-hover:fill-black' />
            }
            myClass='py-[10.34px] px-[10.34px] group flex items-center justify-center hover:!bg-white !rounded-full !bg-custom-black'
          />
        </form>
        <CustomButton
          icon={
            <SearchIcon myClass='transition-all duration-300 group-hover:fill-black' />
          }
          myClass='!py-[10.34px] !px-[10.34px] flex group hover:!bg-white items-center md:hidden justify-center !rounded-full !bg-custom-black'
        />
        <div className='flex items-center gap-5 max-sm:gap-2'>
          <CustomButton
            buttonText='Login'
            myClass='!border-none text-custom-black hover:text-red-500'
          />
          <CustomButton
            buttonText='Sign Up'
            myClass='!bg-custom-black px-[25px] py-[9px] text-white hover:!bg-transparent hover:text-black'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
