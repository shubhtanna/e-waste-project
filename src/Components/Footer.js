import React from 'react'
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='bg-[#00422517] mt-10 flex flex-col justify-center items-center gap-10 py-10'>
        <div>
            <h1 className='text-4xl text-[#004225]'>E-Waste</h1>
        </div>

        <div className=' max-w-[800px] text-center text-base text-[#004225] font-medium'>
            <p>
            Lorem ipsum dolor sit amet consectetur. Sed mattis vulputate fames auctor facilisi risus ante. Scelerisque sit justo tempor viverra amet. Mauris porta non auctor ullamcorper. Ut nullam cras vulputate purus. Et turpis rhoncus blandit in convallis tincidunt. Viverra ullamcorper nulla pulvinar amet. Pharetra lectus molestie vulputate eu non. Aliquet vestibulum venenatis lectus non tellus facilisis. Eget vel malesuada rhoncus fames.
            </p>
        </div>

        <div className='font-medium text-[#004225] text-2xl'>
            <h2>CONTACT US</h2>
        </div>

        <div className='flex justify-center text-[#004225] gap-20 text-3xl'>
            <IoMdMail/>
            <RiInstagramFill/>
            <FaLocationDot/>
            <FaPhone/>
        </div>

        <div className=' text-base text-[#004225] font-normal'>
            <p>@Copyright 2023, All right are reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
