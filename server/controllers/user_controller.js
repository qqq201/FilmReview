import mongoose from 'mongoose'
import userModel from '../models/user.js'

class UserController {
    // POST /api/user/login
    async login(req, res, next) {
      	const { username, password } = req.body

        console.log(username)
        console.log(password)
      	// Simple validation
      	if (!username || !password)
      		return res
      			.status(400)
      			.json({ success: false, message: 'Missing username and/or password' })

      	try {
      		// Check for existing user
      		const user = await userModel.find({name: username}).limit(1)
            console.log(user)
      		if (!user)
      			return res
      				.status(400)
      				.json({ success: false, message: 'Incorrect username or password' })

      		// Username found
      		if (user.password !== password)
      			return res
      				.status(400)
      				.json({ success: false, message: 'Incorrect username or password' })
      	} catch (error) {
      		console.log(error)
      		res.status(500).json({ success: false, message: 'Internal server error' })
      	}
    }
}

export default new UserController()
