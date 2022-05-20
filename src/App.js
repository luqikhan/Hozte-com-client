import React from "react";
import Routes from "./routes/Routes";
import "@stripe/stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollToTop } from "./components";

function App() {
  toast.configure();

  return (
    <div className="App">
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </div>
  );
}

export default App;
