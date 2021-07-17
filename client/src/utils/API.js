import axios from "axios";

const BASEURL = "https://api.edamam.com/search?q=";
const API_KEY = process.env.REACT_APP_API_KEY
const APP_ID = process.env.REACT_APP_API_ID

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function(query) {
    return axios.get(
      BASEURL + query + APP_ID + API_KEY
    );
  }
};