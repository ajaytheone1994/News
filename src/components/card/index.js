import React from 'react'

const ImgMediaCard=()=> {
  return (
    <div>
       <div style={{display:'flex', marginLeft:'auto', marginRight:'auto'}}>
      <div>
        <img src={require('../../assets/images/corona.jpg')} height="250"/>
      </div>
      <div style={{width:'450px'}}>
        <div>
          <h2>Coronavirus cases in India cross 50,000 after doubling in 11 days</h2>
          <p>short by Daisy Mowke / 09:12 am on 07 May 2020,Thursday</p>
          <div style={{textAlign:'justify'}}>
          The Ministry of Health and Family Welfare announced on Thursday that the total number of coronavirus cases in India has risen to 52,952 after doubling in 11 days. Meanwhile, the death toll due to coronavirus in India has reached 1,783. Out of the total 
          cases, 35,902 cases are active, while 15,267 patients have been cured, discharged or migrated
          </div>
          <p>read more</p>
        </div>
      </div>
       </div>
    </div>
  )
}

export default ImgMediaCard;
