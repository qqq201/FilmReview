import './Profile.css'
import React from "react";
import movieApi from "../../api/movie_api.js"
import Favorite from './FavoriteList.jsx'




const Profile = (props) => {
    const info = [
        {
            id_name: 'Adam',
            dateofbirth: '1/1/2001',
            sex: ' Nữ ',
            email: 'adam@gmail.com',
            city: 'Thành Phố Hồ Chí Minh',
            mk: '********'
        }
    ]

    const movies = movieApi.getGallery().then((movies) => {
        console.log(movies);
    })


    return (
        <>
            <div className='info'>
                <div className="ava">
                    {info.map((obj, index) => {
                        return (<img className="avatar" src={process.env.PUBLIC_URL + `/Imgs/${obj.id_name}.png`} alt='banner' />)
                    })}
                    <h2 className="name">Adam</h2>

                </div>
                <div className="site-title ">
                    <h1 className="site-name " >Thông tin</h1>
                    <h2 className="ngaysinh">Ngày sinh  </h2>

                    {info.map((obj, index) => {
                        return (
                            <h2
                                name={obj.dateofbirth}
                                className="date_birth">
                                {obj.dateofbirth}
                            </h2>
                        )
                    })}
                    <h2 className="gioitinh">Giới tính</h2>
                    {info.map((obj, index) => {
                        return (<h2 name={obj.sex} className="sex">  {obj.sex} </h2>)
                    })}
                    <h2 className="email">Email</h2>
                    {info.map((obj, index) => {
                        return (<h2 name={obj.email} className="Email">  {obj.email} </h2>)
                    })}
                </div>
                <div className="site-title2">
                    <h2 className="city">Thành Phố</h2>
                    {info.map((obj, index) => {
                        return (<h2 name={obj.city} className="tp">  {obj.city} </h2>)
                    })}
                    <h2 className="password">Mật Khẩu</h2>
                    {info.map((obj, index) => {
                        return (<h2 name={obj.mk} className="mk">  {obj.mk} </h2>)
                    })}
                </div>

            </div>

            <div id="favorite-container" class="container-fluid bg-white" >
                <Favorite />
            </div>

        </>

    );
};
export default Profile;
