import './carousel.css'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import test from '../assets/Image/Carousel/image1.jpg'

const Carousel = () => {
    return (
        <>
            <div class="carousel">
                <div>
                    <div className ="carousel-image">
                        <img src={test} alt='carousel'></img>
                    </div>
                    <div className ="carousel-image-layer"></div>
                </div>
                <span className="carousel-left">
                    <AiOutlineLeft />
                </span>

                <span className="carousel-right">
                    <AiOutlineRight/>
                </span>
            </div>
        </>
    )
}

export default Carousel 
