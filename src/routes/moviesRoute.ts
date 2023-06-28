import { Router } from "express";
import * as Controller from "../controllers/movies.js"
import validate from "../middlewares/validation.js";
import { filmIdschema } from "../utils/validationSchemas.js";

const route = Router();

route.get("/", Controller.allMovies)
route.get("/:id", validate(filmIdschema), Controller.getMovie)

export default route