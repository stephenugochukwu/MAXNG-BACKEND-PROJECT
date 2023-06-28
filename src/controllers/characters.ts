import { Request, Response } from "express";
import * as Service from "../services/characters.js";
import { failed, success } from "../utils/formatResponse.js";
import { characterType } from "../utils/validationSchemas.js";

export const characters = async (req: Request, res: Response) => {
   const parameters  = req.query as characterType
 

  try {
    const response = await Service.getCharacters(parameters);
    return success(res, response.statusCode, response.message);
  } catch (error: any) {
    console.log(error);
    return failed(res, error.statusCode, error.message);
  }
};
