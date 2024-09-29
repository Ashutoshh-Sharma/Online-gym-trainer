import React from 'react'
import banner from '../../assets/images/banner.png'

function HeroBanner() {
    return (
        <div>
            <div className='w-full py-20 px-6 leading-loose sm:px-14 lg:mt-28 lg:px-20 '>
                <h3 className='text-red-500 font-semibold text-2xl sm:text-3xl xl:text-4xl'>Fitness Club</h3>
                <h1 className='text-4xl leading-relaxed font-semibold mt-8 sm:text-4xl sm:leading-relaxed xl:text-6xl xl:leading-relaxed'>Sweat, Smile <br /> and Repeat</h1>
                <h5 className='font-[Alegreya] italic text-2xl mt-6 sm:text-3xl lg:text-2xl xl:text-3xl'>Check out the most effective exercises</h5>
                <a href="#exercises"><button className='uppercase cursor-pointer hover:bg-red-700 hover:scale-95 px-4 py-2 bg-red-500 text-white rounded shadow-black shadow-sm mt-8 text-xl sm:mt-12 xl:px-6 xl:py-4 xl:text-2xl'>explore exercises</button></a>
                <h1 className='hidden lg:block text-[200px] text-red-500 opacity-20 mt-0 font-semibold tracking-wide '>Exercise</h1>
                <img className='hidden  lg:block absolute top-0 right-0  h-[900px] w-[610px] xl:h-[1000px] xl:w-[750px]' src={banner} alt="" />
            </div>
        </div>
    )
}

export default HeroBanner
