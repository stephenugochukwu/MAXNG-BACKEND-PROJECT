var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from "../config/dbConfig.js";
export const allMoviesDTO = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    // Map films from API
    const movieObject = yield obj.results.map((film) => {
        return {
            movieTitle: film.title,
            releaseDate: film.release_date,
            openingCrawl: film.opening_crawl,
            filmId: +film.url.charAt(film.url.length - 2),
        };
    });
    // Add comments count to movie object
    const counts = yield Promise.all(movieObject.map((movie) => __awaiter(void 0, void 0, void 0, function* () {
        const count = yield db.comment.count({ where: { filmId: movie.filmId } });
        return Object.assign(Object.assign({}, movie), { commentsCount: count });
    })));
    return counts;
});
export const movieDTO = (film, comment) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        movie_title: film.title,
        release_date: film.release_date,
        opening_crawl: film.opening_crawl,
        comments: comment.message,
    };
});
