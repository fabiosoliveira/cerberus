import { ChainId } from "commons/models/chainId";
import { Exchange } from "commons/models/exchange";
import dotenv from "dotenv";

dotenv.config();

const MONITOR_INTERVAL = Number(process.env.MONITOR_INTERVAL);
const NETWORK = String(process.env.NETWORK);

function getNetwork(network: string): ChainId {
  switch (network) {
    case "goerli":
      return ChainId.GOERLI;
    default:
      return ChainId.MAINNET;
  }
}

const NETWORK2: ChainId = getNetwork(NETWORK);

const EXCHANGE = String(process.env.EXCHANGE);

function getExchange(exchange: string): Exchange {
  switch (exchange) {
    case "pancakeswap":
      return Exchange.PancakeSwap;
    default:
      return Exchange.Uniswap;
  }
}

const EXCHANGE2: Exchange = getExchange(EXCHANGE);

const DATABASE_URL = String(process.env.DATABASE_URL);
const UNISWAP_GRAPH_URL = String(process.env.UNISWAP_GRAPH_URL);
const POOL_COUNT = Number(process.env.POOL_COUNT);

export default {
  MONITOR_INTERVAL,
  NETWORK,
  NETWORK2,
  EXCHANGE,
  EXCHANGE2,
  DATABASE_URL,
  UNISWAP_GRAPH_URL,
  POOL_COUNT,
};
