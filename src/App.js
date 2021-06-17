import logo from "./logo.svg";
import "./App.css";
import WalletValue from "./components/walletValue";
import React from "react";

import FarmListings from "./components/FarmListings";

function App() {
    return (
        <div className="App">
            <WalletValue />
            <FarmListings />
        </div>
    );
}

export default App;
