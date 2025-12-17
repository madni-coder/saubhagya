import React from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaLocationDot,
} from "react-icons/fa6";
import "./App.css";

const steps = [
    {
        title: "Create Profile",
        description:
            "Contact Us  for free and create your detailed profile with photos and preferences.",
        badge: "1",
    },
    {
        title: "Search & Match",
        description:
            "Browse verified profiles using our smart filters and get personalized matches daily.",
        badge: "2",
    },
    {
        title: "Express Interest",
        description:
            "Like profiles you're interested in and see who's interested in you.",
        badge: "3",
    },
    {
        title: "Connect & Meet",
        description:
            "Start conversations, get to know each other, and plan to meet in person.",
        badge: "4",
    },
];

const features = [
    "100% Verified Profiles",
    "Privacy Control",
    "ID Verification",
    "Smart Matches",
    "Pan-India Reach",
    "Relationship Managers",
    "Family Involvement",
    "Premium Features",
];

const stories = [
    {
        name: "Priya & Rajesh",
        location: "Mumbai, Maharashtra",
        date: "Married Dec 2023",
        quote: "We connected on Saubhagya Marriage and knew instantly that we were meant to be. Within 6 months, we were married. Thank you for bringing us together!",
        image: "/card1.jpg",
    },
    {
        name: "Lakshmi & Karthik",
        location: "Chennai, Tamil Nadu",
        date: "Married Aug 2023",
        quote: "After years of searching, we found each other here. The platform made it so easy to find someone with matching values and family background.",
        image: "/card2.jpg",
    },
    {
        name: "Neha & Arjun",
        location: "Bangalore, Karnataka",
        date: "Married Mar 2024",
        quote: "We were hesitant about online matrimony at first, but Saubhagya Marriage's verified profiles gave us confidence. Now we're happily married!",
        image: "/card3.jpg",
    },
];

