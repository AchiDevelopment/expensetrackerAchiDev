import React, { useState, useContext, useEffect } from "react";
import "./context.css";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allTransactions, setAlltransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRadioToggle = (currentId) => {
    setSelectedOption(currentId);
  };

  const handleBalance = () => {
    const amountCNVRT = parseFloat(amount);
    if (amountCNVRT && text && selectedOption === "income") {
      return (
        (balance.totalIncome += amountCNVRT) &&
        (balance.totalBalance += amountCNVRT)
      );
    } else if (amountCNVRT && text && selectedOption === "expense") {
      return (
        (balance.totalExpense += amountCNVRT) &&
        (balance.totalBalance -= amountCNVRT)
      );
    }
  };

  const handleTransactionSubmit = (id) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: `$${amount}`,
      type: selectedOption,
    };
    setAlltransactions([...allTransactions, newTransaction]);
    closeModal();
    setText("");
    setAmount("");
    setSelectedOption(null);
  };

  const deleteTransaction = (id) => {
    setAlltransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => transaction.id !== id);
    });

    const findTransactionToDelete = allTransactions.find(
      (transaction) => transaction.id === id
    );
    const amountCNVRT = parseFloat(
      findTransactionToDelete.amount.replace("$", "")
    );

    setBalance((prevBalance) => {
      const updatedBalance = { ...prevBalance };
      if (findTransactionToDelete.type === "income") {
        updatedBalance.totalIncome -= amountCNVRT;
        updatedBalance.totalBalance -= amountCNVRT;
      } else if (findTransactionToDelete.type === "expense") {
        updatedBalance.totalExpense -= amountCNVRT;
        updatedBalance.totalBalance += amountCNVRT;
      }
      return updatedBalance;
    });
  };

  return (
    <AppContext.Provider
      value={{
        handleBalance,
        balance,
        handleRadioToggle,
        selectedOption,
        allTransactions,
        handleTransactionSubmit,
        deleteTransaction,
        setAmount,
        setText,
        text,
        amount,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
