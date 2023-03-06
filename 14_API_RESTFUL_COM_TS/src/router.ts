import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

// validations
import { validate } from "./middleware/handleValidation";

const router = Router()

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API working!!!")
  })
  .post("/movie", validate, createMovie);
