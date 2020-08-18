import http from './httpService'
import config from '../config.json'

const loginService = async (email, password) => {
    try {
        const user = await http.post(`${config.apiEndpoint}/auth`, { email, password })
        return user
    } catch (error) {
        return error
    }
}

export default loginService