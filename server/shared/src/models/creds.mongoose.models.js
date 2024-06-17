module.exports = (connection) => {
const mongoose = require('mongoose');

const credsVaultSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },
    uniqueCredId: {
      type: String,
      required: true,
    },
    credential: {
      type: String,
      required: true,
    },
    cellOneID: {
      type: String,
      required: true,
    },
    cellTwoID: {
      type: String,
      required: true,
    },
    cellThreeID: {
      type: String,
      required: true,
    },
    isEditNotClicked: {
      type: Boolean,
      required: true,
    },
    isHidden: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, collection: 'ForceOneVaultCreds' } // Changed to a more typical format
);

// Export the model properly
 return connection.model('CredsVault', credsVaultSchema);
};