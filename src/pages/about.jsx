
import Logo from '../assest/Logo.png';
import  '../styles/about.css';
import eclipse from '../assest/eclipse.png';
import frame from '../assest/frame.png';
import aboutimage from '../assest/aboutimage.png';
import Vector from '../assest/Vector.png';
import Vectors from '../assest/Vectors.png';
import Vectored from '../assest/Vectored.png';
import Frames from '../assest/Frames.png';
const About = () => {
    return (
        <div>
        <section className='introduction-to'>
        <div className='intro-content'>
        <img src={Logo}alt="" /> 
        <div>
        <span></span>
        <h4>User Interface Designer</h4> 
        </div>
<p>I’m UI/UX designer in lucknow , and I’m  very passionate 
and dedicated to my work..</p>
        <img src={frame}alt=""/>
        </div> 
        <div className='image'>
        <img src={eclipse} alt=""/>
        </div>
        </section>
        <section className='about-me'>
<h2>About Me</h2>
<p>My Introduction</p>
<div className='about'>
<img src={aboutimage}/>
<div className="img-container">
<div className='about-images'>
    <div>
        <img src={Vector} alt=""/>
        <h6>Experience</h6>
        <p>1 + years</p>
    </div>
    <div>
<img src={Vectors} alt=""/>
<h6>Completed</h6>
<p>10 + projects</p>
    </div>
    <div>
        <img src={Vectored} alt=""/>
        <h6>Supports</h6>
        <p>Online 24/7</p>
    </div>
</div>
<p>UI/UX designer , I create web pages UI /UX userinterface ,
I have years of experience and many clients are happy with 
the projects carried out.</p>
<img src={Frames} alt=""/>
</div>
</div>
</section>
        </div>
    )
}
export default About;