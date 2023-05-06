import axios from "axios"
import { config } from "../config"

const getUserDetailService = async (user_id) => {
    const results = await axios.get(`${config.service_host}/users/get-user-detail/${user_id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return results.data.data
}

export {
    getUserDetailService
}