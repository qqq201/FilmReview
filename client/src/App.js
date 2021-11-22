import Header from './components/header/header.js'
import Carousel from './components/carousel/carousel.js'
import Gallery from './components/gallery/gallery.js'
// test api component
//import Test from './components/layout/test.js'

const App = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            <Gallery name='Bộ sưu tập'/>
        </>
    )
}

export default App;
