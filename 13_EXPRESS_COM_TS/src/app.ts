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

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "blue",
    sizes: ["P", "M", "G"]
  });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id

  if(id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 110.90,
    }
    return res.json(product);
  } else {
    return res.send("Produto não encontrado!");
  }
});

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id
  const reviewId = req.params.reviewId

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
});

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id ${req.params.id}`);
  return res.send("O usuário foi encontrado");
}

app.get("/api/user/:id", getUser);


app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
