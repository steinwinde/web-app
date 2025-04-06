// `.env.ts` is generated by the `npm run env` command
import env from './.env';

// The `window['env']` object is loaded in the `index.html` file
const loadedEnv = window['env'] || {};

export const environment = {
  production: true,
  version: env.mifos_x.version,
  hash: env.mifos_x.hash,
  // For connecting to server running elsewhere update the tenant identifier
  fineractPlatformTenantId: loadedEnv['fineractPlatformTenantId'] || 'default',
  fineractPlatformTenantIds: loadedEnv['fineractPlatformTenantIds'] || 'default',
  // For connecting to others servers running elsewhere update the base API URL
  baseApiUrls:
    loadedEnv['fineractApiUrls'] ||
    'https://sandbox.mifos.community,https://demo.mifos.community,https://localhost:8443,' + window.location.origin,
  // For connecting to server running elsewhere set the base API URL
  baseApiUrl:
    loadedEnv['fineractApiUrl'] ||
    (loadedEnv['fineractApiUrls']?.length > 0 ? loadedEnv['fineractApiUrls'][0] : window.location.origin),
  oauthServerUrl: loadedEnv['oauthServerUrl'] || loadedEnv['fineractApiUrl'] + loadedEnv['apiProvider'],
  allowServerSwitch: env.allow_switching_backend_instance,
  apiProvider: loadedEnv['apiProvider'] || '/fineract-provider/api',
  apiVersion: loadedEnv['apiVersion'] || '/v1',
  serverUrl: '',
  oauth: {
    enabled: loadedEnv['oauthServerEnabled'] || false, // For connecting to Mifos X using OAuth2 Authentication change the value to true
    serverUrl: loadedEnv['oauthServerUrl'] || '',
    appId: loadedEnv['oauthAppId'] || ''
  },
  warningDialog: {
    title: 'Warning',
    content:
      'This system is for authorized use only. Unauthorized access will result in possible legal action. By accessing this system, you acknowledge that you are authorized to do so and that all data stored and processed here is confidential.',
    buttonText: 'Close'
  },
  defaultLanguage: loadedEnv['defaultLanguage'] || 'en-US',
  supportedLanguages:
    loadedEnv['supportedLanguages'] || 'cs-CS,de-DE,en-US,es-MX,fr-FR,it-IT,ko-KO,lt-LT,lv-LV,ne-NE,pt-PT,sw-SW',
  preloadClients: loadedEnv['preloadClients'] || true,

  defaultCharDelimiter: loadedEnv['defaultCharDelimiter'] || ',',

  displayBackEndInfo: loadedEnv['displayBackEndInfo'] || 'true',
  displayTenantSelector: loadedEnv['displayTenantSelector'] || 'true',
  // Time in seconds, default 60 seconds
  waitTimeForNotifications: loadedEnv['waitTimeForNotifications'] || 60,
  // Time in seconds, default 30 seconds
  waitTimeForCOBCatchUp: loadedEnv['waitTimeForCOBCatchUp'] || 30,
  session: {
    timeout: {
      idleTimeout: loadedEnv['sessionIdleTimeout'] || 300000 // 5 minutes
    }
  },

  vNextApiUrl: window['env']['vNextApiUrl'] || 'https://apis.mifos.community',
  vNextApiProvider: window['env']['vNextApiProvider'] || '/vnext1',
  vNextApiVersion: window['env']['vNextApiVersion'] || '/v1.0',
  interbankTransfers: window['env']['interbankTransfers'] || false,

  minPasswordLength: loadedEnv['minPasswordLength'] || 12
};

// Server URL
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
