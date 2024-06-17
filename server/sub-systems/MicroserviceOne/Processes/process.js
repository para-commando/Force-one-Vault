const logger = require('../../../shared/src/configurations/logger.configurations');

const {
  mongoDatabaseClientConnect,
} = require('../../../shared/src/configurations/mongodb.configurations');
let credsVaultModelForceOneVaultDb = '';
(async () => {
  try {
    const { forceOneVaultDbConnection } = await mongoDatabaseClientConnect();
    // console.log('🚀 ~ forceOneVaultDbConnection:', forceOneVaultDbConnection);
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
    logger.info(`This is the function argument : ${asd}`);

    return asd;
  },
  updateCredCellTwoCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    return asd;
  },
  updateCredCellThreeCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    return asd;
  },
  addNewCredProcessCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);
    // const { forceOneVaultDbConnection } = await  mongoDatabaseClientConnect();
    // console.log('🚀 ~ forceOneVaultDbConnection:', forceOneVaultDbConnection);
    // const credsVaultModelForceOneVaultDb =
    //   require('../../../shared/src/models/creds.mongoose.models')(
    //     forceOneVaultDbConnection
    //   );
    const newCred = new credsVaultModelForceOneVaultDb({
      source: 'exampleSource',
      uniqueCredId: 'exampleCredId',
      credential: 'exampleCredential',
      cellOneID: 'exampleCellOneID',
      cellTwoID: 'exampleCellTwoID',
      cellThreeID: 'exampleCellThreeID',
      isEditNotClicked: true,
      isHidden: false,
    });

    const savedCred = await newCred.save();
    console.log('Data saved successfully:', savedCred);
    return asd;
  },
  deleteCredProcessCoreProcess: async (asd) => {
    logger.info(`This is the function argument : ${asd}`);

    return asd;
  },
};
