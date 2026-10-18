import React from "react";
import { Button } from "../ui/button";
import ellipse from "../../assets/Ellipse 10.svg";
import Layer1 from "../../assets/Layer_4.svg";
import ellipse3 from "../../assets/Ellipse 9.svg";
import ellipse8 from "../../assets/Ellipse 8.svg";
import Rectangle13 from "../../assets/Rectangle 13.svg";
import arrow from "../../assets/arrow-forward-outline.svg";
import Rectangle12 from "../../assets/Rectangle 12.svg";
function Enjoy() {
  return (
    <section id="fraem69" className="container relative mx-auto flex gap-20 justify-between items-center my-20">
   
      <div id="fram68" className="w-1/2 h-auto flex flex-col opacity-100 relative gap-32">
         <div id="fraem67">
            <h3 className="font-['Sansation'] font-bold text-[32px] leading-none tracking-[0%]">Enjoy Our Latest Fashion Trends and Style</h3>
            <p className="font-['Inter'] font-normal text-[24px] leading-[152%] tracking-[0%]">
              Ship our curated collection of fashion items and stay ahead of the
              fashion game
            </p>
          </div>
        <div id="group21" className="">
          <img id="ellipse" src={ellipse} alt="Ellipse" className="absolute -top-10 left-0  opacity-100"/>
          <div id="group20" className=" flex ">
            <div id="group19"  className="relative">
              <img src={ellipse8} alt="Ellipse 8" className="absolute -top-5 left-5" />
              <div id="fraem66" className="flex flex-col ">
                <h5 className="font-['Inter'] font-bold text-[24px] leading-[152%] tracking-[0%]">Quality</h5>
                <p className="font-['Roboto'] font-normal text-[16px] leading-[130%] tracking-[0%]">
                  Our fashion items are crafted with the highest materials and
                  attention to details
                </p>
              </div>
            </div>
            <div id="group18" className="relative">
              <img src={ellipse3} alt="Ellipse 3" className="absolute top-0 left-15"/>
              <div id="fraem65">
                <h5 className="font-['Inter'] font-bold text-[24px] leading-[152%] tracking-[0%]">Style</h5>
                <p className="font-['Roboto'] font-normal text-[16px] leading-[130%] tracking-[0%]">
                  Express you unique style with our wide range of trendy items.
                </p>
              </div>
            </div>
            
          </div>
          <div id="group17">
            <img src={Layer1} alt="Layer 1" className="absolute -top-1 -right-10 " />
          </div>
         
        </div>
        <Button variant="exploer" className="rounded-0! shadow-none!  self-end   ">
          Explore
          <span>
            <img src={arrow} alt="Arrow" />
          </span>
        </Button>
      </div>
      <img
        src={Rectangle13}
        alt="Rectangle13"
        className="w-auto h-full opacity-100 rounded-[48px] relative z-10"
      />
           
    <img src={Rectangle12} alt="Rectangle 12" className="absolute -top-70 -right-100  opacity-100  z-0
    pointer-events-none " />

    </section>
  );
}

export default Enjoy;
