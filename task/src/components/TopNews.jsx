import React from 'react'
import '../assets/css/topnews.css'

const TopNews = ({newsp}) => {
  return (
    <>
      <div 
      className='container rounded news-box p-0 my-3 text-start d-flex justify-content-center align-items-center' 
      style={{backgroundImage:`url(${newsp.img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}
      >
        <div className='row h-100 w-100 d-flex align-items-end news-box rounded'>
            <div className='col-11 '>
                <h2 className='font'>{newsp.title}</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default TopNews
