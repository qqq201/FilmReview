import InfoSection from '../InfoSection/InfoSection.js'

const MovieInfo = () => {
    const movie = {
        content: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
        genres: "Mystery",
        actors: "Oliver Masucci, Karoline Eichhorn, Jördis Triebel, Louis Hofmann, Maja Schöne.",
        directors: "Baran bo Odar"
    }

    return (
        <>
            <InfoSection title="Nội dung" content={movie.content}/>
            <InfoSection title="Thể loại" content={movie.genres}/>
            <InfoSection title="Diễn viên" content={movie.actors}/>
            <InfoSection title="Đạo diễn" content={movie.directors}/>
        </>
    )
}

export default MovieInfo
