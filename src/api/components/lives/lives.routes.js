import {
  hasShortTitle,
  hasTitle,
  hasStartDate,
  hasFinishDate,
  hasGoals,
  hasDescription,
  hasShortDescription,
} from './lives.middleware';
import { save, getSchedule } from './lives.controller';

const trailerRoutes = (server, prefix) => {
  server.post(
    `${prefix}/lives`,
    hasShortTitle,
    hasTitle,
    hasStartDate,
    hasFinishDate,
    hasGoals,
    hasDescription,
    hasShortDescription,
    save
  );
  server.get(`${prefix}/lives/schedule`, getSchedule);
};

export default trailerRoutes;
