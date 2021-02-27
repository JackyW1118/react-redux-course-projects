import axios from "axios";

//custom axios client
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID n9LE5KLcYAJh6ajKBnGcG2rrv0eCAkPKcVFxPcCCb98",
  },
});
