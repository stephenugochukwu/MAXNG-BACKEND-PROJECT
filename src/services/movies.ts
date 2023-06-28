import { movieDTO, allMoviesDTO } from "../dto/moviesDto.js";
import apiCall from "../utils/apiCall.js";
import { getComments } from "./comments.js";

export const getMovies = async () => {
  try {
    const response = await apiCall("films");
    const moviesList = await allMoviesDTO(response);
    // const data = addCommentsCount(moviesList)
    return { statusCode: 200, message: moviesList };
  } catch (error) {
    console.error(error);
    throw {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
};

export const getOneMovie = async (filmId: number) => {
  try {
    const response = await apiCall(`films/${filmId}`);
    const movieComments = await getComments(filmId);
    const data = await movieDTO(response, movieComments);
    return { statusCode: 200, message: data };
  } catch (error) {
    console.error(error);
    throw {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
};
