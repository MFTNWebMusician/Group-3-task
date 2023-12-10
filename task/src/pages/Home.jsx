import React from 'react'
import SportPhoto from '../assets/images/h-s-img.jpg'
import SciencePhoto from '../assets/images/h-sc-img.jpg'
import PoliticPhoto from '../assets/images/h-p-img.jpg'
import '../assets/css/home.css'
import { news } from '../data/Data'
import SportNews from '../components/SportNews'
import TopNews from '../components/TopNews'
import PoliticNews from '../components/PoliticNews'
import ScienceNews from '../components/ScienceNews'

const Home = () => {


  return (
    <div className='home'>

      <div className='container-fluid top-news my-1 d-flex flex-column justify-content-center'>
        {
          news.topnews.map((news,index)=>{
            return <TopNews newsp={news}/>
          })
        }
      </div>

      <hr />
      
      <div className='container-fluid my-4'>
        <div className='row'>
          <div className='col-12'>
            
          </div>
          <div className='col-12 col-lg-4 px-4 text-start'>
            <h2 className='font my-3'>Sport</h2>
            <img src={SportPhoto} className='rounded' width={'100%'} />
            {
            news.sport_news.map((news,index)=>{
              return <SportNews newsp={news}/>
              })
            }
             <a href='' >Go to Sports</a>
          </div>
              <hr className='d-block d-md-none'/>
          <div className='col-12 col-lg-4 px-4 text-start'>
            <h2 className='font my-3'>Politic</h2>
          <img src={PoliticPhoto} className='rounded' width={'100%'} />

          {
            news.politic_news.map((news,index)=>{
              return <PoliticNews newsp={news}/>
              })
            }
            <a href='' >Go to Politics</a>
          </div>
          <hr className='d-block d-md-none'/>
          <div className='col-12 col-lg-4 px-4 text-start'>
            <h2 className='font my-3'>Science</h2>
          <img src={SciencePhoto} className='rounded' width={'100%'} />


          {
            news.science_news.map((news,index)=>{
              return <ScienceNews newsp={news}/>
              })
            }
           <a href='' >Go to Science</a>
           <hr className='d-block d-md-none'/>
          </div>
        </div>
      </div>
          
      
      
      

    </div>
  )
}

export default Home
