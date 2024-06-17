const logger = require('../../../shared/src/configurations/logger.configurations');

const {
  mongoDatabaseClientConnect,
} = require('../../../shared/src/configurations/mongodb.configurations');
let credsVaultModelForceOneVaultDb = '';
(async () => {
  try {
    const { forceOneVaultDbConnection } = await mongoDatabaseClientConnect();
    credsVaultModelForceOneVaultDb =
      require('../../../shared/src/models/creds.mongoose.models')(
        forceOneVaultDbConnection
      );
  } catch (error) {
    console.error('Error establishing MongoDB connection:', error);
  }
})();

module.exports.processes = {
  updateCredCellOneCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${JSON.stringify(asd)}`);

    const updatedDocument =
      await credsVaultModelForceOneVaultDb.findOneAndUpdate(
        {
          mainId: asd.mainId,
        },
        { source: asd.source },
        { new: true, useFindAndModify: false }
      );

    return {
      status: 'success',
      message: 'Data Updated successfully',
      data: updatedDocument,
    };
  },
  updateCredCellTwoCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    const updatedDocument =
      await credsVaultModelForceOneVaultDb.findOneAndUpdate(
        {
          mainId: asd.mainId,
        },
        { uniqueCredId: asd.uniqueCredId },
        { new: true, useFindAndModify: false }
      );

    return {
      status: 'success',
      message: 'Data Updated successfully',
      data: updatedDocument,
    };
  },
  updateCredCellThreeCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    const updatedDocument =
      await credsVaultModelForceOneVaultDb.findOneAndUpdate(
        {
          mainId: asd.mainId,
        },
        { credential: asd.credential },
        { new: true, useFindAndModify: false }
      );

    return {
      status: 'success',
      message: 'Data Updated successfully',
      data: updatedDocument,
    };
  },
  addNewCredProcessCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${JSON.stringify(asd)}`);

    const newCred = new credsVaultModelForceOneVaultDb(asd);

    const savedCred = await newCred.save();
    console.log('Data saved successfully:', savedCred);
    return {
      status: 'success',
      message: 'Data saved successfully',
      data: savedCred,
    };
  },
  deleteCredProcessCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    const deletedDocument =
      await credsVaultModelForceOneVaultDb.findOneAndDelete({
        mainId: asd.mainId,
      });
      console.log("🚀 ~ deleteCredProcessCoreProcess: ~ deletedDocument:", deletedDocument)

    return {
      status: 'success',
      message: 'Data Deleted successfully',
      data: deletedDocument,
    };
  },
};
