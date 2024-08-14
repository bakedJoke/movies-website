import axios from "axios";
export const appAxios =axios.create({
    baseURL:"https://moviesdatabase.p.rapidapi.com"
})