import {BrowserRouter} from 'react-router-dom'
import Router from './routes/index.js'

// test api component
//import Test from './components/layout/test.js'

const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}

export default App;
