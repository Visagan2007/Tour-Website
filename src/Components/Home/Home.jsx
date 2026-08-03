import './Home.css';
import { NavLink } from 'react-router-dom';
import { TbMessagesFilled } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

function Home() {
    return (
        <>
            <div className="hero">
                <div className="sun"></div>
                <div className="leaf" style={{ left: '15%', animationDelay: '0s' }}></div>
                <div className="leaf" style={{ left: '40%', animationDelay: '4s' }}></div>
                <div className="leaf" style={{ left: '65%', animationDelay: '8s' }}></div>
                <div className="leaf" style={{ left: '80%', animationDelay: '2s' }}></div>
                <div className="leaf" style={{ left: '25%', animationDelay: '6s' }}></div>
                <div className="leaf" style={{ left: '55%', animationDelay: '10s' }}></div>
                <div className="leaf" style={{ left: '70%', animationDelay: '12s' }}></div>
                <div className="hero-content">
                    <div className="eyebrow">thendral, noun — a gentle breeze</div>
                    <h1>Wherever the Breeze<br />Takes You</h1>
                    <p className="sub">Travel planned around real conversations, not templates. Heritage trails, hidden gems, and the details handled — so you can just show up.</p>
                    <div className="ctas">
                        <NavLink to='/trips' end className='btn-primary'>Explore Trips</NavLink>
                        <NavLink to='/contact' className='btn-outline'>Plan My Trip</NavLink>
                    </div>
                </div>
            </div>

            <div className="why">
                <div className="section-head">
                    <div className="kicker">Why Thendral</div>
                    <h2>Travel That Feels Personal</h2>
                </div>
                <div className="why-grid">
                    <div className="why-card">
                        <i><TbMessagesFilled /></i>
                        <h3>Real Conversations First</h3>
                        <p>Every itinerary starts with a chat about what you actually want — not a fixed package.</p>
                    </div>
                    <div className="why-card">
                        <i><FaMapLocationDot /></i>
                        <h3>Local Roots, Real Knowledge</h3>
                        <p>From hidden gems to iconic landmarks, we've walked the ground we send you to.</p>
                    </div>
                    <div className="why-card">
                        <i><FaHandHoldingHeart /></i>
                        <h3>Details, Handled</h3>
                        <p>Stays, transport, and backup plans sorted — you focus on the experience, not logistics.</p>
                    </div>
                </div>
            </div>

            <div className="trips">
                <div className="section-head">
                    <div className="kicker">Featured Journeys</div>
                    <h2>Where Would You Like to Go?</h2>
                </div>
                <div className="trip-grid">
                    <div className="trip-card">
                        <div className="trip-img trip-img1"><span className="trip-tag">Kerala</span></div>
                        <div className="trip-body">
                            <h3>Kerala Backwater Escape</h3>
                            <p>Houseboats, wildlife, and coastal heritage</p>
                            <div className="trip-foot"><span className="trip-price">₹18,000</span><NavLink to='/trips'>Details →</NavLink></div>
                        </div>
                    </div>
                    <div className="trip-card">
                        <div className="trip-img trip-img2"><span className="trip-tag">Tamil Nadu</span></div>
                        <div className="trip-body">
                            <h3>Tamil Nadu Temple Trail</h3>
                            <p>Madurai & Thanjavur temple heritage</p>
                            <div className="trip-foot"><span className="trip-price">₹20,000</span><NavLink to='/trips'>Details →</NavLink></div>
                        </div>
                    </div>
                    <div className="trip-card">
                        <div className="trip-img trip-img3"><span className="trip-tag">Karnataka</span></div>
                        <div className="trip-body">
                            <h3>Karnataka Heritage & Hills</h3>
                            <p>Palaces, coffee estates, and hill stations</p>
                            <div className="trip-foot"><span className="trip-price">₹22,000</span><NavLink to='/trips'>Details →</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="trips-cta"><NavLink to='/trips' end className='btn-primary'>View All Trips</NavLink></div>
            </div>

            <div className="testimonial">
                <i className="bi bi-quote quote-mark"></i>
                <p>"Thendral didn't just book our trip — they listened first. Every stop felt like it was made for us."</p>
                <div className="who">Priya & Arjun <span>— Coorg trip</span></div>
            </div>
        </>
    )
}
export default Home;