import schedule from 'node-schedule';

import EnvService from '../services/env';
import logger from '../services/logger';

const heartBeat = () => {
  logger.info('heartBeat');
};

async function scheduler() {
  console.log('Started scheduler job');

  const services = [EnvService];
  for (const service of services) {
    service.init();
    logger.info('Initing Service');
  }

  // Once a day jobs
  // schedule.scheduleJob('30 18 * * *', updateSitemap); // 18:30 UTC = 00:00 IST

  // Run HeartBeat job every 5 minutes.
  schedule.scheduleJob('* */5 * * * *', heartBeat);
}

scheduler();
