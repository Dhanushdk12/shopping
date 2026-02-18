function MovieScreening({ movie }) {
  return (
    <div className="movie">
      <h2>Movies show Time</h2>
      <p><strong>Details</strong></p>

      <p><strong>title</strong> {movie.title}</p>
      <p><strong>showTime</strong> {movie.showTime}</p>
      <p><strong>screen</strong> {movie.screen}</p>
      <p><strong>row</strong> {movie.row}</p>
      <p><strong>seat</strong> {movie.seat}</p>

      <img src={movie.imageUrl} alt={movie.title} />
    </div>
  );
}

export default MovieScreening;