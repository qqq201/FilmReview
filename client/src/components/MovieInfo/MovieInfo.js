import './MovieInfo.css'

const MovieInfo = () => {
    const movie = {
        content: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
        genres: "Mystery",
        actors: "Oliver Masucci, Karoline Eichhorn, Jördis Triebel, Louis Hofmann, Maja Schöne.",
        directors: "Baran bo Odar",
        photos: [
            "https://icdn3.digitaltrends.com/image/dark-tv-netflix-1200x630-c-ar1.91.jpg",
            "https://icdn3.digitaltrends.com/image/dark-tv-netflix-1200x630-c-ar1.91.jpg",
            "https://icdn3.digitaltrends.com/image/dark-tv-netflix-1200x630-c-ar1.91.jpg"
        ]
    }

    return (
        <>
            <div className='section'>
                <h4>Nội dung</h4>
                <div className='line'/>
                <p>{movie.content}</p>
            </div>
            <div className='section'>
                <h4>Thể loại</h4>
                <div className='line'/>
                <p>{movie.genres}</p>
            </div>
            <div className='section'>
                <h4>Diễn viên</h4>
                <div className='line'/>
                <p>{movie.actors}</p>
            </div>
            <div className='section'>
                <h4>Đạo diễn</h4>
                <div className='line'/>
                <p>{movie.directors}</p>
            </div>
            <div className='section'>
                <h4>Hình ảnh</h4>
                <div className='line'/>
                {movie.photos.map(photo => (
                    <div class='photo'>
                        <img src={photo} alt='movie capture'/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieInfo
