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
      <div className='bold_dashboard'><img src={trois} alt="img" className='img_set'/>My Dashboard</div>
      <br />
      <div className='mon'><a href="/" className='my_test'>My Tests</a>   <a href="/" className=''>view all Tests</a></div>
      <div className='block_functions'>

        <div className=''><a href="/" className='reg_find'>Register/Find Test Centers</a></div>
        <div className=''><img src="" alt="" />Upcoming Tests</div>
        <div className=''>No Test For now!</div>
        <div className=''><img src="" alt="" />Scores</div>
        <div><a href="/" className=''>Press to see the list</a></div>
      </div>

     </div>



     <div className=''>
      <div>
        <span className='my_test'><img src={quatre} alt="" className='img_set'/>Test Preparation <br /> & Tools</span>
        <p className='less_text'>Free Test Preparation <br /> Shop for test Preparation <br /> My Test Preparation</p>
      </div>

      <div>
        <span className='my_test'><img src={cinq} alt="" className='img_set'/>Getting Ready <br />
for Test Day</span>
        <p className='less_text'>Identification Requirements <br />
Test Center Procedures & <br /> Regulations</p>
      </div>

      <div>
        <span className='my_test'><img src={seize} alt="" className='img_set'/>Order</span>
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
