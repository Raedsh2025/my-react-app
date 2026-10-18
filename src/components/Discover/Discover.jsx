import React from 'react'
import { CarouselSpacing } from '@/components/CarouselSpacing/CarouselSpacing'
import { Button } from '../ui/button'
import arrow from "../../assets/arrow-forward-outline.svg"
function Discover() {
  return (
    <div className='relative container h-210 gap-20 -top-0.5 left-30 '>
     <div className='flex  justify-between items-end gap-5 mb-10'>
      <div className='flex flex-col gap-6 mb-10'>

      <h4 className="font-['Roboto'] text-base font-normal leading-none tracking-normal">Furniture</h4>
        <div className='flex flex-col gap-4'>
        <h1 className="font-['Sansation'] text-[32px] font-bold leading-none tracking-normal">Discover the Latest Trends</h1>
        <p className="w-full max-w-120 font-['Inter'] text-[18px] font-normal leading-[140%] tracking-normal capitalize">Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
      </div>
      </div>
      <div className=' '>
      <Button variant="exploer" className='rounded-0! shadow-none!  '>
          Explore 
          <span>
                      <img src={arrow} alt="Arrow" />
                    </span>
        </Button>
        </div>
    

      </div>
      <CarouselSpacing /> 
      
    </div>
  )
}

export default Discover
