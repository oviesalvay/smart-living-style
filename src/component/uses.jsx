import track from "../assest/track.png";
 import Ellipse from "../assest/Ellipse.svg";
 import instant from "../assest/instant.png";
 import research from "../assest/research.png";
 import eclipsed from "../assest/eclipsed.svg";
const Uses= () =>{
    return(

<section className="how-it-works">
                <h2>How it works?</h2>
                <div className="iconed" alt="">
                    <div className=''>
                        <div className='research'>
                <img src={research}  alt=""/>
                <img src={eclipsed} id='ess'/>
                    </div>
                <div>
                        <h4>Research Suburbs</h4>
                        <p>Wonder twenty hunted and put income set desire expect. Am cottage calling.</p>
                    </div>
                    </div>
                    <div className=''>
                        <div className='research'>
                            <img src={Ellipse} id="ess" alt=""/>
                <img src={track} alt=""/>
                <img src={Ellipse} id='ess'/>
                </div>
                    <div>
                <h4>Instant Valuation</h4>
                <p>Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.</p>
                        </div>
                        </div>
                        <div className=''>
                        <div className='research'>
                            <img src={eclipsed} id="ess" alt=""/>
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
    )
}
export default Uses;