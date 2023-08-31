declare module 'dotenv' {
  interface DotenvParseOutput {
    DOMINIO_1: string;
    DOMINIO_2: string;
    DOMINIO_3: string;
    DOMINIO_4: string;
    DOMINIO_5: string;
    DOMINIO_6: string;
    SERVICO_ID: string;
    TEMPLATE_ID: string;
    PUBLIC_KEY: string;
  }

  interface ProcessEnv extends DotenvParseOutput {}
}