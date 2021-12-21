import axiosClient from './index'

const movieApi = {
    getInfo: (id) => {
        const url = '/movie/' + id
        return axiosClient.get(url)
    },

    rate: (movie_id, user_id, score) => {
        const url = '/movie/' + movie_id + '/rate'
        const message = {
            user_id: user_id,
            score: score
        }

        return axiosClient.post(url, message)
    },

    getGallery: () => {
        const url = '/movie/gallery'
        return axiosClient.get(url)
    }
}

export default movieApi
