import express, { Request, Response } from "express";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  (req: Request, res: Response) => {
    res.send("hello from routes current-user.");
  }
);

export { router as currentUserRouter };
