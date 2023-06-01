import { useState } from 'react';
import industrial from "../assest/industrial.png"
 import agriculture from "../assest/agricuture.jpg";
 import residential from "../assest/residential.jpg";
const Deals = () => {
    const [activeTab, setActiveTab] = useState(1)
    return(
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
                            <img src={residential} alt="" />
                                </figure>
                                <figure>
                            <img src={agriculture} alt="" />
                                </figure>
                                <figure>
                            <img src={industrial} alt="" />
                                </figure>
                            </div>
                <div>
                </div>
            </section> 
    )
}
export default Deals;