import axios from "axios";

const KEY = "AIzaSyDRojxPXBg2zCajl_nV3A53rbTyeMbASjY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    type: "video",
    key: KEY,
  },
});
