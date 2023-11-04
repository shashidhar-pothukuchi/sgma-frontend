import { useState } from "react";
import _ from "lodash";

export const Transaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      itemid: 0,
      quantity: 0,
      updatedQuantity: 0,
      type: "Quantity",
      description: "Added new Item",
    },
  ]);

  const recordTransaction = (transactionDetails) => {
    const lastTransactionId =
      transactions.length > 0 ? transactions[transactions.length - 1].id : 0;
    const newTransaction = { id: lastTransactionId + 1, ...transactionDetails };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  const transactionsGroupedByType = _.groupBy(transactions, "type");

  const mostRecent5TransactionsByType = _.mapValues(
    transactionsGroupedByType,
    (group) => _.takeRight(group, 5)
  );

  return {
    transactions,
    recordTransaction,
    deleteTransaction,
    mostRecent5TransactionsByType,
  };
};
