import React from "react";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "@stripe/stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollToTop } from "./components";

function App() {
  toast.configure();

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
