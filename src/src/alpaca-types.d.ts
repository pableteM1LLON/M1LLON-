declare module '@alpacahq/alpaca-trade-api' {
      interface AlpacaConfig {
          keyId: string;
              secretKey: string;
                  paper?: boolean;
                    }

                      interface Bar {
                          t: string; // timestamp
                              o: number; // open
                                  h: number; // high
                                      l: number; // low
                                          c: number; // close
                                              v: number; // volume
                                                }

                                                  interface BarsResponse {
                                                      [symbol: string]: Bar[];
                                                        }

                                                          class AlpacaClient {
                                                              constructor(config: AlpacaConfig);
                                                                  getBars(timeframe: string, symbol: string, options: { start: string; end: string; limit: number }): Promise<BarsResponse>;
                                                                    }

                                                                      export = AlpacaClient;
                                                                      }
