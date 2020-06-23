import axios from "../axios/axios-config"

export const fetchOrders=()=>{
    return axios.get('/orders.json')
    .then((res)=>{
        return res.data
    })
}