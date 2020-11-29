import axios from "axios";

export default {
  savePost: function(userData) {
    return axios.post("/contact/api/submit", userData);
  }
};