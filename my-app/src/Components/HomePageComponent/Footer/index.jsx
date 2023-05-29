import React from 'react'
import {MdEmail} from "react-icons/md"
import {SlEarphones} from "react-icons/sl"
import {BiChevronRight} from "react-icons/bi"

const Footer = () => {
  return (
    <div className='w-full h-[45vh] bg-black text-white flex py-10 justify-center small:h-[110vh] small:flex-col small:items-center small:gap-8 tabletlg:h-[40vh] tabletlg:grid tabletlg:grid-cols-2 tabletlg:px-32 laptop:h-[80vh] desktop:h-[70vh] desktop:px-36 large:px-56'>
           <div className='w-[22vw] flex flex-col gap-4 small:w-[60vw] tabletlg:w-[30vw]'>
            <h3 className='text-xl font-semibold '>TECH</h3>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque  officia enim iste quam.</p>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                <span>{<MdEmail/>}</span>
                <span>hello@beatiful.com</span>
                </div>
              <div className='flex gap-2 items-center'>
              <span>{<SlEarphones/>}</span>
                <span>+ 91 9605040</span>
              </div>
              
              </div>
           </div>

           <div className='w-[22vw] flex flex-col gap-4 small:w-[60vw] tabletlg:w-[30vw]'>
            <h3 className='text-base font-semibold uppercase '>sport</h3>
             
             <div className='flex flex-col gap-6'>
                <div className='flex gap-4'>
                   <div>
                    <img className='w-[6vw] h-[5vw] object-cover' src="https://images.pexels.com/photos/12987876/pexels-photo-12987876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                   </div>
                    <div>
                        <p className='pr-4'>Google to boost android security in few days</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                   <div>
                    <img className='w-[6vw] h-[5vw] object-cover' src="https://images.pexels.com/photos/8162747/pexels-photo-8162747.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                   </div>
                    <div>
                        <p className='pr-4'>No escaping new high tech speed cameras</p>
                    </div>
                </div>
             </div>
           </div>

           <div className='w-[22vw] flex flex-col gap-4 small:w-[60vw] tabletlg:w-[30vw]'>
            <h3 className='text-base font-semibold uppercase  '>cricket</h3>
             
             <div className='flex flex-col gap-6'>
                <div className='flex gap-4'>
                   <div>
                    <img className='w-[6vw] h-[5vw] object-cover' src="https://images.pexels.com/photos/1798665/pexels-photo-1798665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                   </div>
                    <div>
                        <p className='pr-4'>Google to boost android security in few days</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                   <div>
                    <img className='w-[6vw] h-[5vw] object-cover' src="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                   </div>
                    <div>
                        <p className='pr-4'>No escaping new high tech speed cameras</p>
                    </div>
                </div>
             </div>
           </div>

           <div className='w-[22vw] flex flex-col gap-4 small:w-[60vw] tabletlg:w-[30vw]'>
            <h3 className='text-base font-semibold uppercase'>labels</h3>
             
            <div className='flex flex-col gap-4' >
                <div className='flex gap-2 border-b border-gray-600 pb-2 items-center'>
                   <span>{<BiChevronRight/>}</span>
                   <span>Boxing</span>
                </div>
              <div className='flex gap-2 border-b border-gray-600 pb-2 items-center'>
                  <span>{<BiChevronRight/>}</span>
                  <span>Fashion</span>
              </div>
              <div className='flex gap-2 border-b border-gray-600 pb-2 items-center'>
                  <span>{<BiChevronRight/>}</span>
                  <span>Health</span>
              </div>
              <div className='flex gap-2 items-center'>
                  <span>{<BiChevronRight/>}</span>
                  <span>Nature</span>
              </div>
              
              </div>
           </div>
    </div>
  )
}

export default Footer