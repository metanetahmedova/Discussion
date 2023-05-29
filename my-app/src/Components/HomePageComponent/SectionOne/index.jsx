import React from 'react'
import { Link } from 'react-router-dom'

const SectionOne = () => {
  return (
    <div className='flex justify-center gap-3 px-16 py-10 small:flex-col small:items-center mobile:items-center mobile:flex-col tablet:flex-col tabletlg:flex-row  '>
        <div className='relative'>
          <img className=' w-[48vw] h-[29vw] object-cover small:w-[88vw]  small:h-[45vw] mobile:w-[70vw]  mobile:h-[45vw] tablet:w-[70vw]  tablet:h-[45vw] tabletlg:w-[48vw]  tabletlg:h-[54vw] tabletxl:w-[48vw]  tabletxl:h-[54vw] laptop:w-[48vw] laptop:h-[29vw] desktop:w-[48vw] desktop:h-[29vw]' src="https://images.pexels.com/photos/12987876/pexels-photo-12987876.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="" />
          <div className='absolute bottom-5 flex flex-col gap-3 pl-8'>
            <h3 className=' bg-red-700 text-white font-medium tracking-widest  uppercase w-28 h-8 text-center flex justify-center  items-center'>Featured</h3>
            <Link className='text-white text-xl capitalize font-semibold small:text-sm mobile:text-sm tablet:text-sm tabletlg:text-base tabletxl:text-base' to="/featured">Google to boost android security in few days</Link>
            <div className='text-white text-sm flex gap-5 font-medium'>
              <span>by Salman</span>
              <span>05 Jan</span>
              <span>2022</span>
            </div>
          </div>
        </div>
       

        <div  className='flex flex-col gap-3'>
          <div className='relative'>
            <img className=' w-[48vw] h-[14vw] object-cover small:w-[88vw]  small:h-[45vw] mobile:w-[70vw]  mobile:h-[45vw] tablet:w-[70vw]  tablet:h-[45vw] tabletlg:w-[48vw]  tabletlg:h-[17vw] tabletxl:w-[48vw]  tabletxl:h-[17vw] laptop:w-[48vw] laptop:h-[14vw] desktop:w-[48vw] desktop:h-[14vw]' src="https://images.pexels.com/photos/5238115/pexels-photo-5238115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className='absolute bottom-5 flex flex-col gap-3 pl-8'>
            <h3 className=' bg-purple-800 text-white font-medium tracking-widest  uppercase w-28 h-8 text-center flex justify-center  items-center'>sport</h3>
            <Link className='text-white text-lg lg:text-base small:text-sm mobile:text-sm tablet:text-sm tabletlg:text-base tabletxl:text-base' to="/sport">More than billion football fans Brazil world</Link>
            <div className='text-white text-sm flex gap-5 font-medium'>
              <span>by Alex</span>
              <span>22 mart</span>
              <span>2022</span>
            </div>
          </div>
       
          </div>

          <div className='flex gap-3 small:flex-col mobile:flex-col tablet:flex-col tabletlg:flex-col tabletxl:flex-col laptop:flex-row desktop:flex-row'>
            <div className='relative'>
              <img className='w-[23vw] h-[14.2vw] small:w-[88vw]  small:h-[45vw] mobile:w-[70vw]  mobile:h-[45vw] tablet:w-[70vw]  tablet:h-[45vw] tabletlg:w-[48vw]  tabletlg:h-[17vw] tabletxl:w-[48vw]  tabletxl:h-[17vw] laptop:w-[23vw] laptop:h-[14.2vw] desktop:w-[23vw] desktop:h-[14.2vw]' src="https://images.pexels.com/photos/1798665/pexels-photo-1798665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className='absolute bottom-5 flex flex-col gap-2 pl-8'>
            <h3 className=' bg-green-500 text-white font-medium tracking-widest  uppercase w-28 h-8 text-center flex justify-center  items-center'>fashion</h3>
            <Link className='text-white text-lg lg:text-base small:text-sm mobile:text-sm tablet:text-sm tabletlg:text-base tabletxl:text-base' to="/fashion">No escaping new high tech speed cameras</Link>
            <div className='text-white text-sm flex gap-5 font-medium'>
              <span>by Alex</span>
              <span>22 mart</span>
              <span>2022</span>
            </div>
          </div>
            </div>
            <div className='relative'>
              <img className='w-[23vw] h-[14.2vw] small:w-[88vw]  small:h-[45vw] mobile:w-[70vw]  mobile:h-[45vw] tablet:w-[70vw]  tablet:h-[45vw] tabletlg:w-[48vw]  tabletlg:h-[17vw]  tabletxl:w-[48vw]  tabletxl:h-[17vw] laptop:w-[23vw] laptop:h-[14.2vw] desktop:w-[23vw] desktop:h-[14.2vw]' src="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className='absolute bottom-5 flex flex-col gap-2 pl-8'>
            <h3 className=' bg-yellow-700 text-white font-medium tracking-widest  uppercase w-32 h-8 text-center flex justify-center  items-center'>technology</h3>
            <Link className='text-white text-lg lg:text-base small:text-sm mobile:text-sm tablet:text-sm tabletlg:text-base tabletxl:text-base' to="/technology">Emma Watson stands up fo Turkish women</Link>
            <div className='text-white text-sm flex gap-5 font-medium'>
              <span>by Alex</span>
              <span>12 Oct</span>
              <span>2022</span>
            </div>
          </div>
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default SectionOne

