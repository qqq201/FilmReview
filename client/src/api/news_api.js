import axiosClient from './index'

const newsApi = {
    getNews: () => {
        const url = '/news'
        return axiosClient.get(url)
    },

    upload: (form) => {
        const url = '/news/upload'
        return axiosClient.post(url, form)
    }
}

export default newsApi