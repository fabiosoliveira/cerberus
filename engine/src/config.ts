import dotenv from "dotenv";

dotenv.config();

const MONITOR_INTERVAL = Number(process.env.MONITOR_INTERVAL);
const NETWORK = String(process.env.NETWORK);
const EXCHANGE = String(process.env.EXCHANGE);
const DATABASE_URL = String(process.env.DATABASE_URL);
const UNISWAP_GRAPH_URL = String(process.env.UNISWAP_GRAPH_URL);
const POOL_COUNT = Number(process.env.POOL_COUNT);

export default {
  MONITOR_INTERVAL,
  NETWORK,
  EXCHANGE,
  DATABASE_URL,
  UNISWAP_GRAPH_URL,
  POOL_COUNT,
};
