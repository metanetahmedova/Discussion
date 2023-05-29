import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import { FreeMode, Pagination } from "swiper";



const SwiperPage = () => {

    const data = [
        {
            id:1,
            image:"https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday"
        },
        {
            id:2,
            image:"https://images.pexels.com/photos/2027696/pexels-photo-2027696.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday"
        },
        {
            id:3,
            image:"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday"
        },
        {
            id:4,
            image:"https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday"
        },
        {
            id:5,
            image:"https://images.pexels.com/photos/132429/pexels-photo-132429.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:6,
            image:"https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:7,
            image:"https://images.pexels.com/photos/1191525/pexels-photo-1191525.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:8,
            image:"https://images.pexels.com/photos/209817/pexels-photo-209817.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:9,
            image:"https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:10,
            image:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:11,
            image:"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:12,
            image:"https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:13,
            image:"https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:14,
            image:"https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:15,
            image:"https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:16,
            image:"https://images.pexels.com/photos/1798665/pexels-photo-1798665.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:17,
            image:"https://images.pexels.com/photos/12987876/pexels-photo-12987876.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:18,
            image:"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:19,
            image:"https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
        {
            id:20,
            image:"https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=600",
            text:"places to visit for a peacefull  holiday "
        },
    ]
  return (

    <Swiper
        slidesPerView={8}
        spaceBetween={14}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map(item =>(
              <SwiperSlide key={item.id}>
      
            <div style={{backgroundImage:`url(${item.image})`}} className={`bg-cover`}>
                
            <div className=' text-white mt-12 pl-2'>
                  <p className='text-sm font-medium capitalize text-start'>{item.text} </p>
              </div>
            </div>
             
            
           
          </SwiperSlide>
        ))}
      

        

      </Swiper>
  )
}

export default SwiperPage