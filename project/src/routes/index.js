import express from 'express';
import { helloController } from '../controllers/helloController.js';

export const router = express.Router();

router.get('/', helloController);