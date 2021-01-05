import express from "express";

const router = router.Express();

router.post("/api/users/signup", (req, res) => {
  res.send("signup");
});

export { router as signupRouter };
