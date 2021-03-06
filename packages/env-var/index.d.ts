export type ENVIORNEMNT = 'local' | 'test' | 'qa' | 'prod';

interface EnvOpts<T> {
  local?: T;
  test?: T;
  qa?: T;
  prod?: T;
}

declare function envVar<T>(
  envOpts: EnvOpts<T>,
  windowOverride?: Window,
  defaultVar?: T
): T;

declare function setEnvironments<T>(envs: EnvOpts<T>, override?: boolean): void;

export { setEnvironments };

export default envVar;
