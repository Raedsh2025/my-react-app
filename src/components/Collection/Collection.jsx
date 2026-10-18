import React from 'react'
import  Ellipse  from "../../assets/Ellipse 2.svg"
import Layer2 from '../../assets/Layer_2.svg'
import CatalogButtons from '../Button/catalog-buttons'
import { CardImage } from '../CardImage/CardImage'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"




function Collection() {
  return (
   <section className="  relative mx-auto my-20 min-h-screen overflow-visible px-4 ">
   
     <div
    className="
      pointer-events-none
      absolute
      -top-92.25
      -right-120
      z-0
      h-163.25
      w-163.25
      rounded-full
      bg-linear-to-bl
      from-[#C900C1]
      to-[#C900C1]
      opacity-25
      blur-3xl
    "
  />
    <div id='frame64' className='container relative z-10 mx-auto flex flex-col gap-16 '>
        <div id='frame30 ' className='flex flex-col gap-4'>
            <h1 className="text-2xl font-bold">Stylish Collection of Furniture</h1>
            <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>

        </div>
        <div id='frame63' className='container relative z-10 mx-auto flex flex-col gap-20'>
            <div id='frame33'>
               <CatalogButtons />
            </div>
            <div id='frame62'>
                <div id='frame61'>
                  <CardImage />
                    
                </div>
            </div>

        </div>
        <div>
          <img src={Layer2} alt="Collection" className="absolute -top-7 left-67  w-20" />
        </div>
        

    </div>
   
 <div
    className="
      pointer-events-none
      absolute
      -bottom-92.25
      -left-120
      z-0
      h-163.25
      w-163.25
      rounded-full
      bg-linear-to-bl
      from-[#C900C1]
      to-[#C900C1]
      opacity-25
      blur-3xl
    "
  />
   </section>
  )
}

export default Collection 
