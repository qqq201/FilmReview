import {dirname} from 'path';
import {fileURLToPath} from 'url';
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

class MovieController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '/../public/movie_page.html'))
    }
}

export default new MovieController
