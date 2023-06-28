import { Router } from "express";
import * as Controller from "../controllers/comments.js";
import validate from "../middlewares/validation.js";
import { commentsSchema } from "../utils/validationSchemas.js";
const route = Router();
route.post("/", validate(commentsSchema), Controller.addComment);
route.get("/", Controller.showComments);
export default route;
