import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Search from "./components/Search";
import Item from "./components/Item";
import Grocerylist from "./components/Grocerylist";
import CreateListButton from "./components/CreateListButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import "./index.css";
import { Inventory } from "./model/Inventory";
import { Transaction } from "./model/Transactions";

function App() {
  const [name, setname] = useState("");
  const [isSet, setisSet] = useState(false);
  const {
    inventory,
    updateInventory,
    updatedefInventory,
    updateExpiryDate,
    addNewItem,
    deleteItem,
  } = Inventory();

  const setuname = (name) => {
    setname(name);
    setisSet(true);
  };

  const setLogout = () => {
    setname(" ");
  };

  const { transactions, recordTransaction, recentTransactions } = Transaction();
  return (
    <Router>
      <div className="App">
        <Navbar username={name} isSet={isSet} setLogout={setLogout} />
        <Routes>
          <Route path="/" element={<Login setuname={setuname} />} />
          <Route
            path="/Home"
            element={
              <>
                <div className="container-fluid pt-3">
                  <Search addNewItem={addNewItem} />
                  <h1 className="pt-4 display1">Inventory</h1>
                  {/* {inventory.map((item) => (
                    <p>{item.expiryDate}</p>
                  ))} */}
                  <container fluid>
                    <Row>
                      {inventory.map((item) => (
                        <Item
                          details={item}
                          updateInventory={updateInventory}
                          updatedefInventory={updatedefInventory}
                          updateExpiryDate={updateExpiryDate}
                          deleteItem={deleteItem}
                          transactions={transactions}
                          recordTransaction={recordTransaction}
                          recentTransactions={recentTransactions}
                        />
                      ))}
                    </Row>
                  </container>
                  <CreateListButton />
                </div>
              </>
            }
          />
          <Route
            path="/createlist"
            element={<Grocerylist items={inventory} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
