import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import greenSubtract from '../../../assets/greenSubtract.svg'
import './style.css'




const AdditionalInformation = () => {
  return (
    <div>
        <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='bluk_big'>
         <form action="" className='form_class1'>
          <div className='fall1'>
          <label htmlFor="" className='labels'>Institution Details: <br /><input type="text" className='inputs' placeholder='Name'/></label>
          <label htmlFor="" className='labels'>Acronym: <br /><input type="text" className='inputs' placeholder='Acronym' /></label>
          <label htmlFor="" className='labels'>Biography: Max 500 words: <br />
          <textarea name="" id="" cols="60" rows="80" className='inputs1' placeholder=''></textarea></label>
          </div>

          <div className='right_side1'>
            <label htmlFor="" className='labels'>Type of University: <br />
           <input type="text" className='inputs' />
              </label>
              <label htmlFor="" className='labels'>Location: <br /><input type="text" placeholder='' className='inputs'/></label>
              <label htmlFor="" className='labels'>Linkedin: <br /><input type="text" placeholder='' className='inputs' /></label>
              <label htmlFor="" className='labels'>Facebook: <br /><input type="text" placeholder='' className='inputs'/></label>
              <label htmlFor="" className='labels'>Instagram: <br /><input type="text" placeholder='' className='inputs' /></label>
              <label htmlFor="" className='labels'>Twitter: <br /><input type="text" placeholder='' className='inputs'/></label>

              <div className='submit_section'>
        <button type='submit' className='next_big'>Next</button>
        <img src={greenSubtract} alt="img" className='subtract_img'/>
      </div>
          </div>
         
         </form>
          </div>

<BlackFooter/>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInformation
