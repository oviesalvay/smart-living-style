import  "../styles/service.css";
import web from "../assest/web.png";
import arrow from "../assest/arrow.svg";
import arrowed from "../assest/arrowed.svg";
import arrows from "../assest/arrows.svg";
const Service = () => {
    return(
        <div>
            <section className="services">
                <h2>Services</h2>
                <p>What i offer</p>
            <div className="serve">
                <div className="serve-words">
                    <img src={web}/>
            <h4>Web Designer</h4>
<div className="serve-content">
    <div>
<p>view more </p>
</div>
<div className="content">
<img src={arrow}/>
</div>
</div>
                </div>
            <div className="serve-words">
                <img src={arrowed}/>
                <h4>UI/UX Designer</h4>
                <div className="serve-content">
                    <div>
                    <p>view more </p>
                    </div>
                <div className="content">
                    <img src={arrow}/>
                </div>
                </div>
            </div>
            <div className="serve-words">
                <img src={arrows}/>
                <h4>Branding Designer</h4>
                <div className="serve-content">
                    <div>
                        <p>View more</p>
                    </div>
                        <div className="content">
                            <img src={arrow}/>
                        </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    )
}
export default Service;