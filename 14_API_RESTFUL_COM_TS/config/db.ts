import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "./logger";

async function connect() {

  const dbUrl = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUrl);
    Logger.info("Conectou ao banco de dados");
  } catch (e) {
    Logger.error("Não foi possível conectar");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  };
};

export default connect;
