import Carousel from '../../components/carousel/carousel.js'
import Gallery from '../../components/gallery/gallery.js'

const HomePage = () => {
    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)

    return (
        <>
            {(user.role === undefined || user.role === 'user') && <Carousel/>}
            <Gallery/>
        </>
    )
}

export default HomePage;
