import React from 'react'
import {Link} from 'react-router-dom';
import "../Style/Style.css"

const Header = () => {
  return (
    <div className='container'>
        <div>
            <span></span>
            <span></span>
        </div>
        <div className='ishop'>
           <span>i</span> <span> SHOP </span>
        </div>
        <div className='page-section'>
          <p><Link to=''>Home</Link></p>
          <p><Link to='/mobile'>Mobile</Link></p>
          <p><Link to='/ipad'>Ipad</Link></p>
          <p><Link to='/laptop'>Laptop</Link></p>
          <p><Link to='/macbook'>MacBook</Link></p>
          <p><Link to='/accessories'>Accessories</Link></p>
        </div>
    </div>
  )
}

export default Header;