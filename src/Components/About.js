import React from 'react'

const About = () => {
  return (
    <div className='about-container flex flex-col justify-center items-center mt-20'>
    <div className='about-heading'>
        <h1 className='text-3xl font-bold'>Welcome to GoGreen</h1>
        <div className='about-heading-1 text-center text-sm'>
        <span>Lorem ipsum dolor sit.</span>
        </div>
        
    </div>

        <div className='about-content-main text-center mt-5 leading-snug text-xl'>
        
        <div className='about-content-main-1'>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis assumenda, nostrum est labore voluptatem enim!</span>
        </div>
            <div className='about-content-main-2'>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro odit.</span>
            </div>
            
            <div className='about-content-main-3'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
            
        
        </div>
        
    </div>
  )
}

export default About
