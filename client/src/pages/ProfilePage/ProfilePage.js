import Info from '../../components/Profile/Profile.js'
import {useEffect, useState} from "react";
import userApi from "../../api/user_api";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({
        _id: "" ,
        password: "",
        name: "",
        email:"",
        dob:"",
        gender: "",
        city: ""
    })

    const user_id = window.location.href.substr(window.location.href.indexOf("profile/") + 8)
    useEffect(() => {
        const fetch_userInfo = async () => {
            try {
                const response = await userApi.get(user_id)
                if (response.userInfo)
                    setUserInfo(response.userInfo)
            } catch (error){
                setUserInfo({})
                console.log('Error', error)
            }
        }

        fetch_userInfo()
    }, [])

    return (
        <Info user={userInfo}/>
    )
}

export default ProfilePage
