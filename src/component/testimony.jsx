import '../styles/testimony.css';
import Review from "../assest/Review.png";
import jane from "../assest/jane.png";
import robert from "../assest/robert.png";
import lesile from "../assest/lesile.png";
 const Testimony = () =>{
    return(
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
            )
 }
 export default Testimony;