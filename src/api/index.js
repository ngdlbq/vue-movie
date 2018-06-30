import Axios from 'axios'
const axios = Axios.create({
  baseURL: '/api'
})

axios.interceptors.response.use(({data}) => {
    if(data.code === 0) {
        return data.data
    } else {
        console.error(data.errmsg)
    }
}, err => {
    throw new Error(err)
})
export function movie(params) {
  return axios.get('/client/movie/get_all', {
    params
  })
}

