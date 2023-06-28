var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { movieDTO, allMoviesDTO } from "../dto/moviesDto.js";
import apiCall from "../utils/apiCall.js";
import { getComments } from "./comments.js";
export const getMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiCall("films");
        const moviesList = yield allMoviesDTO(response);
        // const data = addCommentsCount(moviesList)
        return { statusCode: 200, message: moviesList };
    }
    catch (error) {
        console.error(error);
        throw {
            statusCode: 500,
            message: "Internal Server Error",
        };
    }
});
export const getOneMovie = (filmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiCall(`films/${filmId}`);
        const movieComments = yield getComments(filmId);
        const data = yield movieDTO(response, movieComments);
        return { statusCode: 200, message: data };
    }
    catch (error) {
        console.error(error);
        throw {
            statusCode: 500,
            message: "Internal Server Error",
        };
    }
});
