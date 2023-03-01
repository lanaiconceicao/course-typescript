// 1 - iniciando projeto
console.log("Express + TS !!!");

// 2 - init express
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - rota com POST
app.use(express.json());

app.post("/api/product", (req, res) => {
  console.log(req.body);
  return res.send("Produto adicionado");
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
