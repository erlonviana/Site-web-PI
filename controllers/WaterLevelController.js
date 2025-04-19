// Importando Express

import express from "express";

// Iniciando Express

const router = express.Router();

router.get("/registerWaterLevel", (req,res)=>{

    res.render("registerWaterLevel");

});

export default router;