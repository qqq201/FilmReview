import Carousel from '../../components/carousel/carousel.js'
import Gallery from '../../components/gallery/gallery.js'

const HomePage = () => {
    const user = localStorage.getItem('User') || {}
    return (
        <>
            {(user.role === undefined || user.role === 'user') && <Carousel/>}
            <Gallery name='Bộ sưu tập'/>
        </>
    )
}

export default HomePage;
