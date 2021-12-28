import axiosClient from './index'

const reviewApi = {
    getListReview: (movie_id) => {
        const url = '/review/' + movie_id
        return axiosClient.get(url)
    },

    getListPendingReview: (movie_id) => {
        const url = '/review/' + movie_id
        return axiosClient.get(url)
    }
}

export default reviewApi
