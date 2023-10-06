import React from 'react'
import './style.css'
import Navbar from '../../../components/containers/navbar/navbar'
import Footer from '../../../components/containers/footer/footer'
import crusader from '../../../assets/crusader.svg'
import whitehead from '../../../assets/whitehead.svg'
import greybody from '../../../assets/greybody.svg'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'

const Signup = () => {

  return (
   <div>
    <UnsignedNav/>
    <div className='black_page'>
      <div className='div'>

  <div className='sign_flex'>

<div>
  <div><img src={whitehead} alt="img" className='whitehead'/></div>
  <div><img src={greybody} alt="img" className='greybody'/></div>
  <div><img src={crusader} alt="img" className='crusader'/></div>
</div>


<div className='greta_div'>
  <div className='sign_opacity'>Sign up</div>
  <div className='dont'>Don’t have <br /> an account?</div>
  <div><button className='create_button'>Create account</button></div>
</div>

</div>
   <BlackFooter/>
     </div>
   </div>
    </div>
  )
}

export default Signup
