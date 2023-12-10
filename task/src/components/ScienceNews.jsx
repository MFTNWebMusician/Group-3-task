import React from 'react'
import SCN1 from '../assets/images/scn-1.jpg'
import SCN2 from '../assets/images/scn-2.jpg'
import SCN3 from '../assets/images/scn-3.jpg'

const ScienceNews = ({newsp}) => {
  return (
    <>
      <div className='row text-start my-3 py-2 '>
              <div className='col-3'>
                <img src={newsp.img} width={'100%'} />
              </div>

              <div className='col-8'>
                <h6><a href=''>{newsp.title}</a></h6>
              </div>
              
        </div>
        <hr />
    </>
  )
}

export default ScienceNews
