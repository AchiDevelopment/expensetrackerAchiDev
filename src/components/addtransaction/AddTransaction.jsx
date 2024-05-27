import React, { useState } from "react";
import "./addtransaction.css";
import { useGlobalContext } from "../context/context";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const AddTransaction = () => {
  const {
    isModalOpen,
    closeModal,
    selectedOption,
    handleRadioToggle,
    text,
    amount,
    setAmount,
    setText,
    handleTransactionSubmit,
    handleBalance,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      handleTransactionSubmit();
    }
    handleBalance();
  };

  return (
    <div className={`${isModalOpen ? "show-modal" : "hide-modal"}`}>
      <div className="transaction-container">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        <form onSubmit={handleSubmit}>
          <div className="modal-navbar">
            <h1 className="modal-navbar-heading">Calculate Your Expenses</h1>
          </div>
          <div className="modal-inputs">
            <div>
              <h2>Please type the name of your transaction</h2>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Transaction name"
                required
              />
            </div>
            <div className="amount-container">
              <h2>Please type the amount of your transaction</h2>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="Transaction amount"
                required
              />
            </div>
            <div className="radio-container">
              <p
                className={`${
                  selectedOption === "income" ? "show-income" : "color"
                }`}
                onClick={() => handleRadioToggle("income")}
              >
                income <IoIosRadioButtonOn />
              </p>
              <p
                className={`${
                  selectedOption === "expense" ? "show-expense" : "color"
                }`}
                onClick={() => handleRadioToggle("expense")}
              >
                expense <IoIosRadioButtonOn />
              </p>
            </div>
            <div className="transaction-confirmation-btns">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
