import imageheader from "../assest/imageheader.png";
 import featureimage from "../assest/featureimage.svg";
const Feature= () =>{
    return(
        <section className="">
                <h2>Featured Listing of the Week</h2>
                <div className='feature'>
                    <div className="feature-content">
                        <figure>
                        <img src={imageheader} />
                        </figure>
                        <figure>
                        <img src={featureimage} id='featured' alt=""/>
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
                </section>
    )
}
export default Feature;