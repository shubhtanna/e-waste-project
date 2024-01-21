import React from 'react'
import Image from 'next/image'
import SliderImg from '../../public/SLider.jpg'

const Slider = () => {

    
  return (
    <div className='w-11/12 bg-[#EBF8F2] mt-20 mx-auto py-5'>

      <div className=' w-[550px] mx-auto pt-12'>
            <p className='text-[#004225] text-3xl font-semibold'>
              Eco-friendly packaging <span className='bg-[#b6f1db] rounded-xl p-1'>solutions</span> are
            </p>

            <p className='text-[#004225] text-3xl font-semibold'>
              <span className='text-[#399171]'>designed</span> to reduce Electronic waste
            </p>
      </div>


      <div className='ml-24 mt-14 p-14 border-solid overflow-y-auto overscroll-x-contain no-scrollbar '>
      <div className=' grid grid-flow-col scroll-auto snap-x gap-10 animate-[scroll_50s_linear_infinite] hover:pause'>

      <div className='mx-5 snap-start transition-transform hover:scale-125'>
        <Image src={SliderImg} className='min-h-[400px] min-w-[300px] rounded-xl border-solid border-2 border-blue-600'/>
      </div>

      <div className='mx-5 snap-start transition-transform hover:scale-125'>
        <Image src={SliderImg} className='min-h-[400px] min-w-[300px] rounded-xl border-solid border-2 border-blue-600'/>
      </div>

      <div className='mx-5 snap-start transition-transform hover:scale-125'>
        <Image src={SliderImg} className='min-h-[400px] min-w-[300px] rounded-xl border-solid border-2 border-blue-600'/>
      </div>

      <div className='mx-5 snap-start transition-transform hover:scale-125'>
        <Image src={SliderImg} className='min-h-[400px] min-w-[300px] rounded-xl border-solid border-2 border-blue-600'/>
      </div>

      <div className='mx-5 snap-start transition-transform hover:scale-125'>
        <Image src={SliderImg} className='min-h-[400px] min-w-[300px] rounded-xl border-solid border-2 border-blue-600'/>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Slider
