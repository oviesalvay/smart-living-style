import '../styles/home.css';
import Title from '../component/title';
import Deals from '../component/deals';
import Uses from '../component/uses';
import Feature from '../component/feature';
import Testimony from '../component/testimony';
import Join from '../component/join'
 import HeaderImage from "../assest/HeaderImage.png";
 import buzz from "../assest/buzz.svg";
 import microsoft from "../assest/microsoft.svg";
 import uber from "../assest/uber.svg";
 import gucc from "../assest/gucc.svg";
 import img from "../assest/img.svg";
 import chase from "../assest/chase.svg";
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
                <img src={HeaderImage}  alt=""/>
            </figure>
        </div>
        <section className="amazing-partners">
                <h4>Our Amazing Partners</h4>
                <div>
                <img src={buzz} alt='buzz'/>
                <img src={microsoft} alt='microsoft'/>
                <img src={uber}  alt='uber'/>
                <img src={gucc} alt='gucc'/>
                <img src={img } alt='img'/>
                <img src={chase} alt='chase'/>
                </div>
            </section>
            <Uses />
            <Deals />
            <Feature/>
        <Testimony />
            <section className="images">
                <img src={img} alt="" />
                <img src={ecc} alt="" />
                <img src={Union} alt=""/>
                <img src={uber} alt=""/>
                <img src={microsoft} alt=""/>
                <p>Give us a Call +91 123-456-7890 and we can set you up, or<a href="#plans">check our pricing plans</a></p>
            </section>
            <Join />
            </>
            )
            }
            export default Home