import React from 'react'
import FixedSection from '../../Components/HomePageComponent/FixedSection'
import Swiper from '../../Components/HomePageComponent/Swiper'
import {TiSocialFacebook,TiSocialInstagram,TiSocialTwitter,TiSocialLinkedin} from "react-icons/ti"

const SportPage = () => {
  return (
    <div className='flex flex-col gap-6 py-10'>
      <Swiper/>
       <div className='flex px-16 py-10 h-[320vh] gap-6'>
       <div className='w-[67vw] flex flex-col gap-7'>
      <h2 className='text-3xl font-semibold'>More than billion football fans Brazil world cup</h2>

      <div className='flex gap-3 items-center'>
        <span className='text-base font-semibold'>by</span>
        <img className='w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span className='text-base font-semibold'>Salman on</span>
        <span className='text-gray-600 text-base font-semibold'>5 Jun- 2022</span>
      </div>
      <div className='flex  gap-5'>
              <div className='bg-indigo-700 w-[8vw] h-10 flex items-center justify-center gap-3 '>
                  <span className='text-white font-semibold text-2xl'>{<TiSocialFacebook/>}</span>
                  <span className='text-white font-semibold  text-sm uppercase'>share</span>
              </div>
              <div className='bg-blue-600 w-[8vw] h-10 flex items-center justify-center gap-3 '>
                  <span className='text-white font-semibold text-2xl'>{<TiSocialTwitter/>}</span>
                  <span className='text-white font-semibold  text-sm uppercase'>twitter</span>
              </div>
              <div className='bg-purple-600 w-[5vw] h-10 flex items-center justify-center'>
                  <span className='text-white font-semibold text-2xl'>{<TiSocialLinkedin/>}</span>
              </div>
              <div className='bg-pink-700 w-[5vw] h-10 flex items-center justify-center '>
                  <span className='text-white font-semibold text-2xl'>{<TiSocialInstagram/>}</span>
              </div>
      </div>

      <div>
        <p className='text-base leading-relaxed font-medium'>Presentation expert Clif Atkinson tells a great story about a 2009 education conference where two speakers got very different reactions from their audiences. The first speaker started off with interactive exercises, he was entertaining, and overall, he was a hit. The second speaker launched in with a more traditional powerpoint, and he… didn’t go over quite so well.</p>
      </div>
      <div>
        <p className='text-base leading-relaxed font-medium'>In fact, while he presented, bored attendees started a “backchannel” on Twitter. They critiqued his slides, his content, and his delivery until finally, someone suggested a t-shirt. By the end of the keynote, you know exactly what happened: the t-shirt you see above was for sale on café press.</p>
      </div>

      <div>
        <img className='w-[67vw] h-[40vw] object-cover' src="https://images.pexels.com/photos/5238115/pexels-photo-5238115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
      <div>
        <p className='text-base leading-relaxed font-medium'>All this to say that audience participation isn’t necessarily a good thing. What you’re aiming for isn’t just participation for the sake of participation, but an interaction that gets the audience closer to embracing your ideas. You want to keep them engaged, on their toes, and show them that you value and want to connect with them.</p>
      </div>


       <div className='flex flex-col gap-7'>
           <h4 className='text-2xl font-semibold'>Starting a new company is easy</h4>

           <div>
              <p className='text-base leading-relaxed font-medium'>Presentation expert Clif Atkinson tells a great story about a 2009 education conference where two speakers got very different reactions from their audiences. The first speaker started off with interactive exercises, he was entertaining, and overall, he was a hit. The second speaker launched in with a more traditional powerpoint, and he… didn’t go over quite so well.</p>
          </div>
         <div>
              <p className='text-base leading-relaxed font-medium'>In fact, while he presented, bored attendees started a “backchannel” on Twitter. They critiqued his slides, his content, and his delivery until finally, someone suggested a t-shirt. By the end of the keynote, you know exactly what happened: the t-shirt you see above was for sale on café press.</p>
          </div>
          <div>
             <p className='text-base leading-relaxed font-medium'>All this to say that audience participation isn’t necessarily a good thing. What you’re aiming for isn’t just participation for the sake of participation, but an interaction that gets the audience closer to embracing your ideas. You want to keep them engaged, on their toes, and show them that you value and want to connect with them.</p>
         </div>
           
       </div>

       <div className='flex flex-col gap-7'>
             <h4 className='text-2xl font-semibold'>Create an Interactive Experience</h4>
             <div>
              <p  className='text-base leading-relaxed font-medium'> You can take action a step further—with interaction. Your goal here is to make the audience feel like they are participating in something. Have them move around the room. When you create a space that doesn’t feel like an auditorium or physically interact with the audience, it feels like something is happening to them.</p>
             </div>
             <div>
              <p className='text-base leading-relaxed font-medium'>At the end of the day, your presentation audience is going to participate in your talk one way or another. You want to be sure to control the nature of that participation by being smart about the ways you interact with audience members while you present. You can directly engage them and dictate the things that they should be actively doing while you speak.</p>
             </div>
             <div>
               <p className='text-base leading-relaxed font-medium'> If you try out some of the ways to interact with audience members discussed above, you can be pretty sure that no one will be bored enough to create a t-shirt about how boring you are. You may even end up with an audience who feels moved to make a t-shirt about how engaging you are – but who can’t do it because they are just so busy participating in your fascinating talk.</p>
              </div>
       </div>

       <div className='flex flex-col gap-7'>
             <h4 className='text-2xl font-semibold'>Take Questions Along the Way</h4>
             <div>
              <p  className='text-base leading-relaxed font-medium'> You can take action a step further—with interaction. Your goal here is to make the audience feel like they are participating in something. Have them move around the room. When you create a space that doesn’t feel like an auditorium or physically interact with the audience, it feels like something is happening to them.</p>
             </div>
             <div>
              <p className='text-base leading-relaxed font-medium'>At the end of the day, your presentation audience is going to participate in your talk one way or another. You want to be sure to control the nature of that participation by being smart about the ways you interact with audience members while you present. You can directly engage them and dictate the things that they should be actively doing while you speak.</p>
             </div>
             <div>
               <p className='text-base leading-relaxed font-medium'> If you try out some of the ways to interact with audience members discussed above, you can be pretty sure that no one will be bored enough to create a t-shirt about how boring you are. You may even end up with an audience who feels moved to make a t-shirt about how engaging you are – but who can’t do it because they are just so busy participating in your fascinating talk.</p>
              </div>
       </div>

     

    
    </div>
    <FixedSection/>
       </div>

   
  </div>
  )
}

export default SportPage