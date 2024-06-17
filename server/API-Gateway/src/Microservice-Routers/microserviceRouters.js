const app = require('../app');
const {
  updateCredCellOneMiddlewares,
  updateCredCellTwoMiddlewares,
  updateCredCellThreeMiddlewares,
  addNewCredMiddlewares,
  deleteCredMiddlewares,
  getAllCredsMiddlewares,
} = require('../Middlewares/Route-Middlewares/expressRateLimit.middleware');
const Joi = require('joi');
const {
  processMappers,
} = require('../../../sub-systems/MicroserviceOne/Process-Mappers/processMappers');
 
const logger = require('../../../shared/src/configurations/logger.configurations');
// API specific Rate-limiting Middleware
app.post(
  '/updateCredCellOne',
  updateCredCellOneMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    try {
      const schema = Joi.object({
        mainId: Joi.string().default(null),
        source: Joi.string().default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {

        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.updateCredCellOneProcess(validationResult.value);

        logger.info(
          '🚀 ~ file: microserviceRouters.js:31 ~ response:',
          response
        );
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);

app.post(
  '/updateCredCellTwo',
  updateCredCellTwoMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    try {
      const schema = Joi.object({
        mainId: Joi.string().default(null),
        uniqueCredId: Joi.string().default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.process1(validationResult.value);

        logger.info(
          '🚀 ~ file: microserviceRouters.js:31 ~ response:',
          response
        );
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);
app.post(
  '/updateCredCellThree',
  updateCredCellThreeMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    try {
      const schema = Joi.object({
        mainId: Joi.string().default(null),
        credential: Joi.string().default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.process1(validationResult.value);

        logger.info(
          '🚀 ~ file: microserviceRouters.js:31 ~ response:',
          response
        );
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);
app.post(
  '/addNewCred',
  addNewCredMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    try {
      const schema = Joi.object({
        source: Joi.string().default(null),
        uniqueCredId: Joi.string().default(null),
        credential: Joi.string().default(null),
        mainId: Joi.string().default(null),
        cellTwoID: Joi.string().default(null),
        cellOneID: Joi.string().default(null),
        cellThreeID: Joi.string().default(null),
        isEditNotClicked: Joi.boolean().default(null),
        isHidden: Joi.boolean().default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.addNewCredProcess(validationResult.value);

        logger.info(
          '🚀 ~ file: microserviceRouters.js:31 ~ response:',
          response
        );
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);

app.post(
  '/deleteCred',
  deleteCredMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    console.log('🚀 ~ req:', req.body);
    try {
      const schema = Joi.object({
        mainId: Joi.string().default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.deleteCredProcess(validationResult.value);

        logger.info(
          '🚀 ~ file: microserviceRouters.js:31 ~ response:',
          response
        );
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);

app.post(
  '/getAllCreds',
  getAllCredsMiddlewares.expressRateLimiterMiddleware,
  async (req, res, next) => {
    try {
      const response = await processMappers.process1(validationResult.value);

      logger.info('🚀 ~ file: microserviceRouters.js:31 ~ response:', response);
      res.json({
        response: response,
      });
    } catch (error) {
      logger.error('This is an error message.');

      res.status(400).json({ error: error });
    }
  }
);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
