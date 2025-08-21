// src/connectAlpaca.ts
import * as dotenv from 'dotenv';
dotenv.config();

// Verificar que las variables de entorno se cargaron correctamente
console.log('🔍 Verificando variables de entorno...');
console.log('ALPACA_KEY_ID:', process.env.ALPACA_KEY_ID ? '****' + process.env.ALPACA_KEY_ID.slice(-4) : 'NO ENCONTRADA');
console.log('ALPACA_SECRET_KEY:', process.env.ALPACA_SECRET_KEY ? '****' + process.env.ALPACA_SECRET_KEY.slice(-4) : 'NO ENCONTRADA');

// Importar Alpaca usando import (compatible con commonjs gracias a esModuleInterop)
import Alpaca from '@alpacahq/alpaca-trade-api';

async function conectarAlpaca() {
    try {
            // Validar que tenemos las credenciales necesarias
                    if (!process.env.ALPACA_KEY_ID || !process.env.ALPACA_SECRET_KEY) {
                                throw new Error('Faltan las credenciales de Alpaca en las variables de entorno');
                                        }

                                                console.log('🚀 Iniciando conexión con Alpaca...');
                                                        
                                                                // Configurar cliente de Alpaca
                                                                        const client = new Alpaca({
                                                                                    keyId: process.env.ALPACA_KEY_ID,
                                                                                                secretKey: process.env.ALPACA_SECRET_KEY,
                                                                                                            paper: true
                                                                                                                    });

                                                                                                                            // Obtener información de la cuenta
                                                                                                                                    const account = await client.getAccount();
                                                                                                                                            
                                                                                                                                                    // Mostrar resultados
                                                                                                                                                            console.log('\n✅ CONEXIÓN EXITOSA A ALPACA:');
                                                                                                                                                                    console.log('════════════════════════════════════════');
                                                                                                                                                                            console.log('• Estado:', account.status);
                                                                                                                                                                                    console.log('• Buying Power:', account.buying_power);
                                                                                                                                                                                            console.log('• Cash:', account.cash);
                                                                                                                                                                                                    console.log('• Divisa:', account.currency);
                                                                                                                                                                                                            console.log('════════════════════════════════════════\n');
                                                                                                                                                                                                                    
                                                                                                                                                                                                                        } catch (error) {
                                                                                                                                                                                                                                console.error('\n❌ Error en la conexión:');
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                // Manejo seguro del error de tipo unknown
                                                                                                                                                                                                                                                        if (error instanceof Error) {
                                                                                                                                                                                                                                                                    console.error(error.message);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                        console.error('Error desconocido:', error);
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                // Si hay respuesta de la API, mostrar detalles
                                                                                                                                                                                                                                                                                                                        if (typeof error === 'object' && error !== null && 'response' in error) {
                                                                                                                                                                                                                                                                                                                                    const apiError = error as { response?: { data?: unknown } };
                                                                                                                                                                                                                                                                                                                                                console.error('Detalles de la API:', apiError.response?.data);
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                            // Ejecutar la función principal
                                                                                                                                                                                                                                                                                                                                                            conectarAlpaca();