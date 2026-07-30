import './Trips.css';

function Trips() {
    return (
        <>
            <div className="TOuterBox"><div className="TBlur"></div></div>
            <div className="TScrool">

                {/* Card 1 */}
                <div className="card card1">
                    <div className="card-img-wrap"><img src="/src/Assets/images1.jpg" className="card-img TImg1" alt="Image" /></div>
                    <div className="card-body C1">
                        <span className="card-badge TCL1"><i className="bi bi-geo-alt-fill" id='ani'></i>Kerala</span>
                        <h1 className="card-title TCT1">Kerala Backwater Escape</h1>
                        <p className="card-tagline">Houseboats, wildlife, and coastal heritage</p>
                        <ul className="card-checklist TCTX1">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Alleppey houseboat cruise</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Kumarakom Bird Sanctuary</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Fort Kochi & Chinese fishing nets</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">Nature Lovers</span>
                            <span className="card-tag">Nature</span>
                            <span className="card-tag">Honeymooners</span>
                        </div>
                        <p className="card-route-row TCR1"><i className="bi bi-signpost-2"></i>Kochi→Alleppey→Kumarakom→Kochi</p>
                        <div className="card-stats">
                            <div className="card-stat TCD1">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>4N/5D</p>
                            </div>
                            <div className="card-stat TCP1">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹18,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB1">Book Now</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card card2">
                    <div className="card-img-wrap"><img src="/src/Assets/images2.jpg" className="card-img TImg2" alt="Tamil Nadu" /></div>
                    <div className="card-body C2">
                        <span className="card-badge TCL2"><i className="bi bi-geo-alt-fill" id='ani'></i>Tamil Nadu</span>
                        <h1 className="card-title TCT2">Tamil Nadu Temple Trail</h1>
                        <p className="card-tagline">Madurai & Thanjavur temple heritage</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Meenakshi Amman Temple</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Brihadeeswarar Temple</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Temple architecture</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">Heritage</span>
                            <span className="card-tag">Architecture</span>
                            <span className="card-tag">Pilgrimage</span>
                        </div>
                        <p className="card-route-row TCR2"><i className="bi bi-signpost-2"></i>Chennai→Madurai→Thanjavur→Chennai</p>
                        <div className="card-stats">
                            <div className="card-stat TCD2">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>5N/6D</p>
                            </div>
                            <div className="card-stat TCP2">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹20,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB2">Book Now</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card card3">
                    <div className="card-img-wrap"><img src="/src/Assets/images3.webp" className="card-img TImg3" alt="Karnataka" /></div>
                    <div className="card-body C3">
                        <span className="card-badge TCL3"><i className="bi bi-geo-alt-fill" id='ani'></i>Karnataka</span>
                        <h1 className="card-title TCT3">Karnataka Heritage & Hills</h1>
                        <p className="card-tagline">Royal palaces, coffee estates and scenic hill stations</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Mysuru Palace & Chamundi Hills</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Coorg coffee plantations</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Abbey Falls sightseeing</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">Heritage</span>
                            <span className="card-tag">Nature</span>
                            <span className="card-tag">Coffee Trails</span>
                        </div>
                        <p className="card-route-row TCR3"><i className="bi bi-signpost-2"></i>Bengaluru→Mysuru→Coorg→Bengaluru</p>
                        <div className="card-stats">
                            <div className="card-stat TCD3">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>5N/6D</p>
                            </div>
                            <div className="card-stat TCP3">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹22,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB3">Book Now</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card card4">
                    <div className="card-img-wrap"><img src="/src/Assets/images4.jpg" className="card-img TImg4" alt="Maharashtra" /></div>
                    <div className="card-body C4">
                        <span className="card-badge TCL4"><i className="bi bi-geo-alt-fill" id='ani'></i>Maharashtra</span>
                        <h1 className="card-title TCT4">Caves & Coast</h1>
                        <p className="card-tagline">Ancient caves and Mumbai's iconic coastline</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Ajanta & Ellora Caves</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Gateway of India</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Marine Drive</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">History</span>
                            <span className="card-tag">Architecture</span>
                        </div>
                        <p className="card-route-row TCR4"><i className="bi bi-signpost-2"></i>Mumbai→Aurangabad→Mumbai</p>
                        <div className="card-stats">
                            <div className="card-stat TCD4">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>3N/4D</p>
                            </div>
                            <div className="card-stat TCP4">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹15,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB4">Book Now</button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="card card5">
                    <div className="card-img-wrap">
                        <img src="/src/Assets/images5.jpg" className="card-img TImg5" alt="Rajasthan" />
                    </div>
                    <div className="card-body C5">
                        <span className="card-badge TCL5">
                            <i className="bi bi-geo-alt-fill" id='ani'></i>Rajasthan
                        </span>
                        <h1 className="card-title TCT5">Royal Circuit</h1>
                        <p className="card-tagline">Forts, palaces and royal heritage</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>City Palace & Lake Pichola</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Mehrangarh Fort</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Amber Fort, Hawa Mahal</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">Royal</span>
                            <span className="card-tag">Heritage</span>
                        </div>
                        <p className="card-route-row TCR5">
                            <i className="bi bi-signpost-2"></i>Udaipur→Jodhpur→Jaipur
                        </p>
                        <div className="card-stats">
                            <div className="card-stat TCD5">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>6N/7D</p>
                            </div>
                            <div className="card-stat TCP5">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹28,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB5">Book Now</button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="card card6">
                    <div className="card-img-wrap">
                        <img src="/src/Assets/images6.jpg" className="card-img TImg6" alt="Delhi Agra" />
                    </div>
                    <div className="card-body C6">
                        <span className="card-badge TCL6">
                            <i className="bi bi-geo-alt-fill" id='ani'></i>Delhi / Uttar Pradesh
                        </span>
                        <h1 className="card-title TCT6">Golden Circuit</h1>
                        <p className="card-tagline">India's iconic monuments</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Taj Mahal & Agra Fort</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Red Fort</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>India Gate & Qutub Minar</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">History</span>
                            <span className="card-tag">First Visit</span>
                        </div>
                        <p className="card-route-row TCR6">
                            <i className="bi bi-signpost-2"></i>Delhi→Agra→Delhi
                        </p>
                        <div className="card-stats">
                            <div className="card-stat TCD6">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>3N/4D</p>
                            </div>
                            <div className="card-stat TCP6">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹16,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB6">Book Now</button>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="card card7">
                    <div className="card-img-wrap">
                        <img src="/src/Assets/images7.webp" className="card-img TImg7" alt="Kashmir" />
                    </div>
                    <div className="card-body C7">
                        <span className="card-badge TCL7">
                            <i className="bi bi-geo-alt-fill" id='ani'></i>Jammu & Kashmir
                        </span>
                        <h1 className="card-title TCT7">Valley Retreat</h1>
                        <p className="card-tagline">Houseboats, snow and mountain valleys</p>
                        <ul className="card-checklist">
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Dal Lake Shikara</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Gulmarg Gondola</li>
                            <li className="card-check-item"><i class="bi bi-check-lg"></i>Betaab Valley</li>
                        </ul>
                        <div className="card-tags">
                            <span className="card-tag">Snow</span>
                            <span className="card-tag">Scenic</span>
                        </div>
                        <p className="card-route-row TCR7">
                            <i className="bi bi-signpost-2"></i>Srinagar→Gulmarg→Pahalgam→Srinagar
                        </p>
                        <div className="card-stats">
                            <div className="card-stat TCD7">
                                <p className="card-stat-label">Duration</p>
                                <p className="card-stat-value"><i className="bi bi-calendar-event"></i>5N/6D</p>
                            </div>
                            <div className="card-stat TCP7">
                                <p className="card-stat-label">Price</p>
                                <p className="card-stat-value"><i className="bi bi-tags"></i>₹35,000</p>
                            </div>
                        </div>
                        <button className="card-button TCB7">Book Now</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Trips;