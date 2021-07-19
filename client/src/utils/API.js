import axios from "axios";

// Export an object containing methods we'll use for accessing the edamam API

export default {
  search: function(query) {
    return axios.get(`/search?q=${query}`);
  }
}