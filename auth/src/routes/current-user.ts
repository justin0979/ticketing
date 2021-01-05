import express from "express";

const router = express.router();

router.get("/api/users/currentuser", () => {});

export { router as currentUserRouter };
