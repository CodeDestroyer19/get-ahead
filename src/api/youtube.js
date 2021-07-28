import Axios from "axios";
const KEY = "AIzaSyBr1K_AmZLlvxt8i1OF3sLKuL7QE7oxoxM";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
