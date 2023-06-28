import { Router } from "express";
import validate from "../middlewares/validation.js";
import { characterSchema } from "../utils/validationSchemas.js";
import * as Controller from "../controllers/characters.js";
const route = Router();
route.get("/", validate(characterSchema), Controller.characters);
export default route;
