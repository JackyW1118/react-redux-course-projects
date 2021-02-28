import axios from "axios";

const KEY = "AIzaSyDm1h6EEuzba5VPogsPRP3pc0SA9IYAtA8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  //query string parameters
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
  },
});
