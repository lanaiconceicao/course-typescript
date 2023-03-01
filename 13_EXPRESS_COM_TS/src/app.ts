// 1 - iniciando projeto
console.log("Express + TS !!!");

// 2 - init express
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Express!")
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
