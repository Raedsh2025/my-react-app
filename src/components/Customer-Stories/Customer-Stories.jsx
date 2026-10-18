import React from 'react'
import   img from '../../assets/Image.svg'
import {stats} from './Customer-data'
export default function CustomerStories() {
  return (
    <section className=" bg-white mx-auto px-12 py-13 flex flex-raw gap-20 justify-between items-center my-20">
        <div>
      <img src={img}/>
      </div>
      <div id='content' className=''>
        <div id="section-title">
            <div id='subtitle' className="font-['Roboto'] font-normal text-[16px] leading-none tracking-[0%] ">
                <p>Customer Stories</p> 

            </div>
            <div id='content-text' className='text-base font-["Inter"] font-normal leading-[140%] tracking-normal capitalize'>
              <h1 className="text-[#C900C1] font-['Sansation'] font-bold text-[56px] leading-none tracking-[0%]">Success History of Our Customer </h1>
              <p className='text-[#C900C1]'>Emphasise time-saving and use numbers to maximise credibility.</p>
            </div>
        </div>
        <div id='list'className='flex flex-wrap gap-8' >
            {stats.map(([value, label]) => (
  <div key={value} className="flex flex-col gap-6 pt-2 pb-2">
    <h3 className=" font-['Roboto'] font-bold text-[48px] text-[Gray] leading-[120%] tracking-[0%]">{value}</h3>
    <p className="text-[Gray]">{label}</p>
  </div>
))}
            
        </div>
      </div>
    </section>
  )
}
