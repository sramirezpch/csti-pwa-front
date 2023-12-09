import axios from "axios";
import { API_BASE_URL, API_TOKEN } from "../utils/env";

console.log(API_BASE_URL);

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: { 
        Authorization: "Bearer " + API_TOKEN,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": 'application/json',
        Accept: "application/json, text/plain"
    }
})

const getActualBalance = async () => {
    try{
        const res = await axiosInstance.get('/getActualBalance');
    }catch(err){
        console.error(err)
    }
}

export { 
    getActualBalance
}