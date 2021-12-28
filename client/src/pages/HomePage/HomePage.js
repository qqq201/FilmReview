import Carousel from '../../components/carousel/carousel.js'
import Gallery from '../../components/gallery/gallery.js'
import ModGallery from '../../components/ModGallery/ModGallery.js'
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    let user = localStorage.getItem('User')

    const redirect = () => {
        navigate("/movie/add-movie");
    }

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
