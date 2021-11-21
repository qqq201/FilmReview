import user_router from './user.js'

export default function route(app){
    app.use('/api/user', user_router)
    app.get('/api', (req, res) => {
        console.log('hi3')
        res.send({'message': 'hello'})
    })
}
