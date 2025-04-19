import express from "express";
const router = express.Router();

// Rota para registrar hortaliças
router.get("/registerHortalica", (req, res) => {
  res.render("registerHortalica");
});

export default router;
