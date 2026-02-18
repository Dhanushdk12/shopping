
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Import useParams


import './App.css'; // Link to your CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/surya-movies" className="nav-link">Surya's Movies</Link></li>
              <li><Link to="/checkout" className="nav-link">Checkout</Link></li> {/* Link to Checkout page */}
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surya-movies" element={<SuryaMovies />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Checkout Route */}
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <section className="home">
      <h1>Welcome to Surya's Movie World</h1>
      <p>Explore his movies, read details, and enjoy!</p>
     
    </section>
  );
}

// About Component
function About() {
  return (
    <section className="about">
      <h1>About Surya</h1>
      <p>Surya is a famous Tamil actor known for his versatile roles and impactful performances.</p>
    </section>
  );
}

// Checkout Component
function Checkout() {
  return (
    <section className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <div className="form-section">
          <h2>Personal Information</h2>
          <label>First Name:</label>
          <input type="text" name="firstName" required />
          
          <label>Last Name:</label>
          <input type="text" name="lastName" required />
          
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-section">
          <h2>Shipping Address</h2>
          <label>Address:</label>
          <input type="text" name="address" required />
          
          <label>City:</label>
          <input type="text" name="city" required />
          
          <label>Zip Code:</label>
          <input type="text" name="zip" required />
        </div>

        <div className="form-section">
          <h2>Payment Information</h2>
          <label>Credit Card Number:</label>
          <input type="text" name="creditCard" required />
          
          <label>Expiration Date:</label>
          <input type="month" name="expirationDate" required />
          
          <label>CVV:</label>
          <input type="text" name="cvv" required />
        </div>

        <button type="submit" className="submit-button">Continue to Checkout</button>
      </form>
    </section>
  );
}

// SuryaMovies Component (List of movies)
function SuryaMovies() {
  const movies = [
    {
      id: 1,
      title: "Ghajini",
      year: 2005,
      description: "A businessman with short-term memory loss attempts to track down his wife's murderer.",
      imageUrl: "https://via.placeholder.com/300x450?text=Ghajini",
    },
    {
      id: 2,
      title: "Singam",
      year: 2010,
      description: "A fierce cop battles against a notorious criminal and his gang.",
      imageUrl: "https://via.placeholder.com/300x450?text=Singam",
    },
    {
      id: 3,
      title: "Soorarai Pottru",
      year: 2020,
      description: "An inspiring tale of a man striving to make air travel affordable for everyone.",
      imageUrl: "https://via.placeholder.com/300x450?text=Soorarai+Pottru",
    },
    {
      id: 4,
      title: "Kaakha Kaakha",
      year: 2003,
      description: "A dedicated cop's life is turned upside down when his wife is kidnapped by a gang.",
      imageUrl: "https://via.placeholder.com/300x450?text=Kaakha+Kaakha",
    },
  ];

  return (
    <section className="surya-movies">
      <h1 className="section-title">Surya's Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

// MovieCard Component (Displays each movie in the list)
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>{movie.description.slice(0, 80)}...</p>
      <Link to={`/movie/${movie.id}`} className="movie-link">View Details</Link>
    </div>
  );
}

// MovieDetail Component (Shows more details for a specific movie)
function MovieDetail() {
  const { id } = useParams();  // Use the dynamic movie ID from the URL
  const movieDetails = getMovieDetails(id);

  if (!movieDetails) {
    return <h2>Movie not found</h2>;
  }

  return (
    <section className="movie-detail">
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.imageUrl} alt={movieDetails.title} className="movie-image" />
      <p><strong>Year:</strong> {movieDetails.year}</p>
      <p><strong>Description:</strong> {movieDetails.description}</p>
      <button className="watch-trailer-button">Watch Trailer</button>
    </section>
  );
}

// Helper function to get movie details based on ID
function getMovieDetails(id) {
  const movies = [
    {
      id: 1,
      title: "Ghajini",
      year: 2005,
      description: "A businessman with short-term memory loss attempts to track down his wife's murderer.",
      imageUrl: "https://via.placeholder.com/300x450?text=Ghajini",
    },
    {
      id: 2,
      title: "Singam",
      year: 2010,
      description: "A fierce cop battles against a notorious criminal and his gang.",
      imageUrl: "https://via.placeholder.com/300x450?text=Singam",
    },
    {
      id: 3,
      title: "Soorarai Pottru",
      year: 2020,
      description: "An inspiring tale of a man striving to make air travel affordable for everyone.",
      imageUrl: "https://via.placeholder.com/300x450?text=Soorarai+Pottru",
    },
    {
      id: 4,
      title: "Kaakha Kaakha",
      year: 2003,
      description: "A dedicated cop's life is turned upside down when his wife is kidnapped by a gang.",
      imageUrl: "https://via.placeholder.com/300x450?text=Kaakha+Kaakha",
    },
  ];

  return movies.find((movie) => movie.id === parseInt(id));
}

export default App;
