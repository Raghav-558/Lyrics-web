import React, { useState } from 'react'
import { SONGS_LIST, TABLE_HEADING_LIST } from '../utils/helper'
import { CrossIcon } from '../utils/icons'

const SongsList = () => {
  const [showImage, setShowImage] = useState(false)
  const [uploads, setUploads] = useState(null)

  const handleChange = (e) => {
    const imgUpload = URL.createObjectURL(e.target.files[0])
    setUploads(imgUpload)
    setShowImage(true)
  }

  const handleRemoveImage = () => {
    setUploads(null)
    setShowImage(false)
  }

  return (
    <div className='pt-10 max-sm:pt-0 pb-[45px]'>
      <div className='max-w-[1160px] px-4 mx-auto'>
        <h2 className='text-5xl font-semibold leading-[58px] tracking-[1.22px] max-lg:text-4xl max-sm:text-3xl lg:mb-[29px] max-md:text-center max-lg:pb-4'>
          Songs
        </h2>
        <div className='flex items-center justify-center gap-[52px] max-md:gap-6 max-sm:gap-2 max-lg:flex-wrap'>
          <table className='w-full !max-md:overflow-x-auto !whitespace-nowrap'>
            <thead>
              <tr>
                {TABLE_HEADING_LIST.map((item, i) => (
                  <th
                    key={i}
                    className={`${
                      i === 3 ? 'text-right' : 'text-left'
                    } text-sm max-sm:text-xs leading-6 font-semibold pb-[33px] max-sm:pb-6`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SONGS_LIST.map((item, i) => (
                <tr key={i}>
                  <td className='text-sm max-sm:text-xs leading-6 text-very-light-gray pb-11 max-sm:pb-6 max-lg:pr-1'>
                    0{i + 1}
                  </td>
                  <td className='font-semibold text-sm max-sm:text-xs leading-6 pb-11 lg:w-7/12 max-lg:w-5/12 max-sm:pb-6'>
                    {item.song}
                  </td>
                  <td className='text-xs max-sm:text-[10px] text-very-light-gray leading-6 pb-11 max-sm:pb-6'>
                    {item.date}
                  </td>
                  <td className='text-xs max-sm:text-[10px] text-very-light-gray leading-6 text-right pb-11 max-sm:pb-6'>
                    {item.times}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <div className='relative flex items-center justify-center text-center w-[300px] h-[600px] bg-custom-blue rounded-[20px] max-lg:w-[500px] max-lg:h-[400px] max-md:!w-[300px]'>
              <input
                type='file'
                id='my-image'
                hidden
                onChange={handleChange}
                multiple
              />
              <label
                htmlFor='my-image'
                className={`cursor-pointer text-white text-sm leading-6 ${
                  showImage ? 'hidden' : 'block'
                }`}
              >
                Add Place
              </label>
              <img
                className={`w-[300px] h-[600px] object-cover rounded-[20px] max-lg:w-[500px] max-lg:h-[400px] max-md:!w-[300px] ${
                  showImage ? 'block' : 'hidden'
                }`}
                src={uploads}
                alt='Upload-image'
              />
              <div
                className='absolute top-5 right-5 flex flex-col gap-2 cursor-pointer'
                onClick={handleRemoveImage}
              >
                <span className={`${showImage ? 'block' : 'hidden'}`}>
                  <CrossIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongsList
