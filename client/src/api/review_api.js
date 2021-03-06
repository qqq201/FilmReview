import axiosClient from './index'

const reviewApi = {
    getListReview: (movie_id) => {
        const url = '/review/' + movie_id
        return axiosClient.get(url)
    },

    getListPendingReview: (movie_id) => {
        const url = `/review/${movie_id}/pReview`
        return axiosClient.get(url)
    },


    approveReview: (review_id) => {
        const url = `/review/${review_id}/approve`
        return axiosClient.post(url)
    },

    denyReview: (review_id) => {
        const url = `/review/${review_id}/deny`
        return axiosClient.post(url)
    },

    addReview: (reviews, movied_id) => {
        const url = '/review/' + movied_id + '/save'
        return axiosClient.post(url, reviews)
    }
}

export default reviewApi
