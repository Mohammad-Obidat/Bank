const express = require('express');
const Transaction = require('../models/transaction.js');
const saveTransaction = require('../config/db.js');
const router = express.Router();

router.get('/', async (req, res) => {
  let transactions = await Transaction.find({});
  try {
    res.send(transactions);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/breakdown', async (req, res) => {
  let transactions = await Transaction.aggregate([
    { $group: { _id: '$category', amount: { $sum: '$amount' } } },
  ]);
  try {
    res.send(transactions);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.post('/operation', async (req, res) => {
  let operation = req.body;
  try {
    await saveTransaction(operation);
    res.status(201).send(operation);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.delete('/transaction/:transactionId', async (req, res) => {
  let transactionId = req.params.transactionId;
  try {
    let transaction = await Transaction.findOneAndDelete({
      _id: transactionId,
    });
    res.status(200).send(transaction);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
