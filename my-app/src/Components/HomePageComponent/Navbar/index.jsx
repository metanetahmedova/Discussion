import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex gap-8 h-12 items-center px-16 font-medium text-base mt-16 small:hidden mobile:hidden tablet:hidden tabletlg:flex'>
      <Link to="/">Home</Link>
      <Link to="/culture">Culture</Link>
      <Link to="/politics">Politics</Link>
      <Link to="/memes">Memes</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/boxed">Boxed</Link>
      <Link to="/reviews">Reviews</Link>

    </div>
  )
}

export default Navbar