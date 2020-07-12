import React from 'react'
import './Footer.css'

const Footer=()=> {
    return (
        <div style={{marginTop:'10px'}}>
             
            <footer className="footer-distributed">

			<div className="footer-left">

				<div>
					<img src={require('../../../assets/images/logo.png')}/>
				</div>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">About Us</a>
				
					<a href="#">Posts</a>
									
					<a href="#">Contact Us</a>
				</p>

				<p className="footer-company-name">Batham Technical © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<img src={require('../../../assets/icon/pin.png')} style={{verticalAlign:'middle'}}/>&nbsp;&nbsp;
					<p><span>713, Kesav bidi factory</span> Hathiyapour, Ghasmandi, Gwalior M.P.</p>
				</div>

				<div>
                <img src={require('../../../assets/icon/phone-call.png')}   style={{verticalAlign:'middle'}}/>&nbsp;&nbsp;
					<p>+91(9993266289)</p>
				</div>

				<div style={{marginTop:'10px'}}>
                <img src={require('../../../assets/icon/arroba.png')}   style={{verticalAlign:'middle'}}/>&nbsp;&nbsp;
					<p style={{color:'#fff'}}>ajaybatham306@gmail.com</p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					At <strong>Batham Technical</strong>, we develop innovative and creative products and services that provide total communication 
                    and information solutions. Among a plethora of services, web design and development.
				</p>

				<div className="footer-icons">

                <img src={require('../../../assets/icon/Ffacebook.png')}/>&nbsp;&nbsp;
                <img src={require('../../../assets/icon/ftwitter.png')}/>&nbsp;&nbsp;
                <img src={require('../../../assets/icon/footerlinkedin.png')}/>&nbsp;&nbsp;
                <img src={require('../../../assets/icon/fgithub.png')} style={{borderRadius:'2px'}}/>&nbsp;&nbsp;
				
                
				</div>

			</div>

		</footer>
        </div>
    )
}

export default Footer;
