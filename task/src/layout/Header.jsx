import React from 'react'
import '../assets/css/header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className='app-header'>
      <header >
        <div className='contain-fluid header d-flex flex-column justify-content-center border'> 
            <div className='row d-flex justify-content-between align-items-center m-0'>
                <div className='col-3 d-flex justify-content-around align-items-center px-5 mx-3 mx-md-0'>
                <FontAwesomeIcon icon={faNewspaper} className='' size="2xl" style={{color: "#000000",}} />
                <h2 className='font-header'>Reporter</h2>
                </div>

                <div className='col-5 d-flex justify-content-around align-items-center'>
                    <Link to='/' className='font'>Home</Link>
                    <Link to='/news' className='font'>News</Link>
                    <Link to='/about' className='font'>About</Link>
                </div>

                <div className='col-3 d-md-block d-none'>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
