import React from 'react'

const PoliticNews = ({newsp}) => {
  return (
    <>
      <div className='row text-start my-3 py-2'>
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

export default PoliticNews
