import { config } from "dotenv";
import { CrossoverStrategy } from "./strategies.js";
import { SYMBOL, TIMEFRAME, TAKE_PROFIT, STOP_LOSS, POSITION_SIZE } from "./config.js";

config();

async function main() {
  console.log("Backtest iniciado...");
    console.log(`Parámetros: ${SYMBOL}, ${TIMEFRAME}, ${TAKE_PROFIT}, ${STOP_LOSS}, ${POSITION_SIZE}`);
      // Aquí luego añadiremos la lógica de cargar datos y ejecutar la estrategia
      }

      main();