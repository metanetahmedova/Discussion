import React from 'react'
import {SiGooglemessages} from "react-icons/si"
import {FaCalendarAlt} from "react-icons/fa"
import {IoIosShareAlt} from "react-icons/io"
import FixedSection from '../FixedSection'



const SectionTwo = () => {

    const data = [
    {
        id:1,
        image:"https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fun"
    },
    {
        id:2,
        image:"https://images.pexels.com/photos/2027696/pexels-photo-2027696.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "health"
    },
    {
        id:3,
        image:"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fashion"
    },
    {
        id:4,
        image:"https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fun"
    },
]
const data2 = [
    {
        id:1,
        image:"https://images.pexels.com/photos/132429/pexels-photo-132429.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fun"
    },
    {
        id:2,
        image:"https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "health"
    },
    {
        id:3,
        image:"https://images.pexels.com/photos/1191525/pexels-photo-1191525.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fashion"
    },
    {
        id:4,
        image:"https://images.pexels.com/photos/209817/pexels-photo-209817.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"our favorite photo from all arround",
        icon1: <FaCalendarAlt/>,
        text1: "19 february 2022",
        icon2: <SiGooglemessages/>,
        text2: "0",
        box: "fun"
    },
]

  return (
    <div className='py-10 px-16 flex gap-6 h-[350vh] small:h-[530vh]   small:flex-col small:px-12 mobile:h-[490vh]  mobile:flex-col mobile:px-16 tablet:h-[590vh]  tablet:flex-col tabletlg:h-[405vh] tabletlg:flex-col tabletxl:h-[300vh] tabletxl:flex-col tabletxl:px-48  laptop:flex-row laptop:px-16 laptop:h-[590vh] desktop:h-[460vh]  large:h-[355vh] '>
        <div className='flex flex-col gap-6'>
            <div className='w-[67vw] h-12 bg-gray-400'>
                <div className='text-xl text-white font-semibold bg-orange-600 h-12 w-32 justify-center  flex items-center  '>Popular</div>
            </div>

            <div className='flex gap-6 small:flex-col mobile:flex-col tablet:flex-col tabletlg:flex-col tabletxl:flex-col laptop:flex-col large:flex-row'>
                <div className='flex flex-col gap-6'>
                {data.map(item =>(
               <div className='flex gap-6'>
                   <div className='shadow-xl w-[33vw] h-[11vw] flex small:w-[88vw] small:h-[50vw] mobile:w-[88vw] mobile:h-[50vw]  tablet:w-[65vw] tablet:h-[35vw] tabletlg:w-[54vw] tabletlg:h-[27vw]  tabletxl:w-[54vw] tabletxl:h-[16vw] laptop:w-[66vw] laptop:h-[18vw] desktop:w-[66vw] desktop:h-[14vw] large:w-[33vw] large:h-[11vw]' key={item.id}>
               
               <div className='relative'>
                   <div style={{backgroundImage: `url(${item.image})`}} className={`w-[16vw] h-[11vw] bg-cover small:w-[44vw] small:h-[50vw] mobile:w-[44vw] mobile:h-[50vw] tablet:w-[32vw] tablet:h-[35vw] tabletlg:w-[27vw] tabletlg:h-[27vw] tabletxl:w-[27vw] tabletxl:h-[16vw] laptop:w-[33vw] laptop:h-[18vw] desktop:w-[33vw] desktop:h-[14vw] large:w-[16vw] large:h-[11vw] `}>
                     
                   </div>
                   <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
                       {item.box}
                   </div>
               </div>
               <div className='py-6 px-4 flex flex-col gap-3 w-[16vw] h-[11vw] small:w-[44vw] small:h-[50vw] mobile:w-[44vw] mobile:h-[50vw] tablet:w-[33vw] tablet:h-[35vw] tabletlg:w-[27vw] tabletlg:h-[27vw] tabletxl:w-[27vw] tabletxl:h-[16vw] laptop:w-[33vw] laptop:h-[22vw] ' >
                   <h4 className='text-black capitalize text-lg font-semibold small:text-sm mobile:text-base tablet:text-base tabletlg:text-lg tabletxl:text-sm laptop:text-lg'>{item.title}</h4>
                      <div className='flex gap-2'>
                          <span className='text-orange-600 text-base mt-1 pr-3 small:text-sm mobile:text-base   tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.icon1}</span>
                          <span className='text-gray-600 text-base font-semibold small:text-sm mobile:text-base tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.text1}</span>
                      </div>
                      
                      <div className='flex gap-2'>
                           <span className='text-orange-600 text-base mt-1 pr-3 small:text-sm mobile:text-base   tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.icon2}</span>
                           <span className='text-gray-600 text-base font-semibold small:text-sm mobile:text-base tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.text2}</span>
                      </div>
               </div>
           </div>

           

               </div>
          ))}
                </div>

                <div className='flex flex-col gap-6'>
                {data2.map(item =>(
            <div className='shadow-xl w-[33vw] h-[11vw] flex small:w-[88vw] small:h-[50vw] mobile:w-[88vw] mobile:h-[50vw] tablet:w-[65vw] tablet:h-[35vw] tabletlg:w-[54vw] tabletlg:h-[27vw] tabletxl:w-[54vw] tabletxl:h-[16vw] laptop:w-[66vw] laptop:h-[18vw] desktop:w-[66vw] desktop:h-[14vw] large:w-[33vw] large:h-[11vw]' key={item.id}>
               
            <div className='relative'>
                <div style={{backgroundImage: `url(${item.image})`}} className={`w-[16vw] h-[11vw]  bg-cover small:w-[44vw] small:h-[50vw] mobile:w-[44vw] mobile:h-[50vw] tablet:w-[32vw] tablet:h-[35vw] tabletlg:w-[27vw] tabletlg:h-[27vw] tabletxl:w-[27vw] tabletxl:h-[16vw] laptop:w-[33vw] laptop:h-[18vw] desktop:w-[33vw] desktop:h-[14vw] large:w-[16vw] large:h-[11vw] `}>
                  
                </div>
                <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
                    {item.box}
                </div>
            </div>
            <div className='py-6 px-4 flex flex-col gap-3 w-[16vw] h-[11vw] small:w-[44vw] small:h-[50vw] mobile:w-[44vw] mobile:h-[50vw] tablet:w-[33vw] tablet:h-[35vw] tabletlg:w-[27vw] tabletlg:h-[27vw] tabletxl:w-[27vw] tabletxl:h-[16vw] laptop:w-[33vw] laptop:h-[22vw]' >
                <h4 className='text-black capitalize text-lg font-semibold small:text-sm mobile:text-base tablet:text-base tabletlg:text-lg tabletxl:text-sm laptop:text-lg'>{item.title}</h4>
                   <div className='flex gap-2'>
                       <span className='text-orange-600 text-base mt-1 pr-3 small:text-sm mobile:text-base tablet:text-sm   tabletlg:text-base tabletxl:text-sm laptop:text-base' >{item.icon1}</span>
                       <span className='text-gray-600 text-base font-semibold small:text-sm mobile:text-base tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.text1}</span>
                   </div>
                   
                   <div className='flex gap-2'>
                        <span className='text-orange-600 text-base mt-1 pr-3 small:text-sm   mobile:text-base tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.icon2}</span>
                        <span className='text-gray-600 text-base font-semibold small:text-sm mobile:text-base tablet:text-sm tabletlg:text-base tabletxl:text-sm laptop:text-base'>{item.text2}</span>
                   </div>
            </div>
        </div>
         ))}
                </div>

            </div>
            <div className='py-10 flex flex-col gap-7'>
          <div className='w-[67vw] h-12 bg-gray-400'>
                <div className='text-xl text-white font-semibold bg-orange-600 h-12 w-36 justify-center  flex items-center '>Popular Posts</div>
            </div>
        <div className='flex gap-6 small:flex-col laptop:flex-row'>
        <div className='w-[32vw] h-[27vw] shadow-lg relative small:w-[88vw] small:h-[80vw]  mobile:w-[88vw] mobile:h-[80vw]  tablet:w-[66vw] tablet:h-[60vw] tabletlg:w-[54vw] tabletlg:h-[40vw] tabletxl:w-[54vw] tabletxl:h-[37vw] laptop:w-[34vw] laptop:h-[39vw] desktop:w-[34vw] desktop:h-[35vw] large:w-[33vw] large:h-[27vw]'>
            <img className='w-[33vw] h-[20vw] object-cover small:w-[89vw] small:h-[48vw] tablet:w-[66vw] tablet:h-[38vw] tabletlg:w-[54vw] tabletlg:h-[26vw] tabletxl:w-[54vw] tabletxl:h-[26vw] laptop:w-[34vw] laptop:h-[26vw] desktop:w-[34vw] desktop:h-[26vw] large:w-[34vw] large:h-[20vw] ' src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
                  world
                </div>
             <div className='flex flex-col gap-3 py-3 px-4'>
             <div>
                    <h4 className='capitalize text-lg font-semibold small:text-base mobile:text-base'>6 reasons why you shouldnt skip breakfast</h4>
                </div>
                <div className='flex gap-2'>
                        <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                        <span className='text-gray-600 text-base font-semibold'>19 jan 2022</span>
                </div>
             </div>
        </div>
        <div className='w-[33vw] h-[27vw] shadow-lg relative small:w-[88vw] small:h-[80vw] mobile:w-[88vw] mobile:h-[80vw] tablet:w-[66vw] tablet:h-[60vw] tabletlg:w-[54vw] tabletlg:h-[40vw] tabletxl:w-[54vw] tabletxl:h-[37vw] laptop:w-[34vw] laptop:h-[39vw] desktop:w-[34vw] desktop:h-[35vw] large:w-[33vw] large:h-[27vw]' >
            <img className='w-[33vw] h-[20vw] object-cover small:w-[89vw] small:h-[48vw] tablet:w-[66vw] tablet:h-[38vw] tabletlg:w-[54vw] tabletlg:h-[26vw] tabletxl:w-[54vw] tabletxl:h-[26vw] laptop:w-[34vw] laptop:h-[26vw] desktop:w-[34vw] desktop:h-[26vw] large:w-[34vw] large:h-[20vw]' src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
                    health
                </div>
            <div className='flex flex-col gap-3 py-3 px-4'>
            <div>
                <h4 className='capitalize text-lg font-semibold small:text-base mobile:text-base'>we went deep underground for this amazing</h4>
            </div>
            <div className='flex gap-2'>
                        <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                        <span className='text-gray-600 text-base font-semibold'>19 jan 2022</span>
                </div>
            </div>
        </div>
        </div>

         </div>
         <div className='py-10  flex flex-col gap-6 '>
    <div className='w-[67vw] h-12 bg-gray-400'>
          <div className='text-xl text-white font-semibold bg-orange-600 h-12 w-36 justify-center  flex items-center '>Life Style</div>
      </div>
  <div className='flex gap-6 small:flex-col laptop:flex-row'>
  <div className='w-[21vw] h-[22vw] small:w-[78vw]  small:h-[70vw] mobile:w-[78vw]  mobile:h-[65vw] tablet:w-[78vw] tablet:h-[50vw] tabletlg:w-[54vw] tabletlg:h-[40vw] tabletxl:w-[54vw] tabletxl:h-[37vw] laptop:w-[22vw] laptop:h-[39vw] large:w-[21.2vw] large:h-[22vw]   shadow-lg relative'>
      <img className='w-[21vw] h-[14vw] object-cover small:w-[78vw] small:h-[35vw] mobile:w-[78vw]  mobile:h-[35vw] tablet:w-[78vw] tablet:h-[30vw] tabletlg:w-[54vw] tabletlg:h-[26vw] tabletxl:w-[54vw] tabletxl:h-[26vw] laptop:w-[22vw] laptop:h-[26vw] large:w-[21.2vw] large:h-[14vw]  ' src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
            world
          </div>
       <div className='flex flex-col gap-3 py-3 px-4'>
       <div>
              <h4 className='capitalize text-lg font-semibold small:text-base'>mustang teases with a new promo...</h4>
          </div>
          <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-base'>19 february 2022</span>
          </div>
       </div>
  </div>
  <div className='w-[21vw] h-[22vw] small:w-[78vw]  small:h-[70vw] mobile:w-[78vw]  mobile:h-[65vw] tablet:w-[78vw] tablet:h-[50vw] tabletlg:w-[54vw] tabletlg:h-[40vw] tabletxl:w-[54vw] tabletxl:h-[37vw] laptop:w-[22vw] laptop:h-[39vw] large:w-[21.2vw] large:h-[22vw]    shadow-lg relative ' >
      <img className='w-[21vw] h-[14vw] small:w-[78vw]  small:h-[35vw] mobile:w-[78vw]  mobile:h-[35vw] tablet:w-[78vw] tablet:h-[30vw] tabletlg:w-[54vw] tabletlg:h-[26vw] tabletxl:w-[54vw] tabletxl:h-[26vw] laptop:w-[22vw] laptop:h-[26vw] large:w-[21.2vw] large:h-[14vw]    object-cover' src="https://images.pexels.com/photos/1838144/pexels-photo-1838144.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
              sport
          </div>
      <div className='flex flex-col gap-3 py-3 px-4'>
      <div>
          <h4 className='capitalize text-lg font-semibold small:text-base'>surfs up- places for killer waves dissussion...</h4>
      </div>
      <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-base'>19 february 2022</span>
          </div>
      </div>
  </div>
  <div className='w-[21vw] h-[22vw] small:w-[78vw]  small:h-[70vw] mobile:w-[78vw]  mobile:h-[65vw] tablet:w-[78vw] tablet:h-[50vw] tabletlg:w-[54vw] tabletlg:h-[40vw] tabletxl:w-[54vw] tabletxl:h-[37vw] laptop:w-[22vw] laptop:h-[39vw] large:w-[21.2vw] large:h-[22vw] shadow-lg relative' >
      <img className='w-[21vw] h-[14vw] small:w-[78vw]  small:h-[35vw] mobile:w-[78vw]  mobile:h-[35vw] tablet:w-[78vw] tablet:h-[30vw] tabletlg:w-[54vw] tabletlg:h-[26vw] tabletxl:w-[54vw] tabletxl:h-[26vw] laptop:w-[22vw] laptop:h-[26vw] large:w-[21.2vw] large:h-[14vw]   object-cover' src="https://images.pexels.com/photos/3131819/pexels-photo-3131819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
              health
          </div>
      <div className='flex flex-col gap-3 py-3 px-4'>
      <div>
          <h4 className='capitalize text-lg font-semibold small:text-base'>learn how to nail your favorite look...</h4>
      </div>
      <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-base'>19 jan 2022</span>
          </div>
      </div>
  </div>
  </div>

       </div>
       <div className='py-10  flex flex-col gap-6'>
    <div className='w-[67vw] h-12 bg-gray-400'>
          <div className='text-xl text-white font-semibold bg-orange-600 h-12 w-36 justify-center  flex items-center '>Music News</div>
      </div>
      <div className='flex flex-col gap-6 '>
        <div className='w-[66vw] h-[17vw] shadow-lg relative flex small:w-[78vw]  small:h-[40vw] tablet:w-[78vw]  tablet:h-[33vw] tabletlg:w-[54vw]  tabletlg:h-[23vw]  tabletxl:w-[54vw]  tabletxl:h-[20vw]  laptop:w-[70vw]  laptop:h-[22vw] desktop:w-[70vw]  desktop:h-[18vw]     '>
           <div className='w-[21vw] h-[17vw]'>
               <img className='w-[21vw] h-[17vw] object-cover small:w-[26vw]  small:h-[40vw] tablet:w-[78vw]  tablet:h-[33vw] tabletlg:w-[54vw]  tabletlg:h-[23vw] tabletxl:w-[54vw]  tabletxl:h-[20vw]  laptop:w-[21vw]  laptop:h-[22vw] desktop:w-[21vw]  desktop:h-[18vw] ' src="https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
            <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
            fun
          </div>
          <div className='flex flex-col gap-3 py-3 px-4 w-[45vw] h-[17vw] small:w-[66vw]'>
             <div>
              <h4 className='capitalize text-lg font-semibold small:text-base tablet:text-lg'>mustang teases with a new promo...</h4>
            </div>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-sm tablet:text-base'>19 february 2022</span>
            </div>
            <div className='small:hidden laptop:flex'>
                <p className='text-base  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum dicta dolore et aliquam accusantium magnam soluta distinctio eum qu</p>
            </div>
            <div className='flex gap-1'>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-lg mt-1 pr-3'>{<IoIosShareAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-sm tablet:text-base'>Share /</span>
            </div>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<SiGooglemessages/>}</span>
                  <span className='text-gray-600 text-base font-semibold'>0</span>
            </div>
            </div>
       </div>        

        </div>

        <div className='w-[66vw] h-[17vw] shadow-lg relative flex small:w-[78vw]  small:h-[40vw] tablet:w-[78vw]  tablet:h-[33vw] tabletlg:w-[54vw]  tabletlg:h-[23vw]tabletxl:w-[54vw]  tabletxl:h-[20vw]  laptop:w-[70vw]  laptop:h-[22vw]  desktop:w-[70vw]  desktop:h-[18vw]   '>
           <div className='w-[21vw] h-[17vw]'>
               <img className='w-[21vw] h-[17vw] small:w-[26vw]  small:h-[40vw] tablet:w-[78vw]  tablet:h-[33vw]  object-cover tabletlg:w-[54vw]  tabletlg:h-[23vw] tabletxl:w-[54vw]  tabletxl:h-[20vw]  laptop:w-[21vw]  laptop:h-[22vw] desktop:w-[21vw]  desktop:h-[18vw]  ' src="https://images.pexels.com/photos/1142941/pexels-photo-1142941.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
            <div className='bg-black text-white text-base w-16 h-8 flex items-center justify-center capitalize absolute left-0 top-0'>
            fun
          </div>
          <div className='flex flex-col gap-3 py-3 px-4 w-[45vw] h-[17vw] small:w-[66vw]'>
             <div>
              <h4 className='capitalize text-lg font-semibold small:text-sm tablet:text-lg'>mustang teases with a new promo...</h4>
            </div>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<FaCalendarAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-sm tablet:text-base'>19 february 2022</span>
            </div>
            <div className='small:hidden laptop:flex'>
                <p className='text-base '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, impedit dolorum repellat suscipit praesentium odio, amet necessitatibus similiq</p>
            </div>
            <div className='flex gap-1'>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-lg mt-1 pr-3'>{<IoIosShareAlt/>}</span>
                  <span className='text-gray-600 text-base font-semibold small:text-sm tablet:text-base'>Share /</span>
            </div>
            <div className='flex gap-2'>
                  <span className='text-orange-600 text-base mt-1 pr-3'>{<SiGooglemessages/>}</span>
                  <span className='text-gray-600 text-base font-semibold'>0</span>
            </div>
            </div>
       </div>        

        </div>
      </div>
    </div>
       

 </div>
        
        <FixedSection/>
        
</div>
  )
}

export default SectionTwo