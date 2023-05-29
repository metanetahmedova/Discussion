import React from 'react'
import {TiSocialFacebook,TiSocialInstagram,TiSocialTwitter,TiSocialYoutube,TiSocialLinkedin} from "react-icons/ti"

const FixedSection = () => {
  return (
    <div className='flex flex-col gap-6 h-[350vh] small:hidden mobile:hidden tablet:hidden tabletlg:hidden tabletxl:hidden laptop:flex'>
        <div className='w-[21vw] h-12 bg-gray-400'>
                <div className='text-xl text-white font-semibold bg-black h-12 w-40 justify-center  flex items-center '>Stay onnected</div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='bg-indigo-700 w-[21vw] h-12 flex items-center pl-4 gap-3'>
                    <span className='text-white font-semibold text-2xl'>{<TiSocialFacebook/>}</span>
                    <span className='text-white font-semibold text-lg'>12,740 Likes</span>
                </div>
                <div className='bg-purple-500 w-[21vw] h-12 flex items-center pl-4 gap-3'>
                    <span className='text-white font-semibold text-2xl'>{<TiSocialInstagram/>}</span>
                    <span className='text-white font-semibold text-lg'>10,400 Followers</span>
                </div>
                <div className='bg-blue-700 w-[21vw] h-12 flex items-center pl-4 gap-3'>
                    <span className='text-white font-semibold text-2xl'>{<TiSocialTwitter/>}</span>
                    <span className='text-white font-semibold text-lg'>9,800 Followers</span>
                </div>
                <div className='bg-red-600 w-[21vw] h-12 flex items-center pl-4 gap-3'>
                    <span className='text-white font-semibold text-2xl'>{<TiSocialYoutube/>}</span>
                    <span className='text-white font-semibold text-lg'>2,700 subscriber</span>
                </div>
                <div className='bg-blue-600 w-[21vw] h-12 flex items-center pl-4 gap-3'>
                    <span className='text-white font-semibold text-2xl'>{<TiSocialLinkedin/>}</span>
                    <span className='text-white font-semibold text-lg'>7,000 Followers</span>
                </div>
              
            </div>
            <div className='w-[21vw] h-12 bg-gray-400'>
                <div className='text-xl text-white font-semibold bg-black h-12 w-40 justify-center  flex items-center '>Subscribe</div>
            </div>

            <div className='w-[21vw] h-[14vw] shadow-lg border-black border-2 flex items-center justify-center laptop:py-28 large:py-0'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h4 className='text-xl font-semibold laptop:text-lg'>Subscribe to our New stories</h4>
                    <input type="email" placeholder='Email adress...' className='w-[18vw] border-2 border-gray-300 pl-3 text-base h-[2.5vw]'/>
                    <input type="submit" value="SUBMIT" className='bg-red-600  w-[18vw] h-[2.5vw] font-semibold text-white' />
                    <span></span>
                </div>
            </div>

            <div className=' '>
                <img className='w-[21vw] h-[14vw] object-cover laptop:w-[21vw] laptop:h-[26vw] large:h-[14vw] ' src="https://images.pexels.com/photos/1252982/pexels-photo-1252982.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='w-[21vw] h-12 bg-gray-400'>
                <div className='text-xl text-white font-semibold bg-black h-12 w-40 justify-center  flex items-center '>Tiktik Posts</div>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='w-[21vw] h-28 shadow-lg flex  laptop:h-32 large:h-28'>
                    <img className='w-[7vw] h-28 object-cover laptop:h-32 large:h-28' src="https://images.pexels.com/photos/7234255/pexels-photo-7234255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className='px-2 py-1 flex flex-col gap-6 laptop:gap-3'>
                        <h4 className='text-base font-medium laptop:text-sm'>Lorem ipsum dolor sit amet, consectetur </h4>
                        <span className='text-gray-600 text-base font-medium'>a year ago</span>
                    </div>
                </div>
                <div className='w-[21vw] h-28 shadow-lg flex laptop:h-32 large:h-28'>
                    <img className='w-[7vw] h-28 object-cover laptop:h-32 large:h-28' src="https://images.pexels.com/photos/9807277/pexels-photo-9807277.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <div className='px-2 py-1 flex flex-col gap-6 laptop:gap-3'>
                        <h4 className='text-base font-medium laptop:text-sm'>Lorem ipsum dolor sit amet, consectetur </h4>
                        <span className='text-gray-600 text-base font-medium'>a year ago</span>
                    </div>
                </div>
                <div className='w-[21vw] h-28 shadow-lg flex laptop:h-32 large:h-28'>
                    <img className='w-[7vw] h-28 object-cover laptop:h-32 large:h-28' src="https://images.pexels.com/photos/10254576/pexels-photo-10254576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <div className='px-2 py-1 flex flex-col gap-6 laptop:gap-3'>
                        <h4 className='text-base font-medium laptop:text-sm'>Lorem ipsum dolor sit amet, consectetur </h4>
                        <span className='text-gray-600 text-base font-medium'>a year ago</span>
                    </div>
                </div>

                   <div className='flex flex-col gap-6'>
                      <div className='w-[21vw] h-12 bg-gray-400'>
                        <div className='text-xl text-white font-semibold bg-black h-12 w-40 justify-center  flex items-center '>Catagories</div>
                      </div>

                      <div className='flex flex-col gap-6'>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>world</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>travel</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>sport</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>fun</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>health</span>
                        </div>
                         <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>fashion</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>business</span>
                        </div>
                        <div className='w-[21vw] h-12 bg-black flex items-center'>
                            <span className='text-white text-base capitalize font-medium pl-4'>technology</span>
                        </div>
                      </div>
                   </div>

                   <div className='flex flex-col gap-6'>
                   <div className='w-[21vw] h-12 bg-gray-400'>
                        <div className='text-xl text-white font-semibold bg-black h-12 w-40 justify-center  flex items-center '>Gallery</div>
                      </div>
                      <div>
                        <img className='w-[21vw] h-[14vw] object-cover laptop:h-[23vw] large:h-[14vw] ' src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                      </div>
                   </div>
            </div>

        </div>
  )
}

export default FixedSection