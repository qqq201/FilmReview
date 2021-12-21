import './favorite.css'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'

const  Favorite= (props) => {
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
