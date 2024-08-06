import { sign, verify } from "commons/services/cryptoService";

const AUTH_MSG: string = "Authenticating to Cerberus. Timestamp: <timestamp>";

async function start() {
  if (!process.argv.length)
    return console.error(`The parameter privateKey is required.`);

  const pk = process.argv[process.argv.length - 1];

  const timestamp = Date.now();
  const message = AUTH_MSG.replace("<timestamp>", `${timestamp}`);
  const secret = await sign(pk, message);
  const wallet = verify(message, secret);

  console.log(`{
        "secret": "${secret}",
        "timestamp": ${timestamp},
        "wallet": "${wallet}"
    }`);
}

start();
