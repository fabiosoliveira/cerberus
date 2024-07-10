import Pool from "commons/models/pool";
import Config from "./config";
import { getTopPools } from "./services/uniswapService";
import poolsRepository from "./repositories/poolsRepository";

async function executionCycle() {
  const pages = Math.ceil(Config.POOL_COUNT / 1000);

  for (let i = 0; i < pages; i++) {
    const pools = await getTopPools(1000, i * 1000);
    console.log(`Loaded ${pools.length} pools...`);

    for (let j = 0; j < pools.length; j++) {
      const pool = pools[j];
      const poolResult = await poolsRepository.upatePrices(pool);
      if (!poolResult) continue;

      console.log(
        `Price for ${poolResult.symbol} (${
          poolResult.fee / 10000
        }%) is ${Number(poolResult.price0).toFixed(3)}`
      );
    }
  }
}

const CINCO_MINUTOS = 5 * 60 * 1000;

setInterval(executionCycle, CINCO_MINUTOS);

executionCycle();

console.log("App is running...");
