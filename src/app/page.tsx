
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
      // Re-initialize existing inline scripts safely

      const nav = document.getElementById("nav");
      const hamburger = document.getElementById("hamburger");
      const mobileNav = document.getElementById("mobileNav");

      // Scroll effect
      const handleScroll = () => {
        nav?.classList.toggle("scrolled", window.scrollY > 80);
      };
      window.addEventListener("scroll", handleScroll);

      // Hamburger toggle
      const handleHamburger = () => {
        hamburger?.classList.toggle("active");
        mobileNav?.classList.toggle("open");
        document.body.style.overflow = mobileNav?.classList.contains("open") ? "hidden" : "";
      };
      hamburger?.addEventListener("click", handleHamburger);

      // Close mobile nav on link click
      const links = document.querySelectorAll(".mobile-nav-link");
      const handleLinkClick = () => {
          hamburger?.classList.remove("active");
          mobileNav?.classList.remove("open");
          document.body.style.overflow = "";
      };
      links.forEach(link => link.addEventListener("click", handleLinkClick));

      return () => {
        window.removeEventListener("scroll", handleScroll);
        hamburger?.removeEventListener("click", handleHamburger);
        links.forEach(link => link.removeEventListener("click", handleLinkClick));
      };
  }, []);

  return (
    <main>


  {/* Demo Banner */}
  <div className="demo-banner" id="demoBanner">
    🌿 Design demo by <a href="mailto:jdcstarita@gmail.com">Joshua David</a> — Luxury eco-resort with Shopify
    integration
  </div>

  {/* Navigation */}
  <nav className="nav" id="nav" style={{ top: "34px" }}>
    <div className="nav-inner">
      <a href="#" className="nav-logo">Paradise Cove</a>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#rooms">Rooms</a>
        <a href="#springs">Springs</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#book" className="nav-cta">Book Now</a>
      <button className="hamburger" id="hamburger" aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  {/* Mobile Nav Overlay */}
  <div className="mobile-nav" id="mobileNav">
    <a href="#experience" className="mobile-nav-link">Experience</a>
    <a href="#rooms" className="mobile-nav-link">Rooms</a>
    <a href="#springs" className="mobile-nav-link">Springs</a>
    <a href="#gallery" className="mobile-nav-link">Gallery</a>
    <a href="#contact" className="mobile-nav-link">Contact</a>
    <a href="#book" className="nav-cta">Book Now</a>
  </div>

  {/* Cursor Glow */}
  <div className="cursor-glow" id="cursorGlow"></div>

  {/* Hero with Ken Burns video-style animation */}
  <section className="hero" id="top">
    <div className="hero-image-wrapper">
      <img className="hero-image" src="images/hero.png"
        alt="Aerial view of Paradise Cove Eco-Resort surrounded by lush rainforest and rivers" />
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-tagline">Eco-Luxury Resort & Spa</div>
      <h1 className="hero-title">Wellness, Relaxation <br />& <em>Rejuvenation</em></h1>
      <p className="hero-subtitle">
        Nestled in the heart of a pristine Philippine rainforest, where crystal-clear
        rivers meet lush tropical gardens.
      </p>
    </div>
    {/* Booking Bar */}
    <div className="booking-bar" id="book">
      <div className="booking-field">
        <label>Room Type</label>
        <select id="bookingRoomType">
          <option defaultValue="Rainforest Suite" data-capacity="2">Rainforest Suite (max 2)</option>
          <option defaultValue="River View Room" data-capacity="2">River View Room (max 2)</option>
          <option defaultValue="Garden Villa" data-capacity="4">Garden Villa (max 4)</option>
        </select>
      </div>
      <div className="booking-field">
        <label>Check In</label>
        <input type="date" id="bookingCheckin" defaultValue="2026-03-14" />
      </div>
      <div className="booking-field">
        <label>Check Out</label>
        <input type="date" id="bookingCheckout" defaultValue="2026-03-15" />
      </div>
      <div className="booking-field">
        <label>Guests</label>
        <select id="bookingGuests" defaultValue="2">
          <option defaultValue="1">1 Guest</option>
          <option defaultValue="2" defaultChecked>2 Guests</option>
          <option defaultValue="3">3 Guests</option>
          <option defaultValue="4">4 Guests</option>
          <option defaultValue="5">5 Guests</option>
          <option defaultValue="6">6 Guests</option>
          <option defaultValue="7">7 Guests</option>
          <option defaultValue="8">8 Guests</option>
        </select>
      </div>
      <div className="booking-field">
        <label>Promo Code</label>
        <input type="text" id="bookingPromo" placeholder="Optional" />
      </div>
      <button className="booking-btn" id="shopifyBookBtn">Book Now</button>
    </div>
  </section>

  {/* Welcome */}
  <section className="welcome section fade-up" id="experience">
    <div className="section-tag">Welcome</div>
    <h2 className="section-title">Welcome to Paradise Cove<br />Eco-Resort & Spa</h2>
    <p className="section-desc">
      Hidden within the lush landscapes of the Philippines, Paradise Cove is home to
      pristine rivers flowing through a private rainforest reserve. This living sanctuary
      of natural beauty creates an atmosphere of warmth, energy, and renewal.
    </p>
    <p className="section-desc" style={{ marginTop: "20px" }}>
      More than a stay, Paradise Cove is where natural wonders, lush landscapes,
      and authentic luxury come together to make you feel alive naturally.
    </p>
  </section>

  {/* Feature Split 1 — About */}
  <div className="split fade-up">
    <div className="split-image">
      <img src="images/springs.png" alt="Natural springs flowing through tropical rainforest" />
    </div>
    <div className="split-text">
      <div className="section-tag">Discover</div>
      <h2 className="section-title">Where the River Meets <em>the Rainforest</em></h2>
      <p><strong>Luxury. Nature. Well-being.</strong></p>
      <p>
        Immerse yourself in a living ecosystem shaped by water and earth. Crystal-clear
        rivers flow through tropical gardens, fueling wellness rituals and unforgettable
        experiences. At Paradise Cove, nature, refinement, and well-being flow as one —
        inviting you to reconnect with what matters most.
      </p>
      <a href="#springs" className="btn btn-outline">View Natural Springs</a>
    </div>
  </div>

  {/* Rooms */}
  <section className="section section-alt" id="rooms">
    <div className="section-inner section-centered">
      <div className="section-tag">Accommodations</div>
      <h2 className="section-title">Your Private Escape <em>in the Rainforest</em></h2>
      <p className="section-desc">
        Discover refined comfort immersed in lush nature. Each room blends
        contemporary design with rainforest views, botanical touches, and the
        soothing sounds of the tropics.
      </p>
    </div>

    <div className="rooms-grid section-inner">
      <div className="room-card fade-up">
        <div className="room-card-image">
          <img src="images/room-suite.png" alt="Rainforest Suite interior with garden views" />
          <span className="room-card-badge">Suite</span>
        </div>
        <div className="room-card-body">
          <h3 className="room-card-name">Rainforest Suite</h3>
          <p className="room-card-desc">Exclusive suite with private plunge pool, dining area, and panoramic rainforest
            views from floor-to-ceiling windows.</p>
          <div className="room-card-meta">
            <span>👥 2 Guests</span>
            <span>📐 85 m²</span>
            <span>🌿 Forest View</span>
          </div>
          <div className="room-card-footer">
            <div className="room-price">₱18,500 <span>/ night</span></div>
            <button className="room-book-btn shopify-buy-btn">Book Now</button>
          </div>
        </div>
      </div>

      <div className="room-card fade-up">
        <div className="room-card-image">
          <img src="images/room-premium.png" alt="Premium Room with private balcony" />
          <span className="room-card-badge">Premium</span>
        </div>
        <div className="room-card-body">
          <h3 className="room-card-name">River View Room</h3>
          <p className="room-card-desc">Premium room with private balcony overlooking the river. King bed with spa-style
            bathroom and natural wood finishes.</p>
          <div className="room-card-meta">
            <span>👥 2 Guests</span>
            <span>📐 52 m²</span>
            <span>🌊 River View</span>
          </div>
          <div className="room-card-footer">
            <div className="room-price">₱12,800 <span>/ night</span></div>
            <button className="room-book-btn shopify-buy-btn">Book Now</button>
          </div>
        </div>
      </div>

      <div className="room-card fade-up">
        <div className="room-card-image">
          <img src="images/pool.png" alt="Garden Villa with infinity pool" />
          <span className="room-card-badge">Villa</span>
        </div>
        <div className="room-card-body">
          <h3 className="room-card-name">Garden Villa</h3>
          <p className="room-card-desc">Secluded villa surrounded by tropical gardens with private infinity pool, open-air
            living space, and handcrafted furnishings.</p>
          <div className="room-card-meta">
            <span>👥 4 Guests</span>
            <span>📐 110 m²</span>
            <span>🌺 Garden</span>
          </div>
          <div className="room-card-footer">
            <div className="room-price">₱24,000 <span>/ night</span></div>
            <button className="room-book-btn shopify-buy-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>

    <div className="rooms-link section-inner">
      <a href="#" className="btn-link">View All Rooms & Suites →</a>
    </div>
  </section>

  {/* Feature Split 2 — Dining (Reversed) */}
  <div className="split reverse fade-up" id="springs">
    <div className="split-image">
      <img src="images/dining.png" alt="Open-air dining overlooking tropical gardens" />
    </div>
    <div className="split-text">
      <div className="section-tag">Dining Experience</div>
      <h2 className="section-title">Farm to Table, <em>Forest to Plate</em></h2>
      <p><strong>Experiencing the Essence of Nature</strong></p>
      <p>
        Our open-air restaurant celebrates the richness of Philippine cuisine
        with locally sourced ingredients from surrounding farms and gardens.
        Dine under the stars as the river flows beside you, with a menu that
        changes with the seasons and the harvest.
      </p>
      <a href="#" className="btn btn-outline">View Menu</a>
    </div>
  </div>

  {/* Feature Split 3 — Spa & Wellness */}
  <div className="split fade-up">
    <div className="split-image">
      <img src="images/spa.png" alt="Outdoor spa treatment amidst tropical rainforest" />
    </div>
    <div className="split-text">
      <div className="section-tag">Spa & Wellness</div>
      <h2 className="section-title">Luxury Immersed <em>in the Rainforest</em></h2>
      <p><strong>Luxury in Harmony with Nature</strong></p>
      <p>
        At Paradise Cove Spa, wellness unfolds in open-air bungalows embraced by
        rainforest canopy and the soothing sounds of flowing water. Surrounded by
        natural springs and tropical gardens, each treatment is crafted to awaken
        the senses and restore balance in perfect connection with nature.
      </p>
      <a href="#" className="btn btn-outline">View Spa Treatments</a>
    </div>
  </div>

  {/* Experiences / Activities */}
  <section className="section" id="activities">
    <div className="section-inner section-centered">
      <div className="section-tag">Experiences</div>
      <h2 className="section-title">Boundless <em>Rainforest Adventures</em></h2>
      <p className="section-desc">
        Discover curated experiences that connect you with the landscape, culture,
        and spirit of the Philippines — from jungle trails to artisan workshops.
      </p>

      <div className="experiences-grid">
        <div className="experience-card fade-up">
          <span className="experience-icon">🏞️</span>
          <h3 className="experience-name">Waterfall Hike</h3>
          <p className="experience-desc">Trek through lush trails to hidden waterfalls deep within the rainforest reserve.
            Guided by local naturalists.</p>
          <a href="#" className="experience-link">Learn More</a>
        </div>
        <div className="experience-card fade-up">
          <span className="experience-icon">🛶</span>
          <h3 className="experience-name">River Kayaking</h3>
          <p className="experience-desc">Paddle through crystal-clear rivers surrounded by tropical canopy. Available for
            all skill levels.</p>
          <a href="#" className="experience-link">Learn More</a>
        </div>
        <div className="experience-card fade-up">
          <span className="experience-icon">🧘</span>
          <h3 className="experience-name">Sunset Yoga</h3>
          <p className="experience-desc">Guided yoga sessions on an open-air pavilion overlooking the river valley as the
            sun sets behind the mountains.</p>
          <a href="#" className="experience-link">Learn More</a>
        </div>
        <div className="experience-card fade-up">
          <span className="experience-icon">🎨</span>
          <h3 className="experience-name">Cultural Workshop</h3>
          <p className="experience-desc">Learn traditional Filipino arts, cooking, and crafts from local artisans in
            hands-on sessions.</p>
          <a href="#" className="experience-link">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  {/* Gallery */}
  <section className="gallery" id="gallery">
    <div className="gallery-header">
      <div className="section-tag">Visual Gallery</div>
      <h2 className="section-title" style={{ color: "white" }}>Rooms, Landscapes, and Moments<br />That Define the Experience</h2>
    </div>
    <div style={{ position: "relative" }}>
      <button className="gallery-nav-btn prev" id="galleryPrev" aria-label="Previous">‹</button>
      <button className="gallery-nav-btn next" id="galleryNext" aria-label="Next">›</button>
      <div className="gallery-scroll" id="galleryScroll">
        <div className="gallery-item">
          <img src="images/hero.png" alt="Aerial view of the resort" />
          <div className="gallery-caption">Resort Aerial View</div>
        </div>
        <div className="gallery-item">
          <img src="images/room-suite.png" alt="Rainforest Suite" />
          <div className="gallery-caption">Rainforest Suite</div>
        </div>
        <div className="gallery-item">
          <img src="images/springs.png" alt="Natural Springs" />
          <div className="gallery-caption">Natural Springs</div>
        </div>
        <div className="gallery-item">
          <img src="images/pool.png" alt="Infinity Pool" />
          <div className="gallery-caption">Infinity Pool & River</div>
        </div>
        <div className="gallery-item">
          <img src="images/dining.png" alt="Open-air Dining" />
          <div className="gallery-caption">Open-Air Dining</div>
        </div>
        <div className="gallery-item">
          <img src="images/room-premium.png" alt="River View Room" />
          <div className="gallery-caption">River View Room</div>
        </div>
        <div className="gallery-item">
          <img src="images/spa.png" alt="Rainforest Spa" />
          <div className="gallery-caption">Rainforest Spa</div>
        </div>
      </div>
    </div>
    <div className="gallery-dots" id="galleryDots">
      <span className="gallery-dot active"></span>
      <span className="gallery-dot"></span>
      <span className="gallery-dot"></span>
      <span className="gallery-dot"></span>
      <span className="gallery-dot"></span>
      <span className="gallery-dot"></span>
      <span className="gallery-dot"></span>
    </div>
  </section>

  {/* CTA */}
  <section className="cta-section">
    <div className="section-tag">Your Journey Awaits</div>
    <h2 className="section-title">Ready to Find <em>Your Peace</em></h2>
    <p className="section-desc">
      Your room is waiting. Your escape begins with a single step forward.
    </p>
    <div className="cta-actions">
      <a href="#book" className="btn btn-primary">Reserve Your Stay</a>
      <a href="#rooms" className="btn btn-outline">Explore Rooms</a>
    </div>
  </section>

  {/* Testimonials */}
  <section className="testimonials fade-up">
    <div className="testimonials-inner section-centered">
      <div className="section-tag">Guest Reviews</div>
      <h2 className="section-title">What Our Guests <em>Are Saying</em></h2>

      <div className="testimonials-grid">
        <div className="testimonial-card fade-up">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"An absolute dream. The rainforest suite was breathtaking — waking up to the
            sounds of water and birdsong was pure magic. The spa treatments were the best I've ever had."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">MS</div>
            <div>
              <div className="testimonial-name">Maria Santos</div>
              <div className="testimonial-stay">Rainforest Suite · February 2026</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card fade-up">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"We came for our anniversary and it exceeded every expectation. The farm-to-table
            dining, the natural springs, the warmth of the staff — truly world-class hospitality."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">JR</div>
            <div>
              <div className="testimonial-name">James & Rachel</div>
              <div className="testimonial-stay">Garden Villa · January 2026</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card fade-up">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"The river kayaking and waterfall hike were incredible highlights. Paradise Cove
            strikes the perfect balance between adventure and relaxation. Already planning our return!"</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">KC</div>
            <div>
              <div className="testimonial-name">Kevin Cruz</div>
              <div className="testimonial-stay">River View Room · March 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="faq" id="faq">
    <div className="faq-inner">
      <div className="faq-header">
        <div className="section-tag">Questions</div>
        <h2 className="section-title">Everything You Need to Know</h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>Before your arrival and during your stay</p>
      </div>

      <div className="faq-item">
        <button className="faq-question">How do I get to Paradise Cove? <span className="faq-icon">+</span></button>
        <div className="faq-answer">
          <p>Paradise Cove is located in the heart of Laguna Province, approximately 2.5 hours from Manila. We offer
            shuttle transfers from NAIA airport and can arrange private car service upon request. Detailed directions
            will be sent upon booking confirmation.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">What is the check-in and check-out time? <span className="faq-icon">+</span></button>
        <div className="faq-answer">
          <p>Check-in begins at 2:00 PM and check-out is at 12:00 noon. Early check-in and late check-out are subject to
            availability — please contact our front desk team to arrange.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Is the resort eco-friendly? <span className="faq-icon">+</span></button>
        <div className="faq-answer">
          <p>Absolutely. Sustainability is at the core of everything we do. Our buildings use locally sourced materials,
            we employ solar power supplementation, practice waste reduction, and support local conservation efforts.
            Your stay directly contributes to rainforest preservation.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Can I book spa treatments in advance? <span className="faq-icon">+</span></button>
        <div className="faq-answer">
          <p>Yes, we recommend booking spa treatments at least 48 hours in advance, especially during peak season. You
            can request treatments during the booking process or contact our concierge team directly.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Do you accommodate dietary restrictions? <span className="faq-icon">+</span></button>
        <div className="faq-answer">
          <p>Our kitchen team is experienced in accommodating vegetarian, vegan, gluten-free, and other dietary
            requirements. Please inform us of any restrictions during booking so we can prepare accordingly.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Premium Room Modal */}
  <div className="room-modal" id="roomModal">
    <div className="modal-header">
      <div style={{ fontWeight: "600", fontSize: "15px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Room Details
      </div>
      <button className="modal-close" id="closeModalBtn" aria-label="Close modal">×</button>
    </div>
    <div className="modal-body-scroll" style={{ flex: "1", overflowY: "auto" }}>
      <div className="modal-gallery-wrap">
        <div className="modal-gallery" id="modalGallery">
          {/* Images injected via JS */}
        </div>
        <button className="view-all-photos" id="viewAllPhotosBtn">View All Photos</button>
      </div>
      <div className="modal-content">
        <h2 className="modal-title" id="modalTitle">Room Name</h2>
        <div className="modal-meta" id="modalMeta"></div>
        <p className="modal-desc" id="modalDesc"></p>
        <h3 style={{ marginBottom: "24px", fontSize: "20px", fontFamily: "var(--font-display)" }}>What this place offers</h3>
        <div className="modal-amenities" id="modalAmenities"></div>
      </div>
    </div>
    <div className="modal-footer">
      <div className="room-price">
        <strong id="modalPrice"></strong> <span>/ night</span>
      </div>
      <button className="btn btn-primary shopify-buy-btn" id="modalCheckoutBtn" style={{ fontSize: "14px" }}>Reserve
        Now</button>
    </div>
  </div>

  {/* Photo Lightbox */}
  <div className="lightbox" id="lightbox">
    <button className="lightbox-close" id="lightboxClose">×</button>
      <img id="lightboxImg" alt="Photo" />
    <div className="lightbox-nav">
      <button id="lightboxPrev">← Previous</button>
      <button id="lightboxNext">Next →</button>
    </div>
    <div className="lightbox-counter" id="lightboxCounter"></div>
  </div>

  {/* Footer */}
  <footer className="footer" id="contact">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">Paradise Cove</div>
        <p>An eco-luxury resort experience where nature and refined comfort exist in perfect harmony. Laguna Province,
          Philippines.</p>
      </div>
      <div className="footer-col">
        <h4>Stay</h4>
        <a href="#rooms">Rooms & Suites</a>
        <a href="#">Rates & Packages</a>
        <a href="#book">Book Now</a>
      </div>
      <div className="footer-col">
        <h4>Experience</h4>
        <a href="#springs">Natural Springs</a>
        <a href="#">Spa & Wellness</a>
        <a href="#">Dining</a>
        <a href="#">Activities</a>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <a href="#">info@paradisecove.ph</a>
        <a href="#">+63 (49) 888-0000</a>
        <a href="#">Laguna, Philippines</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Paradise Cove Eco-Resort. All rights reserved.</span>
      <span className="footer-credit">
        Design & Development by <a href="mailto:jdcstarita@gmail.com">Joshua David</a>
      </span>
    </div>
    {/* Back to Top Button */}
    <button className="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
  </footer>

    {/* Shopify Buy Button SDK */}




    </main>
  );
}
