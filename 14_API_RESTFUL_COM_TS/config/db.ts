import mongoose from "mongoose";
import config from "config";

async function connect() {

  const dbUrl = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUrl);
    console.log("Conectou ao banco de dados");
  } catch (e) {
    console.log("Não foi possível conectar");
    console.log(`Erro: ${e}`);
  };
};

export default connect;
