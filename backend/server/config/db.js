const Transaction = require('../models/transaction.js');

const saveTransaction = async (transaction) => {
  const t = new Transaction(transaction);
  await t.save();
};

module.exports = saveTransaction;
