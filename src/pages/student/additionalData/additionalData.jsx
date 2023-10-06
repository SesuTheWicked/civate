import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import greenSubtract from '../../../assets/greenSubtract.svg'
import './style.css'

const AdditionalData = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
      <div className='div'>
          <RegCarousel/>
          <div className='bluk2'>
            <form action="" className='form_class2'>

              <div className='fall3'>
                <label htmlFor="" className='labels'>Country of Birth: <br /><select name="" id="" className='inputs'>
                  <option value="select" className=''>Select</option>
                  </select>
                  </label>
                <label htmlFor="" className='labels'>Native Language: <br /><select name="" id="" className='inputs'>
                  <option value="select" className=''>Select</option>
                  </select>
                  </label>
              </div>


              <div className='right_side3'>
              <label htmlFor="" className='labels'>Country of Citizenship: <br /><select name="" id="" className='inputs'>
                <option value="select">Select</option>
                </select>
                </label>
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

export default AdditionalData
