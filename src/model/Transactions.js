import { useState } from "react";
import _ from "lodash";

export const Transaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      itemid: 0,
      quantity: 0,
      updatedQuantity: 0,
      date: "05-11-2023",
      type: "Quantity",
      description: "Added new Item",
    },
    {
      id: 2,
      itemid: 1,
      quantity: 0,
      updatedQuantity: 10,
      date: "11-03-2023",
      type: "Quantity",
      description: "Added 10",
    },
    {
      id: 3,
      itemid: 1,
      quantity: 0,
      updatedQuantity: 10,
      date: "11-03-2023",
      type: "defQuantity",
      description: "Updated purchase quantity",
    },
    {
      id: 4,
      itemid: 2,
      quantity: 0,
      updatedQuantity: 6,
      date: "11-04-2023",
      type: "Quantity",
      description: "Added 6",
    },
    {
      id: 5,
      itemid: 2,
      quantity: 0,
      updatedQuantity: 10,
      date: "11-04-2023",
      type: "defQuantity",
      description: "Updated purchase quantity",
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

  const recentTransactions = (itemid) => {
    const transactionsGroupedById = transactions.filter(
      (transaction) => transaction.itemid === itemid
    );
    return _.takeRight(transactionsGroupedById, 5);
  };

  return {
    transactions,
    recordTransaction,
    deleteTransaction,
    recentTransactions,
  };
};
