const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes)

/**
 *  @description form adopsi
 *  @method GET /add_user
 */
route.get('/add_user', services.add_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);


module.exports = route