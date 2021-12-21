import './Profile.css'
import React from "react";
import movieApi from "../../api/movie_api.js"
import Favorite from './FavoriteList.jsx'
import {DatePicker} from "antd";




const Profile = (props) => {
    const info = [
        {
            id_name:'Adam',
            dateofbirth: '1/1/2001',
            sex: ' Nữ ',
            email: 'adam@gmail.com',
            city: 'Thành Phố Hồ Chí Minh',
            mk :'********',
            Score:'1000',
            rank:'gold'
        }
    ]


    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}
    let score_1;

    score_1=Number( user.Point)


    let score_level = 1000-score_1
    let sc= score_1 * 366 /1000

    let mk = (user.password)

    let mknew = "*"

    let date1= (user.dob)

    let check=(user.role)

    return (
        <>
            <section className="info" >
                <form className="row">
                    <div class="col-sm-6">
                        <div>
                            <div className="mb-2">
                                <div className="row">
                                    <div className="col-sm-4 ">
                                        <img className="avatar"  src={user.image} alt='banner'/>
                                    </div>
                                    <div className="col-sm-4 ">
                                        <h2 className="name align-self-center p-2">{user.name} </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    { (user.role === 'user') && <div  class="col-sm-6" >
                        <div className="check">
                            <div className="mb-2">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <h2 className="level">  {score_level} điểm nữa để lên cấp!</h2>
                                        <div className="levelmax"></div>
                                        <div className="curent_level"  style={{width: sc}}></div>
                                        <h2 className="level_max">Điểm: {score_1}/1000</h2>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <img  className="rank"  src={`/Imgs/${user.level}.png`} alt='banner'/>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>}



                </form>
                <form className="row">
                    <div className="col-sm-6">
                        <h1 className="site-name " >Thông tin <i className="fa fa-pencil" aria-hidden="true"></i> </h1>
                    </div>
                </form>
                <form className="row">
                    <div className="col-sm-6">
                        <div>
                            <h2 className="ngaysinh">Ngày sinh  </h2>
                            <h2 className="date_birth" > {date1}  </h2>
                        </div>
                        <div >
                            <h2 className="gioitinh">Giới tính</h2>
                            <h2  className="sex">  {user.gender} </h2>
                        </div>
                        <div >
                            <h2 className="email">Email</h2>
                            <h2  className="Email">  {user.email} </h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <h2 className="city">Thành Phố</h2>
                            <h2  className="tp">  {user.city} </h2>
                        </div>
                        <div >
                            <h2 className="password">Mật Khẩu</h2>
                            <h2  className="mk">  ****** </h2>
                        </div>
                    </div>
                </form>
                { (user.role === 'user')  &&<div id="favorite-container" className="container-fluid bg-white">
                    <Favorite/>
                </div>}
            </section>




        </>

    );
};
export default Profile;