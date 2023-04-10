import Title from '../component/title';
 import HeaderImage from "../assest/HeaderImage.png";
 import buzz from "../assest/buzz.png";
 import microsoft from "../assest/microsoft.png";
 import uber from "../assest/uber.png";
 import gucc from "../assest/gucc.png";
 import img from "../assest/img.png";
 import chase from "../assest/chase.png";
 import track from "../assest/track.png";
 import instant from "../assest/instant.png";
 import research from "../assest/research.png";
 import imageheader from "../assest/imageheader.png";
 import Review from "../assest/Review.png";
 import jane from "../assest/jane.png";
 import robert from "../assest/robert.png";
 import lesile from "../assest/lesile.png";
 import ecc from "../assest/ecc.png";
 import Union from "../assest/Union.png";
 import Logo from "../assest/Logo.png";
 import facebook from "../assest/facebook.png";
 import twitter from "../assest/twitter.png";
 import youtube from "../assest/youtube.png";
 import linkedin from "../assest/linkedin.png";
 import instagram from "../assest/instagram.png";
//  import sky from "../assest/sky.png";
import '../styles/home.css';
import Card from '../component/card';


const Home = () =>{
    return (
        <main>
    {/* <div> */}
<div className="introduction">
    <div className="intro">
     <Title/>
    <p>
    Much did had call new drew that kept. Limits expect wonder law she. 
    Now has you views woman noisy match money rooms.
    </p>
    <form>
       <input type="text" id="text" placeholder="Enter Zipcode to search properties"></input>
    </form>
    </div>
    <div className="Header-image">
    <img src={HeaderImage}/>
    </div>
    </div>
     <section className="amazing-partners"> 
     <h4>Our Amazing Partners</h4>
    <img src={buzz}/>
    <img src={microsoft}/>
    <img src={uber}/>
    <img src={gucc}/>
    <img src={img}/>
    <img src={chase}/>
</section>
<section className="how-it-works">
    <h2>How it works?</h2>
    <img src={research}/>
    <img src={track}/>
    <img src={instant}/>
    </section>
<section className="best-deal">
        <div className="Deals">
        <h3>Best Real Estate Deals</h3>
        <p>
        Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.
        </p>
        <div className="properties">
            <div>
        <p>Residential Property</p>
        {/* <img src={sky}/> */}
        </div>
        <div>
        <p>Commercial Property</p>
        </div>
<div>
        <p>Agriculture Property</p>
        </div>
        <div>
        <p>Industrial Property</p>
        </div>
        </div>
        </div>
        <div>
        <button class="btn">View All Property</button>
        </div> 
    </section>
    <section className="feature">
        <div>
        <h2>Featured Listing of the Week</h2>
        <img src={imageheader}/>
        </div>
        <div className="feature-text">
            <h5>The and collecting for the motionless difficulty son.</h5>
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
    </section>
    <section className="across-the-globe">
        <h3>Loved by businesses, and<br/> individuals across the globe.</h3>
        <div className="card">
            <div className="card-content">
            <img src={Review}/>
            <p>Moderate children at of outweigh it. 
                Unsatiable it considered invitation he travelling insensible. 
                Consulted admitting oh mr up as described.</p>
                <div>
                    <img src={jane}/>
                </div>
                <div>
                    <h6>Jane Cooper</h6>
                    <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="card-content">
            <img src={Review}/>
            <p>The and collecting motionless difficulty son. 
                His hearing staying ten colonel met. 
                Sex drew six easy four dear cold</p>
                <div>
                    <img src={robert}/>
                </div>
                <div>
                <h6>Robert Fox</h6>
                    <p>New York City, NY</p>
                    </div>
</div>
<div className="card-content">
            <img src={Review}/>
            <p>Sociable on as carriage my position weddings raillery consider.  
                 Peculiar trifling absolute and wandered vicinity property yet.</p>
                 <div>
                    <img src={lesile}/>
                 </div>
                 <div>
                    <h6>Leslie Alexander</h6>
                    <p>Buffalo, NJ</p>
                 </div>
</div>
</div>
    </section>
    <section className="images">
        <div className='icon'>
        <img src={img}/>
        <img src={ecc}/>
        <img src={Union}/>
        <img src={uber}/>
        <img src={microsoft}/>
        </div>
        <div className='text'>
        <p>Give us a Call +91 123-456-7890 and we can set you up, or<a href="">check our pricing plans</a></p>
        </div>
    </section>
    <section className="newsletter">
        <h2>Get Our Newsletter</h2>
        <p>To join the worldwide community</p>
        <form>
            <input type="text" name="email" placeholder="Type your Email Address"/>
        </form>
    </section>
        
    <footer>
        <div className="footer-contents">
<img src={Logo}/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
            <h6>Follow Us</h6>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={linkedin}/>
            <img src={youtube}/>
<img src={instagram}/>
        </div>
        <div className="recent-project">

        </div>
        </div>
    </footer>
{/* </div> */}
</main>

    )
}
export default Home;
