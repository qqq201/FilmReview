import cd from 'cloudinary';
const cloudinary = cd.v2


// ldkha19@clc.fitus.edu.vn
// Kha020501#
const CLOUDINARY_CLOUD_NAME = 'daydb1kow'
const CLOUDINARY_API_KEY = '734454782672515'
const CLOUDINARY_API_SECRET = 'YVaoZEgqdpxDTetkM1LNzc5JnkQ'

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;