import React from 'react'

const Header = () => {
  return (
    <div className='h-[10vh] py-10 px-16 flex justify-between small:hidden mobile:hidden tablet:hidden tabletlg:flex '>
        <div>
            <h1 className='text-6xl font-bold'>DISCUSSI<span className='text-orange-500'>ON</span></h1>
        </div>
       <div>
        <img className='w-[20vw] h-[4vw] object-cover' src="https://images.tokopedia.net/img/KRMmCm/2022/5/23/f0fbb13f-50e5-40ff-90da-2f6f0d2fcaf2.jpg" alt="" />
       </div>
    </div>
  )
}

export default Header