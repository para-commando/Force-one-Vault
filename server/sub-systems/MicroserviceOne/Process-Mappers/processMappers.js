const { processes } = require('../Processes/process');
const logger = require('../../../shared/src/configurations/logger.configurations');
module.exports.processMappers = {
  updateCredCellOneProcess: async (asd) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      const processResponse = await processes.updateCredCellOneCoreProcess(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },
  updateCredCellTwoProcess: async (asd) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      const processResponse = await processes.updateCredCellTwoCoreProcess(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },
  updateCredCellThreeProcess: async (asd) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      const processResponse = await processes.updateCredCellThreeCoreProcess(
        asd
      );
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },
  addNewCredProcess: async (asd) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      const processResponse = await processes.addNewCredProcessCoreProcess(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },

  deleteCredProcess: async (asd) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      const processResponse = await processes.deleteCredProcessCoreProcess(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },
};
