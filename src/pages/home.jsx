import '../styles/home.css';
import Title from '../component/title';
import Deals from '../component/deals';
import Uses from '../component/uses';
import Feature from '../component/feature';
 import HeaderImage from "../assest/HeaderImage.png";
 import buzz from "../assest/buzz.svg";
 import microsoft from "../assest/microsoft.svg";
 import uber from "../assest/uber.svg";
 import gucc from "../assest/gucc.svg";
 import img from "../assest/img.svg";
 import chase from "../assest/chase.svg";
 import Review from "../assest/Review.png";
 import jane from "../assest/jane.png";
 import robert from "../assest/robert.png";
 import lesile from "../assest/lesile.png";
 import ecc from "../assest/ecc.svg";
 import Union from "../assest/Union.svg";


const Home = () =>{

 
    return (
        <>
        <div className="introduction">
            <div className="intro">
                <h5>RESIDENTIAL & OFFICE SPACES</h5>
                <Title />
                <p>
                    Much did had call new drew that kept. Limits expect wonder law she.
                    Now has you views woman noisy match money rooms.
                </p>
                <div className='input-details'>
                    <form>
                        <input type="text" id="text" placeholder="Enter Zipcode to search properties" />
                    </form>
                        <button className="btn">Search Now!</button>
                </div>
            </div>
            <figure className="Header-image">
                <img src={HeaderImage}  />
            </figure>
        </div>
        <section className="amazing-partners">
                <h4>Our Amazing Partners</h4>
                <div>
                <img src={buzz} />
                <img src={microsoft } />
                <img src={uber} />
                <img src={gucc} />
                <img src={img } />
                <img src={chase} />
                </div>
            </section>
            <Uses />
            <Deals />
            <Feature/>
        <section className="across-the-globe">
                <h3>Loved by businesses, and<br /> individuals across the globe.</h3>
                <div className="card">
                    <div className="card-content">
                        <img src={Review} alt=""/>
                        <p>Moderate children at of outweigh it.
                            Unsatiable it considered invitation he travelling insensible.
                            Consulted admitting oh mr up as described.</p>
                            <div className='jane'>
                        <div>
                            <img src={jane} alt=""/>
                        </div>
                        <div>
                            <h6>Jane Cooper</h6>
                            Los Angeles, CA
                        </div>
                    </div>
                    </div>
                    <div className="card-content">
                        <img src={Review} alt=""/>
                        <p>The and collecting motionless difficulty son.
                            His hearing staying ten colonel met.
                            Sex drew six easy four dear cold</p>
                            <div className='jane'>
                        <div>
                            <img src={robert}alt="" />
                        </div>
                        <div>
                            <h6>Robert Fox</h6>
                            New York City, NY
                        </div>
                    </div>
                    </div>
                    <div className="card-content">
                        <img src={Review} alt=""/>
                        <p>Sociable on as carriage my position weddings raillery consider.
                            Peculiar trifling absolute and wandered vicinity property yet.</p>
                            <div className='jane'>
                        <div>
                            <img src={lesile} alt=""/>
                        </div>
                        <div>
                            <h6>Leslie Alexander</h6>
                            Buffalo, NJ
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="images">
                <img src={img} alt="" />
                <img src={ecc} alt="" />
                <img src={Union} alt=""/>
                <img src={uber} alt=""/>
                <img src={microsoft} />
                <p>Give us a Call +91 123-456-7890 and we can set you up, or<a href="">check our pricing plans</a></p>
            </section>
            <section className="newsletter">
                <h2>Get Our Newsletter</h2>
                <h6>To join the worldwide community</h6>
                <div className='newsletter-input'>
                    <form>
                        <input type="text" name="email" placeholder="Type your Email Address" />
                        {/* example@gmail.com */}
                    </form>
                    <div>
                        <button className='btn-send'>Send Now</button>
                    </div>
                </div>
                <span></span>
            </section>
            </>
            )
            }
            export default Home