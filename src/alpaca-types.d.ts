declare module '@alpacahq/alpaca-trade-api' {
    interface AlpacaConfig {
        keyId: string;
            secretKey: string;
                paper?: boolean;
                  }

                    interface Bar {
                        t: string;
                            o: number;
                                h: number;
                                    l: number;
                                        c: number;
                                            v: number;
                                              }

                                                interface BarsResponse {
                                                    [symbol: string]: Bar[];
                                                      }

                                                        class AlpacaClient {
                                                            constructor(config: AlpacaConfig);
                                                                getBars(timeframe: string, symbol: string, options: any): Promise<BarsResponse>;
                                                                  }

                                                                    export = AlpacaClient;
                                                                    }
