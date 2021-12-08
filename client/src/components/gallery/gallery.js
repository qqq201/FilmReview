import './gallery.css'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'

const Gallery = (props) => {
    const movies = [{
        id: "123",
        title: 'money heist',
        year: '2017-2012',
        poster: 'https://vignette.wikia.nocookie.net/money-heist/images/2/2a/Money_Heist_Part_4_poster.jpg/revision/latest?cb=20200312172240',
        genres: 'action, crime',
        score: 80

    },{
        id: "456",
        title: 'money heist',
        poster: 'https://vignette.wikia.nocookie.net/money-heist/images/2/2a/Money_Heist_Part_4_poster.jpg/revision/latest?cb=20200312172240',
        year: '2017-2012',
        genres: 'action, crime',
        score: 80
    }]

    return (
        <div className='gallery'>
            <div className="gallery-header">
                {props.name}
                <span className="gallery-header-line"></span>
            </div>
            <div className="catalogs">
                {movies.map((movie, index) => (
                    <MovieCatalog movie={movie} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Gallery
