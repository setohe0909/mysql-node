import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import infoClientsRoutes from './infoClients.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount clients routes at /clients
router.use('/clients', infoClientsRoutes);

export default router;
