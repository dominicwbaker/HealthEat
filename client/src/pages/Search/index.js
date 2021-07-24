import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API"
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Alert from "../../Components/Alert";
import Recipe from "../../Components/Recipe";

function Search(props) {
  const query = useRef(null);
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  
  const getData = async () => {
    if (query.current.value !== "") {
      const result = await API.search(query.current.value);
      console.log(result)
    
      setRecipes(result.data);
      console.log(recipes)
      // setQuery("");
      setAlert("");
      if (!result.data) {
        return setAlert("No food with such name");
      }
    } else {
      setAlert("Please fill the form");
    }
  };
  // const onChange = e => setQuery(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  

  return (
    <div>
           <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          ref={query}
          type="text"
          name="query"
          // onChange={onChange}
          // value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default Search;
