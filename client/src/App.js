import React, { useState } from "react";
import logo from './logo.svg';
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Components/Recipe";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  // const [query, setQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);
  // const [alert, setAlert] = useState("");
  // const APP_ID = "4e9f05eb";
  // const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  
  
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // const getData = async () => {
  //   if (query !== "") {
  //     const result = await Axios.get(url);
  //     if (!result.data.more) {
  //       return setAlert("No food with such name");
  //     }
  //     console.log(result);
  //     setRecipes(result.data.hits);
  //     setQuery("");
  //     setAlert("");
  //   } else {
  //     setAlert("Please fill the form");
  //   }
  // };
  // const onChange = e => setQuery(e.target.value);
  // const onSubmit = e => {
  //   e.preventDefault();
  //   getData();
  // };
  return (

    <div className="App">
      <h1>Health-Eat</h1>
      {/* <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div> */}
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <route exact path="/dashboard" component={Dashboard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </div>


  );
}
export default App;
