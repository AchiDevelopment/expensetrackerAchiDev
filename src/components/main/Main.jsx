import React from "react";
import "./main.css";
import { useGlobalContext } from "../context/context";
import TransactionChartSummerty from "../chart/ChartComponent";

const Main = () => {
  const { allTransactions, balance, deleteTransaction } = useGlobalContext();

  return (
    <div className="main-background">
      <div className="main-frame">
        <div className="finance-desc">
          <h2>Total Balanace : {balance.totalBalance}</h2>
          <h3 className="income-balance">
            Total Income : {balance.totalIncome}
          </h3>
          <h3 className="expense-balance">
            Total Expense : {balance.totalExpense}
          </h3>
        </div>
        <div className="chart-cover"></div>
        <div className="chart-container">
          <div className="chart-circle">
            <TransactionChartSummerty
              income={balance.totalIncome}
              expense={Math.abs(balance.totalExpense)}
            />
          </div>

          <h4 className="chart-income">
            Income <span>i</span>
          </h4>
          <h4 className="chart-expense">
            Expense <span>e</span>
          </h4>
        </div>
        <div className="transactions-history">
          {allTransactions.length > 0 &&
            allTransactions.map((item) => {
              const { id, text, amount, type } = item;
              return (
                <ul key={id} className="transactions-history-list">
                  <li>
                    <h2
                      className={`${
                        type === "income"
                          ? "transactions-history-income"
                          : "transactions-history-expense"
                      }`}
                    >
                      {text}
                    </h2>
                    <h2
                      className={`${
                        type === "expense"
                          ? "transactions-history-expense"
                          : "transactions-history-income"
                      }`}
                    >
                      {amount}
                    </h2>
                    <button
                      onClick={() => deleteTransaction(id)}
                      className={`${
                        type === "income"
                          ? "transactions-history-income"
                          : "transactions-history-expense"
                      }`}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
