const ENABLE_DEV = true;
const BACKEND_URI = '';
const BACKEND_URI_DEV = 'http://127.0.0.1:5000/api';

export const appEnv = {
  isDevEnv: ENABLE_DEV,
  backendUri: ENABLE_DEV ? BACKEND_URI_DEV : BACKEND_URI,
  fixtureEnabled: false
};
