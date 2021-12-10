import axiosClient from './index'

const newsApi = {
    getNews: () => {
        const url = '/news'
        return axiosClient.get(url)
    }
}

export default newsApi