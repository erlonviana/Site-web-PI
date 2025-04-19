import express from "express";
import HortalicasController from "./controllers/HortalicasController.js";

const app = express();

// Configurando a view engine
app.set("view engine", "ejs");

// Servindo arquivos estáticos
app.use(express.static("public"));

// Rotas
app.use("/", HortalicasController);

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
