import db from "../config/dbConfig.js";

export const allMoviesDTO = async (obj: Record<string, any>) => {
  // Map films from API
  const movieObject = await obj.results.map((film: Record<string, any>) => {
    return {
      movieTitle: film.title,
      releaseDate: film.release_date,
      openingCrawl: film.opening_crawl,
      filmId: +film.url.charAt(film.url.length - 2),
    };
  });


  // Add comments count to movie object
  const counts = await Promise.all(
    movieObject.map(async (movie: any) => {
      const count = await db.comment.count({ where: { filmId: movie.filmId } });
      return { ...movie, commentsCount: count };
    })
  );

  return counts;
};

export const movieDTO = async (film: any, comment: Record<string, any>) => {
  return {
    movie_title: film.title,
    release_date: film.release_date,
    opening_crawl: film.opening_crawl,
    comments: comment.message,
  };
};
