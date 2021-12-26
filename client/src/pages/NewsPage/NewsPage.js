import "./NewsPage.css"
import newsApi from '../../api/news_api.js'
import { useState, useEffect } from "react";
import NewsItem from "../../components/NewsItem/NewsItem.js"
import {useNavigate} from "react-router-dom";

const NewsPage = () => {
    const navigate = useNavigate();
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await newsApi.getNews()
                if (response !== undefined) {
                    setState(response.news)
                    console.log(state)
                }
            } catch (error) {
                console.log('Error', error)
            }
        }
        fetchData()
    }, [])

    
    const redirect = () => {
        navigate("/news/add-news");
    }

    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}
    
    return (
        <div className='gallery'>
            {/* user.role !=== undefind && user.role === 'admin &&  them moi button  */}
            <div className="news">
                <div class="">
                    {user.role === 'admin' && <button class="add-news btn btn-lg bg-white" onClick={redirect}>Thêm mới</button>}
                </div>
                {state.map((news, index) => (
                    <NewsItem news={news} key={index} />
                ))}
            </div>
        </div>
    )
}

export default NewsPage;
