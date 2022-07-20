import axios from "axios";
const api = axios.create({
    baseURL: '/api/v1',
    timeout: 10000
})
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers = {
            'Authorization': 'Bearer ' + token
        }
    }
    return config
},err => {
    Promise.reject(err)
})

api.interceptors.response.use(res=> {
    return Promise.resolve(res.data)
},err=>{
    Promise.reject(err)
})

export default api