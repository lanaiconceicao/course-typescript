const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
  port: 3000,
  dbUrl: `mongodb+srv://${dbUser}:${dbPass}@cluster0.bh0iw7q.mongodb.net/?retryWrites=true&w=majority`,
  env: "development"
}
