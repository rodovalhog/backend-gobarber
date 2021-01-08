import { Router } from 'express';
import appointmentsRouter from './appointmentsRouter';

const routes = Router();

// Middleware que intecepta todos as rotas que tem /appintments
routes.use('/appointments', appointmentsRouter);

export default routes;
