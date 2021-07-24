import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Container from "../../Components/Container";
import SearchForm from "../../Components/SearchForm";
import SearchResults from "../../Components/SearchResults";
import Alert from "../../Components/Alert";
import useDebounce from "../../utils/debounceHook";
import Recipe from "../../Components/Recipe";

function Search(props) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name")
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };
  const onChange = e => setQuery(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    getData();
  };
  // const [search, setSearch] = useState("Wikipedia");
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState("");

  // const debouncedSearchTerm = useDebounce(search, 500);

  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }

  //   if (debouncedSearchTerm) {
  //     API.searchTerms(search)
  //       .then(res => {
  //         if (res.data.length === 0) {
  //           throw new Error("No results found.");
  //         }
  //         if (res.data.status === "error") {
  //           throw new Error(res.data.message);
  //         }
  //         setTitle(res.data[1][0]);
  //         setUrl(res.data[3][0]);
  //       })
  //       .catch(err => setError(err));
  //   }
  // }, [debouncedSearchTerm]);

  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };

  return (
    <div>
      {/* <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={title} url={url} />
      </Container> */}
           <form onSubmit={onSubmit} className="search-form">
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
      </div>
    </div>
  );
}

export default Search;
