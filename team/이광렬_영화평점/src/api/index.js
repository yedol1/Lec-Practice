import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://yts.mx/api/v2",
});

export default axios;
