import aboutImage from "/assets/about.png";

const About = () => {
  return (
    <div className="about-section text-center bg-light fade-in py-5 px-3">
      {/* Title */}
      <h2 className="fw-semibold mb-2 text-dark fs-2">About TechStore</h2>

      {/* Subtitle */}
      <p className="about-subtitle">
        TechStore is your trusted destination for the latest in smart gadgets and digital accessories.
      </p>

      {/* Description */}
      <p className="about-description">
        We are passionate about technology that improves your everyday life.
        Whether you're tracking your health, enjoying music, or staying
        connected — we offer carefully selected products designed for quality,
        innovation, and style.
      </p>

      {/* About Image */}
      <div className="about-image-wrapper mb-5">
        <img
          src={aboutImage}
          alt="Customer Support"
          className="img-fluid rounded shadow-sm"
        />
      </div>

      {/* Mission Card */}
      <div className="container d-flex justify-content-center">
        <div className="card about-mission-card">
          <div className="card-body p-4">
            <h5 className="fw-bold text-primary mb-3">🎯 Our Mission</h5>
            <p className="text-muted">
              To empower tech lovers with affordable, high-quality devices that
              make life smarter, simpler, and more fun.
            </p>

            <h6 className="mt-4 fw-bold text-success">✅ Why Choose Us?</h6>
            <ul className="list-unstyled mt-3 text-start px-3 text-muted">
              <li className="mb-2">✔️ Curated tech products</li>
              <li className="mb-2">✔️ Affordable pricing</li>
              <li className="mb-2">✔️ Friendly support and fast delivery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-5 text-center contact-section">
        <h5 className="fw-bold text-primary mb-3">📬 Get in Touch</h5>
        <p className="text-muted mb-1">Have questions or need support?</p>
        <p className="text-muted">
          Email us at{" "}
          <a href="mailto:support@mahshamtech.com" className="text-contact-link">
            support@mahshamtech.com
          </a>
        </p>
        <p className="text-muted">Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default About;
