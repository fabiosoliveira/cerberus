import dotenv from "dotenv";
dotenv.config();

import { encrypt } from "commons/services/cryptoService";

function start() {
  if (!process.argv.length)
    return console.error(`The parameter message is required.`);

  const lastIndex = process.argv[process.argv.length - 1];
  console.log(`Encrypting ${lastIndex}`);
  console.log(encrypt(lastIndex));
}

start();
