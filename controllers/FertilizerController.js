// Importando Express
import express from "express";

// Const Router

const router = express.Router();

// Rota para registrar fertilizante
router.get("/registerFertilizer", (req, res) => {
    res.render("registerFertilizer");
  });
  
  export default router;
  
