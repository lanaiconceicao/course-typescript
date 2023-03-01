// 1 - iniciando projeto
console.log("Express + TS !!!");

// 2 - init express
import express, {Request, Response} from "express";

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

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // req.method = VERBO HTTP
  if(req.method === "POST") {
    return res.send("Inseriu algum registro!")  
  } else if(req.method === "GET") {
    return res.send("Leu algum registro!")  
  } else {
    return res.send("Não podemos realizar essa operação!")
  }
});

// 5 - interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces")
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
