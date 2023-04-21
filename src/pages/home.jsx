import '../styles/home.css';
import Title from '../component/title';
 import HeaderImage from "../assest/HeaderImage.png";
 import buzz from "../assest/buzz.svg";
 import microsoft from "../assest/microsoft.svg";
 import uber from "../assest/uber.svg";
 import gucc from "../assest/gucc.svg";
 import img from "../assest/img.svg";
 import chase from "../assest/chase.svg";
 import track from "../assest/track.png";
 import Ellipse from "../assest/Ellipse.svg";
 import instant from "../assest/instant.png";
 import research from "../assest/research.png";
 import eclipsed from "../assest/eclipsed.svg";
 import industrial from "../assest/industrial.png"
 import agriculture from "../assest/agricuture.jpg";
 import residential from "../assest/residential.jpg";
 import imageheader from "../assest/imageheader.png";
 import featureimage from "../assest/featureimage.svg";
 import Review from "../assest/Review.png";
 import jane from "../assest/jane.png";
 import robert from "../assest/robert.png";
 import lesile from "../assest/lesile.png";
 import ecc from "../assest/ecc.svg";
 import Union from "../assest/Union.svg";
 import { useState } from 'react';

const Home = () =>{

    const [activeTab, setActiveTab] = useState(1)
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
            <section className="how-it-works">
                <h2>How it works?</h2>
                <div className="iconed">
                    <div className=''>
                        <div className='research'>
                <img src={research} />
                <img src={eclipsed} id='ess'/>
                    </div>
                <div>
                        <h4>Research Suburbs</h4>
                        <p>Wonder twenty hunted and put income set desire expect. Am cottage calling.</p>
                    </div>
                    </div>
                    <div className=''>
                        <div className='research'>
                            <img src={Ellipse} id="ess"/>
                <img src={track} />
                <img src={Ellipse} id='ess'/>
                </div>
                    <div>
                <h4>Instant Valuation</h4>
                <p>Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.</p>
                        </div>
                        </div>
                        <div className=''>
                        <div className='research'>
                            <img src={eclipsed} id="ess"/>
                <img src={instant} />
                </div>
                <div>
                            <h4>Track Property</h4>
                            <p>Moderate children at of outweigh it. 
                                Unsatiable it considered invitation he travelling insensible.</p>
                                </div>
                        </div>
                </div>
            </section>
            <section className="best-deal">
                <div className="Deals">
                    <div>
                    <h3>Best Real Estate Deals</h3>
                    <p>
                        Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.
                    </p>
                           </div>
                    <button className="btn-send">View All Property</button>
                            </div>
                    <div className="properties">
                        <div className='property'>
                            <h6 className={activeTab === 1 ? 'red' : ''} onClick={() => setActiveTab(1)}>Resident Property</h6>
                        </div>
                        <div>
                            <h6 className={activeTab ===2 ? 'red' : ''} onClick={() => setActiveTab(2)}>Commercial Property</h6>
                        </div>
                        <div>
                            <h6 className={activeTab === 3 ? 'red' : ''} onClick={() => setActiveTab(3)}>Agriculture Property</h6>
                        </div>
                        <div>
                            <h6 className={activeTab ===4 ? 'red' : ''} onClick={() => setActiveTab(4)}>Industrial Property</h6>
                        </div>
                            </div>
                            <div className='property-content'>
                                <figure>   
                            <img src={residential} />
                                </figure>
                                <figure>
                            <img src={agriculture} />
                                </figure>
                                <figure>
                            <img src={industrial} />
                                </figure>
                            </div>
                <div>
                </div>
            </section>
            <section className="">
                <h2>Featured Listing of the Week</h2>
                <div className='feature'>
                    <div className="feature-content">
                        <figure>
                        <img src={imageheader} />
                        </figure>
                        <figure>
                        <img src={featureimage} id='featured'/>
                        </figure>
                    </div>
                    <div className="feature-text">
                        <h4>The and collecting for the <br />motionless difficulty son.</h4>
                        <p>Conveying or northward offending admitting perfectly my.
                            Colonel gravity get thought fat smiling add but difficult situations.</p>
                        <div className="budget">
                            <div>
                                <h6>Budget</h6>
                                <p>1200 </p>
                            </div>
                            <div>
                                <h6>size</h6>
                                <p>Confident</p>
                            </div>
                            <div>
                                <h6>Type</h6>
                                <p>Office</p>
                            </div>
                        </div>
                        <div className="budget">
                            <div>
                                <h6>Status</h6>
                                <p>Done</p>
                            </div>
                            <div>
                                <h6>Location</h6>
                                <p>Swizerland</p>
                            </div>
                            <div>
                                <h6>Flat</h6>
                                <p>8 Room</p>
                            </div>
                        </div>
                        <button className="btn-book">YES! I WANT BOOK “OFFICE PACKAGE”</button>
                    </div>
                </div>
            </section><section className="across-the-globe">
                <h3>Loved by businesses, and<br /> individuals across the globe.</h3>
                <div className="card">
                    <div className="card-content">
                        <img src={Review} />
                        <p>Moderate children at of outweigh it.
                            Unsatiable it considered invitation he travelling insensible.
                            Consulted admitting oh mr up as described.</p>
                            <div className='jane'>
                        <div>
                            <img src={jane} />
                        </div>
                        <div>
                            <h6>Jane Cooper</h6>
                            Los Angeles, CA
                        </div>
                    </div>
                    </div>
                    <div className="card-content">
                        <img src={Review} />
                        <p>The and collecting motionless difficulty son.
                            His hearing staying ten colonel met.
                            Sex drew six easy four dear cold</p>
                            <div className='jane'>
                        <div>
                            <img src={robert} />
                        </div>
                        <div>
                            <h6>Robert Fox</h6>
                            New York City, NY
                        </div>
                    </div>
                    </div>
                    <div className="card-content">
                        <img src={Review} />
                        <p>Sociable on as carriage my position weddings raillery consider.
                            Peculiar trifling absolute and wandered vicinity property yet.</p>
                            <div className='jane'>
                        <div>
                            <img src={lesile} />
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
                <img src={img} />
                <img src={ecc} />
                <img src={Union} />
                <img src={uber} />
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