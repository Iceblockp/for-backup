import axios from "axios";


export const categoryApi =  axios.create({
    baseURL: `${location.origin}/api/categories`,
    headers: {
        "Content-type": "application/json"
    }
})