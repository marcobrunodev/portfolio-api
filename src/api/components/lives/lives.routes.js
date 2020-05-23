import { hasTitle, hasShortTitle } from './lives.middleware';
import { save, getSchedule } from './lives.controller';

const trailerRoutes = (server, prefix) => {
  server.post(`${prefix}/lives`, hasTitle, hasShortTitle, save);
  server.get(`${prefix}/lives/schedule`, getSchedule);
};

export default trailerRoutes;
