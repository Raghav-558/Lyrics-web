import React from 'react'
import { FOOTER_LIST, SOCIAL_LINKS } from '../utils/helper'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='pt-[91px] max-md:pt-[60px]'>
      <div className='max-w-[1160px] px-4 mx-auto'>
        <div className='flex max-lg:flex-wrap justify-between pb-[89px] max-lg:pb-10 max-sm:pb-5 max-lg:gap-[60px] max-md:gap-[30px]'>
          {FOOTER_LIST.map((obj, i) => (
            <div key={i} className='flex flex-col justify-cente'>
              <h3 className='text-sm font-semibold leading-6 text-custom-black pb-[37px] max-lg:pb-6 max-sm:pb-4'>
                {obj.title}
              </h3>
              <ul className='list-none'>
                {obj.links.map((link, i) => (
                  <li
                    key={i}
                    className='text-sm font-normal leading-6 lg:pb-[22px] pb-4 max-sm:pb-3 text-custom-black hover:text-red-500 transition-all duration-300'
                  >
                    <a href='/'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='lg:-mt-6'>
            <h3 className='text-sm text-custom-black font-semibold leading-6 pb-[26px] max-sm:pb-4'>
              Follow us
            </h3>
            {SOCIAL_LINKS.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target='_blank'
                className='bg-white max-w-[312px] w-full py-3 group transition-all duration-500 ease-in-out pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'
              >
                <p className='text-sm text-custom-black font-semibold leading-6 '>
                  {item.site}
                </p>
                <img
                  className='size-[31px] group-hover:scale-125 transition-all duration-300 ease-in-out'
                  src={item.social}
                  alt="social-logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='border-t border-t-gray pt-[31px] pb-[30px] max-lg:py-7 max-md:py-5 max-sm:py-4'>
        <div className='flex items-center justify-between max-w-[1160px] px-4 mx-auto max-sm:flex-col'>
          <p className='text-sm leading-6 text-custom-black max-sm:text-center max-sm:text-xs'>
            All rights reserved to Global Media Holdings Ltd. {currentYear}
          </p>
          <div className='flex items-center gap-[41px] max-sm:pt-2 max-sm:gap-5'>
            <a
              href='/'
              className='text-sm leading-6 text-custom-black max-sm:text-xs'
            >
              Privacy Policy
            </a>
            <a
              href='/'
              className='text-sm leading-6 text-custom-black max-sm:text-xs'
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
