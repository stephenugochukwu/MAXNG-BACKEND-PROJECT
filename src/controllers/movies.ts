import { Request, Response } from "express";
import * as Service from "../services/movies.js";
import { failed, success } from "../utils/formatResponse.js";

export const allMovies = async (_req: Request, res: Response) => {
  try {
    const response = await Service.getMovies();
    return success(res, response.statusCode, response.message);
  } catch (error: any) {
    console.log(error);
    return failed(res, error.statusCode, error.message);
  }
};

export const getMovie =async (req: Request, res:Response) => {
  try {
    const filmId = Number(req.params.id)
    const response = await Service.getOneMovie(filmId)
    return success(res, response.statusCode, response.message);
  } catch (error:any) {
    console.log(error);
    return failed(res, error.statusCode, error.message);
  }
}