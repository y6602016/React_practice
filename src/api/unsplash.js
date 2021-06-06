import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID p0mCWbABGbn1i08lLaFVi95F3AYAI1fSPb3VZKcVJzE",
  },
});
