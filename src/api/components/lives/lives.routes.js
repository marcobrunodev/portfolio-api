import { save, getSchedule } from './lives.controller';

const trailerRoutes = (server, prefix) => {
  server.post(`${prefix}/lives`, save);
  server.get(`${prefix}/lives/schedule`, getSchedule);
};

export default trailerRoutes;
