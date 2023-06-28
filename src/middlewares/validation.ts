import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
// import { fromZodError } from "zod-validation-error";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
    schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      const validationError = error;
      console.error(validationError);
      return res.status(400).json(validationError);
    }
  };

export default validate;
