import axiosClient from './index'

const userApi = {
    /*get: (id) => {
        const url = '/user/${id}'
        return axiosClient.get(url)
    },*/

    login: (email, password) => {
        const url = '/user/login'
        return axiosClient.post(url, {
            email: email,
            password: password
        })
    }
}

export default userApi
