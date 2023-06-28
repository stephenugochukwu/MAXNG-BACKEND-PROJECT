import { Request, Response } from "express";
import { commentsType } from "../utils/validationSchemas.js";
import { failed, success } from "../utils/formatResponse.js";
import {  listComments, newComment } from "../services/comments.js";

export const addComment = async (req: Request, res: Response) => {
 try {
   const payload: commentsType = req.body;
   const response = await newComment(payload);
   return success(res, response.statusCode, response.message)
 } catch (error:any) {
  console.error(error)
  return failed(res, error.statusCode, error.message)
 }
 
}

export const showComments =async (_req:Request, res:Response) => {
   try {
     const response = await listComments();
     return success(res, response.statusCode, response.message);
   } catch (error: any) {
     console.error(error);
     return failed(res, error.statusCode, error.message);
   }
}