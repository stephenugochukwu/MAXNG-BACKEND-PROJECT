import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: Number(process.env.PORT) || 7000,
  API_BASE_URL: "https://swapi.dev/api/",

  PASSWORD: String(process.env.PASSWORD),
  USERNAME: String(process.env.USERNAME)
};
export default CONFIG;
