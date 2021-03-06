import Carousel from '../../components/carousel/carousel.js'
import Gallery from '../../components/gallery/gallery.js'
import ModGallery from '../../components/ModGallery/ModGallery.js'

const HomePage = () => {
    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}

    return (
        <>
            {(user.role === undefined || user.role === 'user') && <Carousel/>}
            {(user.role && user.role === 'moderator')? <ModGallery mod_id={user._id}/> : <Gallery/>}
        </>
    )
}

export default HomePage;
