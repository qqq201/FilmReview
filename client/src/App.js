import React, { useEffect, useState } from 'react'
import user_api from './api/user_api'

const App = () => {
    const [message, setmessage] = useState('')

    useEffect(() => {
        const fetchTest = async () => {
            try {
                const response = await user_api.login('', '')
                setmessage(response)
            } catch (error){
                console.log('Error', error)
            }
        }

        fetchTest()
    }, [])

    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export default App;
