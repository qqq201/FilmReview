import UserModel from '../models/user.js'

class UserController {
    // POST /api/user/login
    async login(req, res, next) {
        const {email, password} = req.body

        // check if username and password is none
        if (!email || !password)
            return res.status(400).json({success: false, message: 'Missing username and/or password'})

        try {
            // Check for existing user
            const user = await UserModel.find({email: email}).limit(1)
            console.log(await UserModel.db)

            if (user.length === 0)
                return res.status(400).json({success: false, message: 'Incorrect username or password'})

            // Username found
            if (user[0].password !== password)
                return res.status(400).json({success: false, message: 'Incorrect username or password'})
            else {
                return res.status(200).json({success: true, user: user[0]})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //POST /api/user/signup
    async signup(req, res, next) {
        // implement here
        return res.status(200).json({success: true, message: 'congrats'})
    }

    //POST /api/user/update
    async update(req, res, next) {
        // implement here
        return res.status(200).json({success: true, message: 'congrats'})
    }

    //GET /api/user/:id/view
    async view(req, res, next) {
        try {
            const userInfo = await UserModel.find({_id: req.params.id});
            if (userInfo[0])
                return res.status(200).json({userInfo: userInfo[0]})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new UserController()
