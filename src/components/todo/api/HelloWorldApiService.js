import axios from "axios"

// export default function retrieveHelloBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloBean
    = () => apiClient.get('/hello-world-bean')


export const retrieveHelloBeanPathVariable
        = (username) => apiClient.get(`/hello-world/path-variable/${username}`)