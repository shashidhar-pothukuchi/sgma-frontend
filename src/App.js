// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
  const {
    inventory,
    updateInventory,
    updatedefInventory,
    updateExpiryDate,
    addNewItem,
    deleteItem,
  } = Inventory();

  const { transactions, recordTransaction } = Transaction();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container-fluid pt-3">
                  <Search addNewItem={addNewItem} />
                  <h1 className="pt-4 display1">Inventory</h1>
                  {inventory.map((item) => (
                    <p>{item.expiryDate}</p>
                  ))}
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
