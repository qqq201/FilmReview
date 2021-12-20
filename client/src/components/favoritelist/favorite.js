import './favorite.css'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'

const  Favorite= (props) => {
    const movies = [{
        id: "123",
        title: 'money heist',
        year: '2017-2012',
        genres: 'action, crime',
        score: 80

    },{
        id: "456",
        title: 'money heist',
        year: '2017-2012',
        genres: 'action, crime',
        score: 80
    }]

    const role = 'admin'
    const isAuthen = true

    return (
        <>
            <div className='favorite'>
                <div className="galleries-header">
                    {props.name}
                    <span className="galleries-header-line"></span>
                </div>
                <div className="galleries">
                    {movies.map(movie => (
                        <MovieCatalog
                            key = {movie.id}
                            movie={movie}
                            role={role}
                            isAuthen={isAuthen}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default  Favorite