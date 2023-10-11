import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'

const TimeDate = () => {
  return (
    <div>
      <div>
       <SignedNav/>
      </div>
      <div>
        <div className='try'>
          <div className='second_block'>
          <TestCarousel/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TimeDate
