import '../styles/footer.css'
import React from 'react'
 import Logo from "../assest/Logo.png";
 import facebook from "../assest/facebook.png";
 import twitter from "../assest/twitter.png";
 import youtube from "../assest/youtube.png";
 import linkedin from "../assest/linkedin.png";
 import instagram from "../assest/instagram.png";
import rectangle from "../assest/rectangle.png";
import Rectangled from "../assest/Rectangled.png";
import rectangular from "../assest/rectangular.png";
const Footer = () => {
    return(
      <div>
        <footer>
        <section className="footer-contents">
                    <div>
                        <img src={Logo} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className=''>
                            <h6>Follow Us</h6>
                            <div className="social-icon">
                                <img src={facebook} />
                                <img src={twitter} />
                                <img src={linkedin} />
                                <img src={youtube} />
                                <img src={instagram} />
                            </div>
                        </div>
                    </div>
                    <div className="recent-project">
                        <h5>Recent Projects</h5>
                        <div>
                            <img src={rectangle} />
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.rem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <img src={Rectangled} />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div className='Location'>
                        <h5>Campus Location</h5>
                        <img src={rectangular} />
                        <div>
                            <h5>Contact Info</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h6>Phone : (+91) 1234567890</h6>
                            <h6>Email : abcd@domain.com</h6>
                            <h6>Website : abcd@domain.in</h6>
                        </div>
                    </div>
                </section>
      </footer>
      </div> 
    );
};
export default Footer;