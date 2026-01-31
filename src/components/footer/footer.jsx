import React from 'react'
import './footer.css'
import linkedin from '../asset/linkedin.png'
import insgram from '../asset/instagram_icon.png'
import whatsapp from '../asset/whatsapp_icon.png'
function Footer() {
    return (
        <div className='footer'>

            <div className="footer_first">
                <img src="https://img.icons8.com/?id=4LlytcnB4ucJ&format=png&size=64" alt="Luxe Store Logo" />
                <div className="news_email">

                    <h4>Get Exclusive Offers On Your Email</h4>

                    <div className="footer_main">
                        <input type="text" placeholder='Enter your email'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            <ul>
                <li>About Us</li>
                <li>More Projects</li>
                <li>My Resume</li>
                <li>15% off</li>
            </ul>
            <div className="contact_us">
                <a href="#linkedin" aria-label="LinkedIn"> <img src={linkedin} alt="LinkedIn" /></a>
                <a href="#instagram" aria-label="Instagram"> <img src={insgram} alt="Instagram" /></a>
                <a href="#whatsapp" aria-label="WhatsApp"> <img src={whatsapp} alt="WhatsApp" /></a>
            </div>

            <div className="copyright">
                <hr />
                <h4>&copy; Copyright@2024 - All Rights Reserved</h4>
            </div>
        </div>
    )
}

export default Footer