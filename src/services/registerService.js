
import http from './httpService'

const registerService = async(user) => {
    try {
        const { name, email, password}= user
        const res = await http.post('http://localhost:5000/api/user', { name, email, password })
        return res
    } catch (error) {

    }
}


export default registerService