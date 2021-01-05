import express from "express";

const router = express.router();

router.get("/api/users/currentuser", () => {
  res.send("hello from routes current-user.");
});

export { router as currentUserRouter };
