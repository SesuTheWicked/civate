import React from 'react'
import Footer from '../../../components/containers/footer/footer'
import SignedNav from '../../../components/containers/signed/SignedNav'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import cup_green from '../../../assets/cup_green.svg'
import printer from '../../../assets/printer.svg'
import './style.css'

const PaymentCompletion = () => {
  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='try'>
        <div className='second_block'>
          <TestCarousel/>
          <div className='cup_you'>
      <div><img src={cup_green} alt="img" /></div>

      <div>
        <span className='you_are'>You are all set!</span> <br />
        <span className='regarding'>All the info regarding test is in your dashboard</span>
        <div className='finish'>
          <a href="/" className='receipt'><img src={printer} alt="img" />Download Reciept</a>
          <a href="/" className='dash'>To Dashboard</a>
        </div>
      </div>
          </div>
        </div>
      </div>
     <div className='bottom0'><Footer/></div>
    </div>
  )
}

export default PaymentCompletion
