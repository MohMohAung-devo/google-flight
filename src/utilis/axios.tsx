import axios from "axios";

export const API = axios.create({
  baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1",
  headers: {
    "X-RapidAPI-Key": "45abab5b1cmsh2d2f0ead0dec4cbp1b59b1jsn9892eac68047",
    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});
