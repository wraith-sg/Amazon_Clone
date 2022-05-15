import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import { Checkout } from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  
  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: auth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
