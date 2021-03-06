import AvApi from '../api';
import flattenObject from '../flattenObject';

export default class AvLogMessages extends AvApi {
  constructor({ http, promise, merge, config }) {
    const options = {
      name: 'log-messages',
      ...config,
    };
    super({
      http,
      promise,
      merge,
      config: options,
    });
  }

  send(level, entries) {
    delete entries.level;
    const payload = { level, entries };
    const flattened = flattenObject(payload);
    return Object.keys(flattened).reduce((accum, key) => {
      accum.append(key, flattened[key]);
      return accum;
    }, new FormData());
  }

  debug(entries) {
    return this.sendBeacon(this.send('debug', entries));
  }

  info(entries) {
    return this.sendBeacon(this.send('info', entries));
  }

  warn(entries) {
    return this.sendBeacon(this.send('warn', entries));
  }

  error(entries) {
    return this.sendBeacon(this.send('error', entries));
  }
}
