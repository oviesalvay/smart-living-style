import '../styles/join.css';
const Join = () =>{
    return (
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
    )
    }
    export default Join;