// Importaciones verificadas
import { BacktestService } from './services/backtestService';
import { TradingStrategy } from './strategies/strategies';

console.log("Iniciando M1LLON Trading Bot...");

// Inicializacin de servicios
try {
  const backtestService = new BacktestService();
    const tradingStrategy = new TradingStrategy();
      console.log(" Servicios inicializados correctamente");
      } catch (error) {
        console.error(" Error inicializando servicios:", error);
        }

        console.log(" Sistema M1LLON inicializado correctamente");