"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger-spec');
module.exports = app.get('/', swaggerUi.setup(specs));
