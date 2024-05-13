import Config from "./config";
import { getTopPools } from "./services/uniswapService";

console.log("Hello, World!");
getTopPools().then(console.log).catch(console.error);
