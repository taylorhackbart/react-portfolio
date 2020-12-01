import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/contact/api/user", userData);
  }
};
