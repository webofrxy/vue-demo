'use strict'

import express from 'express'
import Admin from '../controller/admin/admin'
const routes = express.Router();
routes.post('/login', Admin.login)
