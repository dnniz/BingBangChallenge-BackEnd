type TEnv = string | number | boolean| undefined;

type TServer = {
  port: TEnv;
  killTimeout: TEnv;
  dev: TEnv;
  pokemonApiUrl: TEnv;
};

type Tables = {
  [key: string]: TEnv;
}
type TClubPersonal = {
  baseUrl: TEnv;
  token: TEnv;
  environment: TEnv;
  recommendedUrl: TEnv;
  recommendedToken: TEnv;
};

type TConfig = {
  server: TServer;
};

export { TConfig, TEnv };
