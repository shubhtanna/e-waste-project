import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import  gifimg  from '../../public/gif-text.png'
import Image from 'next/image'

const Gif = () => {
  return (
    <div className=' mt-[6rem]'>
    <div className='gif-text bg-[#E7F2EE] h-[500px] w-11/12 m-auto flex justify-center items-center'>
    <div className=' max-w-[50%]'>
      <p className='gif-text-main-heading font-normal text-[40px]/[59px] text-[#004225] text-center'>
      "Turning the Tide on E-Waste: A Sustainable Solution for a Digital World"
      </p>
      <p className='gif-text-slogen text-center text-2xl/[29px] font-normal'>Turn Your Old Gadgets into Green Rewards!</p>
      <button className='explore-btn w-[195px] h-[54px] bg-[#004225] text-white rounded-md ml-[14rem] mt-[2rem]'>
        <p>Explore more</p>
        <BiRightArrowAlt className='m-auto'/>
      </button>
    </div>
    <div className='w-[500px] h-[357px]'>
      <Image src={ gifimg } alt='gif-image'/>
    </div>
  </div>
  </div>
  )
}

export default Gif
