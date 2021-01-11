import { Request, Response, Next } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: Next
) => {
  console.log("Something went wrong", err);

  res.status(400).send({
    message: "Something went wrong",
  });
};
