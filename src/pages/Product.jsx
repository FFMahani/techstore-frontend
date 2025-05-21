import Smartwatch from "../assets/smartwatch.png";
import Headphones from "../assets/headphones.png";
import Speaker from "../assets/speaker.png";
import Earbuds from "../assets/earbuds.png";
import Charger from "../assets/charger.png";
import Assistant from "../assets/assistant.png";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Smartwatch Pro",
    desc: "A sleek companion to help you stay fit, connected, and stylish — all from your wrist.",
    features: "24/7 Heart Rate · GPS · Waterproof",
    rating: "4.7",
    shipping: "Free Shipping",
    stock: "In Stock",
    discount: "15% OFF",
    originalPrice: "$235",
    price: "$199",
    img: Smartwatch,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    desc: "Immerse yourself in music with advanced noise cancellation and studio-quality sound.",
    features: "ANC · 40h Battery · Foldable Design",
    rating: "4.8",
    shipping: "Free Shipping",
    stock: "Only 3 left",
    discount: "10% OFF",
    originalPrice: "$275",
    price: "$249",
    img: Headphones,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    desc: "Take your music anywhere with this portable speaker, built for outdoor adventures.",
    features: "10W Sound · Splashproof · 12h Playtime",
    rating: "4.5",
    shipping: "Ships in 24h",
    stock: "In Stock",
    discount: "5% OFF",
    originalPrice: "$95",
    price: "$89",
    img: Speaker,
  },
  {
    id: 4,
    name: "Noise-Canceling Earbuds",
    desc: "Enjoy crystal-clear calls and immersive audio in a compact, ergonomic form.",
    features: "ENC · Wireless Charging · 8h Playback",
    rating: "4.6",
    shipping: "Free Shipping",
    stock: "Limited Stock",
    discount: null,
    price: "$129",
    img: Earbuds,
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    desc: "Power up your devices quickly and safely with this ultra-slim wireless charger.",
    features: "15W Fast Charge · USB-C · Qi Certified",
    rating: "4.3",
    shipping: "Ships Tomorrow",
    stock: "In Stock",
    discount: null,
    price: "$59",
    img: Charger,
  },
  {
    id: 6,
    name: "Smart Home Assistant",
    desc: "Manage your home with voice commands, automation routines, and smart connectivity.",
    features: "Voice Control · Smart Hub · Compact Design",
    rating: "4.4",
    shipping: "Free Shipping",
    stock: "In Stock",
    discount: "7% OFF",
    originalPrice: "$109",
    price: "$99",
    img: Assistant,
  },
];

const Product = () => {
  const containerRef = useRef();

  const scroll = (direction) => {
    containerRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-5 px-3 bg-light text-center fade-in">
      <h2 className="fw-bold mb-4 text-dark fs-2">Our Featured Products</h2>

      <div className="position-relative">
        {/* Left Arrow */}
        <button
          className="btn-arrow position-absolute top-50 start-0 translate-middle-y z-1 hide-on-mobile"
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
        >
          ‹
        </button>

        <div
          className="d-flex overflow-auto gap-4 px-3 py-2"
          style={{
            scrollSnapType: "x mandatory",
            overflowY: "hidden",
            scrollBehavior: "smooth",
          }}
          ref={containerRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="card card-custom flex-shrink-0 position-relative"
            >
              {product.discount && (
                <div className="discount-ribbon">{product.discount}</div>
              )}

              <img
                src={product.img}
                alt={product.name}
                className="card-img-zoom"
              />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="product-features">{product.features}</p>
                <div className="product-rating-stock d-flex justify-content-between small text-muted">
                  <span>⭐ {product.rating}</span>
                  <span>{product.stock}</span>
                </div>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center">
                <div>
                  {product.discount && product.originalPrice ? (
                    <>
                      <span className="old-price">{product.originalPrice}</span>
                      <span className="new-price">{product.price}</span>
                    </>
                  ) : (
                    <span className="new-price">{product.price}</span>
                  )}
                  <div className="text-muted small">{product.shipping}</div>
                </div>
                <button className="btn-rounded-gradient">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="btn-arrow position-absolute top-50 end-0 translate-middle-y z-1 hide-on-mobile"
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Product;
