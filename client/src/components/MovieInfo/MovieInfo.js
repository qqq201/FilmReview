import './MovieInfo.css'

const MovieInfo = (props) => {
    return (
        <>
            <div className='section'>
                <h4>Nội dung</h4>
                <div className='line'/>
                <p>{props.movie.content}</p>
            </div>
            <div className='section'>
                <h4>Thể loại</h4>
                <div className='line'/>
                <p>{props.movie.genres}</p>
            </div>
            <div className='section'>
                <h4>Diễn viên</h4>
                <div className='line'/>
                <p>{props.movie.actors}</p>
            </div>
            <div className='section'>
                <h4>Đạo diễn</h4>
                <div className='line'/>
                <p>{props.movie.directors}</p>
            </div>
            <div className='section'>
                <h4>Hình ảnh</h4>
                <div className='line'/>
                {props.movie.photos.map((photo, index) => (
                    <div className='photo' key = {index}>
                        <img src={photo} alt='movie capture'/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieInfo
