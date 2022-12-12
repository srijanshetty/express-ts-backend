import './utils/loadEnv';

import EnvService from './services/env';

const services = [EnvService];
for (const service of services) {
  service.init();
  console.log('initing service');
}

import App from './app';
import AuditController from './controllers/audit/audit.controller';

// Setup db connection and then start app
const app = new App([new AuditController()]);
app.listen();
