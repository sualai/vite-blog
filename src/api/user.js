import axios from "../utils/request"
const baseUrl = '/admin'
export const login = (data)=>{
    return axios({
        url: baseUrl + '/login',
        method: 'post',
        data
    })
}