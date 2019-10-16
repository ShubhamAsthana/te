export {};

const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/*.ts'],
  basePath: '/',
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      description: 'API For FormsModule Assesment',
      swagger: '2.0',
      title: 'ASSESMENT API',
      version: '1.0.0',
    },
  },
};

const specs = swaggerJsdoc(options);

module.exports = specs;