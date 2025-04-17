// Importando Express

import express from "express";

// Carregando o metodo principal do express
const app = express();

// Configurando a view engine do ejs

app.set('view engine', 'ejs');

// Arquivos Estáticos

app.use(express.static('public'));

// CRIANDO ROTA PRINCIPAL DO SITE

app.get("/", (req, res) => {
  res.render("index");
});









app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor: " + error);
  } else {
    console.log("O servidor foi iniciado com sucesso!");
  }
});
