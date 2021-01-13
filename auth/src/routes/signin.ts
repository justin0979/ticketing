import express from "express";

const router = express.Router();

router.post("/api/users/currentuser", (req, res) => {
  res.send("singin  ");
});

export { router as signinRouter };