export default function App() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="page">
            <header className="topbar">
                <div className="brand">
                    <div className="brand-mark">❤</div>
                    <div className="brand-name">Saubhagya Marriage</div>
                </div>
                <button
                    className="menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className="nav-links">
                    <a href="#profiles">Browse Profiles</a>
                    <a href="#stories">Success Stories</a>
                    <a href="#process">How It Works</a>
                    <a href="#help">Help</a>
                </nav>
                <div className="auth">
                    <a className="link" href="#login">
                        Login
                    </a>
                    <button className="btn btn-outline">Browse</button>
                    <a href="tel:9399265893" className="btn btn-primary">
                        Contact Us
                    </a>
                </div>
            </header>

            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="brand">
                        <div className="brand-mark">❤</div>
                        <div className="brand-name">Saubhagya Marriage</div>
                    </div>
                    <button
                        className="close-btn"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <a href="#profiles" onClick={() => setSidebarOpen(false)}>
                        Browse Profiles
                    </a>
                    <a href="#stories" onClick={() => setSidebarOpen(false)}>
                        Success Stories
                    </a>
                    <a href="#process" onClick={() => setSidebarOpen(false)}>
                        How It Works
                    </a>
                    <a href="#help" onClick={() => setSidebarOpen(false)}>
                        Help
                    </a>
                    <a href="#login" onClick={() => setSidebarOpen(false)}>
                        Login
                    </a>
                </nav>
                <div className="sidebar-actions">
                    <button
                        className="btn btn-outline"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Browse
                    </button>
                    <a
                        href="tel:9399265893"
                        className="btn btn-primary"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Contact Us
                    </a>
                </div>
            </aside>

            <section className="hero">
                <div className="hero-overlay" />
                <div className="hero-media" aria-hidden="true" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>Find Your</span>
                        <span className="highlight">Perfect Partner</span>
                        <span>For Life</span>
                    </h1>

                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-value">3M+</div>
                            <div className="stat-label">Happy Members</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">100%</div>
                            <div className="stat-label">Verified Profiles</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">50k+</div>
                            <div className="stat-label">Daily Matches</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className="section">
                <div className="section-pill">Simple Process</div>
                <h2 className="section-title">How Saubhagya Marriage Works</h2>
                <p className="section-lead">
                    Finding your perfect life partner is now easier than ever.
                    Follow these simple steps to begin your journey.
                </p>
                <div className="card-grid four">
                    {steps.map((step) => (
                        <div
                            className="card step-card enhanced-step-card"
                            key={step.title}
                        >
                            <div className="step-icon-wrapper">
                                <span className="step-icon enhanced">★</span>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section light" id="features">
                <div className="section-pill">Why Choose Us</div>
                <h2 className="section-title">Features That Set Us Apart</h2>
                <p className="section-lead">
                    We have designed every feature with your safety, privacy,
                    and success in mind.
                </p>
                <div className="card-grid four">
                    {features.map((feature) => (
                        <div className="card feature-card" key={feature}>
                            <div className="feature-icon">❤</div>
                            <h3>{feature}</h3>
                            <p>
                                Carefully crafted to help you find trusted
                                matches quickly and confidently.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="stories" className="section stories">
                <div className="section-pill">Real Love Stories</div>
                <h2 className="section-title">Success Stories</h2>
                <p className="section-lead">
                    Thousands of couples have found their soulmates through
                    Saubhagya Marriage. Here are some of their beautiful
                    stories.
                </p>
                <div className="story-grid">
                    {stories.map((story) => (
                        <article className="story-card" key={story.name}>
                            <div
                                className="story-image"
                                style={{
                                    backgroundImage: `url(${story.image})`,
                                }}
                            />
                            <div className="story-body">
                                <div className="story-meta">
                                    <h3>{story.name}</h3>
                                    <span>{story.location}</span>
                                </div>
                                <div className="story-rating">★★★★★</div>
                                <p className="story-quote">{story.quote}</p>
                                <div className="story-date">{story.date}</div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="cta-subtext">
                    Ready to write your own success story?
                </div>
            </section>

            <section className="cta">
                <div className="cta-tag">Join 5 Million+ Happy Members</div>
                <h2>Your Perfect Match is Waiting</h2>
                <p>
                    Do not wait any longer. Create your free profile today and
                    take the first step towards finding your life partner.
                    Registration is free and takes just 2 minutes.
                </p>
                <div className="cta-actions">
                    <a href="tel:9399265893" className="btn btn-secondary">
                        Contact Us
                    </a>
                    <button className="btn btn-outline light">
                        Browse Profiles
                    </button>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <div className="brand">
                                <div className="brand-mark">❤</div>
                                <div className="brand-name">
                                    Saubhagya Marriage
                                </div>
                            </div>
                            <p>
                                India's most trusted matrimonial platform. We
                                have been bringing hearts together since many
                                years and helping thousands find their perfect
                                life partner.
                            </p>
                            <div
                                className="footer-socials"
                                aria-label="Social media links"
                            >
                                <a href="#facebook" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="#x" aria-label="X">
                                    <FaXTwitter />
                                </a>
                                <a href="#youtube" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="#linkedin" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#instagram" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <a href="#about">About Us</a>
                            <a href="#stories">Success Stories</a>
                            <a href="#help">Help Center</a>
                            <a href="#contact">Contact Us</a>
                        </div>

                        <div className="footer-col">
                            <div className="contact-line">
                                <FaEnvelope
                                    style={{
                                        marginRight: "8px",
                                        verticalAlign: "middle",
                                    }}
                                />
                                <a href="mailto:support@Saubhagya Marriage.com">
                                    support@Saubhagya Marriage.com
                                </a>
                            </div>
                            <div className="contact-line">
                                <FaPhone
                                    style={{
                                        marginRight: "8px",
                                        verticalAlign: "middle",
                                    }}
                                />
                                <a href="tel:+9193400 23226">
                                    Phone : 93400 23226
                                </a>
                            </div>
                            <div className="contact-line">
                                <FaLocationDot
                                    style={{
                                        marginRight: "8px",
                                        verticalAlign: "middle",
                                    }}
                                />

                                <a href="">
                                    Baijnathpara , Raipur, Chhattisgarh, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-divider" aria-hidden="true" />

                    <div className="footer-bottom">
                        <span>
                            © 2026 Saubhagya Marriage. All rights reserved.
                        </span>
                        <div className="footer-links">
                            <a href="#terms">Terms of Service</a>
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#cookie">Cookie Policy</a>
                            <a href="#refund">Refund Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
