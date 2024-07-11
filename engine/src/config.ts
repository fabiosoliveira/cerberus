import { ChainId } from "commons/models/chainId";
import { Exchange } from "commons/models/exchange";
import ConfigBase from "commons/configBase";

export default class Config extends ConfigBase {
  static MONITOR_INTERVAL: number = parseInt(`${process.env.MONITOR_INTERVAL}`);
  static CHARGE_INTERVAL: number = parseInt(`${process.env.CHARGE_INTERVAL}`);

  static NETWORK: string = `${process.env.NETWORK}`;

  static getNetwork(network: string): ChainId {
    switch (network) {
      case "goerli":
        return ChainId.GOERLI;
      default:
        return ChainId.MAINNET;
    }
  }

  static NETWORK2: ChainId = Config.getNetwork(Config.NETWORK);

  static EXCHANGE: string = `${process.env.EXCHANGE}`;

  static getExchange(exchange: string): Exchange {
    switch (exchange) {
      case "pancakeswap":
        return Exchange.PancakeSwap;
      default:
        return Exchange.Uniswap;
    }
  }

  static EXCHANGE2: Exchange = Config.getExchange(Config.EXCHANGE);

  static POOL_COUNT: number = parseInt(`${process.env.POOL_COUNT}`);

  static WS_PORT: number = parseInt(`${process.env.WS_PORT}`);
}
