import axiosClient from './index'

const userApi = {
    /*get: (id) => {
        const url = '/user/${id}'
        return axiosClient.get(url)
    },*/

    login: (username, password) => {
        const url = '/user/login'

        username = 'Nguyễn Nguyễn'
        password = '12345'

        axiosClient.post(url, {
          username: username,
          password: password
        })
    }
}

export default userApi
