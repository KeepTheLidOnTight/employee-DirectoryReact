import axios from "axios";
//using the API call given to us by K
export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};

