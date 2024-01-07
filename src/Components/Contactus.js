import React from 'react'
import aboutus from '../../public/aboutus.png'
import Image from 'next/image'

const Contactus = () => {
  return (
    <div className='contactus-container flex w-10/12 m-auto'>
      <div className='contactus-img w-[50%] flex flex-wrap'>
        <Image src={aboutus} alt="about us image" />
      </div>

      <div className='form flex flex-col justify-center items-center'>
        <div className='form-heading text-3xl text-[#004225] font-bold text-center'>
          <h1>Request an Inquiry</h1>
        </div>

        <form id="contactUs-form" className='ml-8'>
          <div>
            <input
              className='form-Name text-xl w-[521px] h-[64px] border-2 border-[#85A697] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset] rounded-2xl mt-6
              placeholder:text-[#004225] placeholder:text-sm placeholder:font-normal placeholder:pl-[2rem] placeholder:mt-[1.5rem]'
              type="text"
              name='firstName'
              placeholder='Enter name'
              required
            />
          </div>

          <div>
            <input
              className='form-email text-xl w-[521px] h-[64px] border-2 border-[#85A697] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset] rounded-2xl mt-6
              placeholder:text-[#004225] placeholder:text-sm placeholder:font-normal placeholder:pl-[2rem]'
              type="email"
              name="email"
              placeholder='Enter email id'
              required
            />
          </div>

          <div>
            <textarea
              className='form-text text-xl w-[521px] h-[84px] border-solid border-2 border-[#85A697] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset] rounded-2xl mt-6
               placeholder:text-[#004225] placeholder:text-sm placeholder:font-normal placeholder:pt-[1.7rem] placeholder:pl-[2rem]' 
              name="textArea"
              placeholder='Enter your query' 
              cols="15"
              rows="5"
              required
            ></textarea>
          </div>

          <div className='form-btn-container text-center'>
            <button className='form-btn cursor-pointer rounded-md bg-[#004225] text-white text-md mt-6 p-4 font-normal' type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactus
