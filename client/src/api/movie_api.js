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
    },

    editContent : (content, movie_id) =>{
        const message = {
            content: content
        }
        const url = '/movie/' + movie_id + '/editContent'

        return axiosClient.post(url, message)

    },

    editGenres : (genres, movie_id) =>{
        const message = {
            genres: genres
        }
        const url = '/movie/' + movie_id + '/editGenres'

        return axiosClient.post(url, message)

    },

    editActors : (actors, movie_id) =>{
        const message = {
            actors: actors
        }
        const url = '/movie/' + movie_id + '/editActors'

        return axiosClient.post(url, message)

    },
    editDirector: (director, movie_id) =>{
        const message = {
            director: director
        }
        const url = '/movie/' + movie_id + '/editDirector'

        return axiosClient.post(url, message)

    },
    upload: (form) => {

        const url = '/movie/upload'
        return axiosClient.post(url, form)
    }

}

export default movieApi
