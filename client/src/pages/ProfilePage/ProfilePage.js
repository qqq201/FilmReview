import Info from '../../components/Profile/Profile.js'

const ProfilePage = () => {
    let user = localStorage.getItem('User')
    if (user)
        user = JSON.parse(user)
    else
        user = {}

    return (
        <Info user={user}/>
    )
}

export default ProfilePage
