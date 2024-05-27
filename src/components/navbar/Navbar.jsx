import React, { useContext } from "react";
import "./navbar.css";
import AddTransaction from "../addtransaction/AddTransaction";
import { useGlobalContext } from "../context/context";
import { GiMoneyStack } from "react-icons/gi";

const Navbar = () => {
  const { openModal } = useGlobalContext();
  return (
    <div className="background">
      <div className="navbar-logo">Expense Tracker</div>
      <div className="transaction-logo">
        <li>
          <GiMoneyStack />
        </li>
        <h3 onClick={openModal}>New Transaction</h3>
        {<AddTransaction />}
      </div>
    </div>
  );
};

export default Navbar;
