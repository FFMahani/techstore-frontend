import HomeBanner from "/assets/banner.png";

const Home = () => {
  return (
    <div className="text-center py-5 px-3 bg-light rounded fade-in">
      {/* Hero image */}
      <div className="home-banner-wrapper mx-auto mb-4 shadow-sm rounded overflow-hidden">
        <img
          src={HomeBanner}
          alt="Tech gadgets on display"
          className="img-fluid w-100 home-banner-img"
        />
      </div>

      {/* Heading */}
      <h1 className="mb-3 fw-bold text-dark">Welcome to Mahsham TechStore</h1>

      {/* Description */}
      <p className="home-description fs-5 text-secondary lh-lg mx-auto mb-4">
        Discover smart gadgets and accessories — from stylish wearables to powerful audio — built to elevate your lifestyle with color and innovation.
      </p>

      {/* Explore Button */}
       <Link to="/product" className="btn btn-lg fw-semibold mt-4 shadow btn-pill">
        🚀 Explore Products
      </Link>
    </div>
  );
};

export default Home;
