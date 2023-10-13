import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import trois from '../../../assets/trois.svg'
import cinq from '../../../assets/cinq.svg'
import quatre from '../../../assets/quatre.svg'
import seize from '../../../assets/seize.svg'



import './style.css'

const StudentDashboard = () => {
  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='just'>
     <IdSlide/>
     <div className='dashboard_flex'>

     <div className=''>
      <div className='bold_dashboard'><img src={trois} alt="img" className=''/>My Dashboard</div>
      <br />
      <div><a href="/" className='my_test'>My Tests</a>   <a href="/" className=''>view all Tests</a></div>
      <div className='block_functions'></div>
     </div>



     <div className=''>
      <div>
        <span className='my_test'><img src={quatre} alt="" className=''/>Test Preparation <br /> & Tools</span>
        <p className='less_text'>Free Test Preparation Shop for test Preparation My Test Preparation</p>
      </div>

      <div>
        <span className='my_test'><img src={cinq} alt="" className=''/>Getting Ready <br />
for Test Day</span>
        <p className='less_text'>Identification Requirements
Test Center Procedures & Regulations</p>
      </div>

      <div>
        <span className='my_test'><img src={seize} alt="" className=''/>Order</span>
        <p className='less_text'>View My Orders</p>
      </div>
     </div>


     </div>
      </div>
      <Footer/>
    </div>
  )
}

export default StudentDashboard
