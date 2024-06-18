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
      throw err;
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
      throw err;
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
      throw err;
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
      throw err;
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
      throw err;
    }
  },
  getAllCredsProcess: async () => {

    try {

      logger.warn('This is a warning message.');
      const processResponse = await processes.getAllCredsProcessCoreProcess();
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
      throw err;
    }
  }
};
