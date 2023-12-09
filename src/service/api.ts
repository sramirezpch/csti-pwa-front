import axios from "axios";
import { API_URL } from "../utils/env";


const axiosInstance = axios.create({
    baseURL: API_URL
})

export const getActualBalance = async (signal: AbortSignal, controller: AbortController) => {
    try{
        const { data: { balanceCommerce } } = await axiosInstance.get('/getActualBalance', { signal });

        return balanceCommerce;

    }catch(err: any){
        if(err.name === 'AbortError') controller.abort();

        console.error(err)
    }
}

export const getProviders = async (signal: AbortSignal, controller: AbortController) => {
    try {
        const { data } = await axiosInstance.get('/getProviders', { signal })

        return data;
    }catch(err: any){
        if(err.name === 'AbortError') controller.abort();

        console.error(err);
    }
}
