
import { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80",
    title: "Delicious Burgers",
    text: "Juicy, fresh and grilled to perfection.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80",
    title: "Fresh Pizza",
    text: "Hot, cheesy and packed with unforgettable flavor.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
    title: "Fresh & Healthy",
    text: "Beautiful meals prepared with fresh ingredients.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80",
    title: "Perfect Grilled Meals",
    text: "Rich flavors and delicious meals made for you.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* AUTOMATIC MOVING */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => {
        if (previous === slides.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* NEXT */
  const nextSlide = () => {
    setCurrentSlide((previous) => {
      if (previous === slides.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  /* PREVIOUS */
  const previousSlide = () => {
    setCurrentSlide((previous) => {
      if (previous === 0) {
        return slides.length - 1;
      }

      return previous - 1;
    });
  };

  return (
    <div className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO URBAN PLATE
          </p>

          <h1>
            Good food.
            <br />
            Good mood.
          </h1>

          <p>
            Fresh ingredients, unforgettable flavors and beautifully
            prepared meals made for every occasion.
          </p>

          <a href="/menu" className="hero-button">
            Explore Our Menu
          </a>

        </div>

      </section>


      {/* =========================
          MOVING CAROUSEL
      ========================= */}

      <section className="carousel-section">

        <div className="carousel">

          {/* FOOD IMAGE */}

          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="carousel-image"
            key={currentSlide}
          />


          {/* DARK OVERLAY */}

          <div className="carousel-overlay">

            <p>URBAN PLATE</p>

            <h2>
              {slides[currentSlide].title}
            </h2>

            <span>
              {slides[currentSlide].text}
            </span>

            <a href="/menu" className="carousel-button">
              View Our Menu
            </a>

          </div>


          {/* LEFT ARROW */}

          <button
            className="carousel-arrow left"
            onClick={previousSlide}
          >
            ❮
          </button>


          {/* RIGHT ARROW */}

          <button
            className="carousel-arrow right"
            onClick={nextSlide}
          >
            ❯
          </button>


          {/* DOTS */}

          <div className="carousel-dots">

            {slides.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="home-intro">

        <p className="hero-small">
          WHY CHOOSE US
        </p>

        <h2>
          Great Food. Great Experience.
        </h2>

        <p>
          At Urban Plate, we believe every meal should be memorable.
          We use fresh ingredients and carefully prepared recipes
          to give you delicious food every time.
        </p>

      </section>

    </div>
  );
}

export default Home;

