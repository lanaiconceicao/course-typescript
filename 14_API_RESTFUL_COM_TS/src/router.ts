import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies } from "./controllers/movieControllers";

// validations
import { validate } from "./middleware/handleValidation";
import { movieCreationValidation } from "./middleware/movieValidation";

const router = Router()

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API working!!!")
  })
  .post("/movie", movieCreationValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movies", getAllMovies)
