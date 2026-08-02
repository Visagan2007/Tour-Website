import { useEffect, useRef } from 'react';
import './AboutUs.css';

const whyUsItems = [
    {
        title: 'Local, Tamil-speaking guides',
        text: 'Our guides know the culture and language of the places we take you, so nothing gets lost between the destination and your experience.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" />
                <path d="M7.5 9.5h9M7.5 12.5h5.5" />
            </svg>
        ),
    },
    {
        title: 'Itineraries built around you',
        text: 'No fixed templates. Every trip is shaped around what you want to see, how you want to travel, and the pace that suits you.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M15 9l-2.2 4.2L9 15l2.2-4.2L15 9Z" />
            </svg>
        ),
    },
    {
        title: 'Care in every detail',
        text: 'From transport to stays to the small logistics travelers rarely think about, we handle it so your trip runs smoothly from start to finish.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3.5 5.5 6v5.2c0 4.4 2.9 7.3 6.5 8.8 3.6-1.5 6.5-4.4 6.5-8.8V6L12 3.5Z" />
                <path d="M9 12l2 2 4-4.3" />
            </svg>
        ),
    },
];

const stats = [
    { value: '8+', label: 'Years of experience' },
    { value: '240+', label: 'Trips organized' },
    { value: '3,500+', label: 'Happy travelers' },
    { value: '18', label: 'Destinations covered' },
];

function BreezeDivider() {
    return (
        <svg className="breeze-divider" viewBox="0 0 360 20" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 10 C 30 1, 60 19, 90 10 S 150 1, 180 10 S 240 19, 270 10 S 330 1, 360 10" />
        </svg>
    );
}

function AboutUs() {
    const revealRefs = useRef([]);

    const registerReveal = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        const targets = revealRefs.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            <div className="about-backdrop">
                <div className="about-backdrop-overlay"></div>
            </div>

            <div className="about-content">
                <section className="about-hero">
                    <h1 ref={registerReveal} className="section-title reveal">Our Story</h1>
                    <BreezeDivider />
                    <p ref={registerReveal} className="section-lead reveal">
                        Thendral Tours began with a simple idea — that travel should feel personal, not packaged. Named after the thendral (gentle breeze) that carries you somewhere new, we started as a small team passionate about showing travelers the places we know and love, from hidden gems to iconic landmarks. What sets us apart is how we plan: every itinerary is built around real conversations with our travelers, not a one-size-fits-all template. Whether it's a heritage trip through Tamil Nadu or an adventure further afield, we handle the details so you can focus on the experience. Today, Thendral Tours continues to grow the same way it started — one thoughtfully planned trip, and one happy traveler, at a time.
                    </p>
                </section>

                <section className="about-why">
                    <h2 ref={registerReveal} className="section-title reveal">Why Travel With Us</h2>
                    <BreezeDivider />
                    <dl className="why-list">
                        {whyUsItems.map((item) => (
                            <div className="why-item reveal" ref={registerReveal} key={item.title}>
                                <span className="why-icon">{item.icon}</span>
                                <dt className="why-item-title">{item.title}</dt>
                                <dd className="why-item-text">{item.text}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section ref={registerReveal} className="stats reveal">
                    {stats.map((stat) => (
                        <div className="stat" key={stat.label}>
                            <p className="stat-value">{stat.value}</p>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default AboutUs;