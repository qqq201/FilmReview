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

    getModerators: (movie_id) => {
        const url = '/movie/' + movie_id + '/moderators'
        return axiosClient.get(url)
    },

    assignModerators: (movie_id, moderators) => {
        const url = '/movie/' + movie_id + '/assignModerators'
        const message = {
            moderators: moderators
        }
        return axiosClient.post(url, message)
    },

    getGallery: () => {
        const url = '/movie/gallery'
        return axiosClient.get(url)
    },

    getModGallery: (mod_id) => {
        const url = '/movie/gallery/' + mod_id
        return axiosClient.get(url)
    }
}

export default movieApi
