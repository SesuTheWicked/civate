import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'

const Done = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='bluk3'></div>
        </div>
      </div>
    </div>
  )
}

export default Done
