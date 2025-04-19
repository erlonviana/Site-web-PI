// Importando Express

import express from "express";

//Importando Rotas
import HortalicasController from "./controllers/HortalicasController.js";
import FertilizerController from "./controllers/FertilizerController.js";
import WaterLevelController from "./controllers/WaterLevelController.js";
// Iniciando express na variável app

const app = express();

// Configurando a view engine
app.set("view engine", "ejs");

// Servindo arquivos estáticos
app.use(express.static("public"));

// Rotas
app.use("/", HortalicasController);
app.use("/", FertilizerController);
app.use("/", WaterLevelController);

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Inicialização do servidor
app.listen(8080, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log("Servidor iniciado com sucesso na porta 8080!");
  }
});
