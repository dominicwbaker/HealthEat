import React, { useState } from "react";
// import logo from './logo.svg';
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import Recipe from "./Components/Recipe";
// import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import MealPlan from "./pages/MealPlan";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (

    <div className="App">
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mealplan" component={MealPlan} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </div>


  );
}
export default App;
