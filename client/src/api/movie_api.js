import axiosClient from './index'

const movieApi = {
    getInfo: (id) => {
        const url = '/movie/' + id
        return axiosClient.get(url)
    },

    getGallery: () => {
        const url = '/movie/gallery'
        return axiosClient.get(url)
    }
}

export default movieApi
