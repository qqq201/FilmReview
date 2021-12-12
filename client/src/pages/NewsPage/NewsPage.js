import "./NewsPage.css"
import newsApi from '../../api/news_api.js'
import {useState, useEffect} from "react";
import NewsItem from "../../components/NewsItem/NewsItem.js"

const NewsPage = () => {
    const [state, setState] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            
            try {
                const response = await newsApi.getNews()
                if (response !== undefined){ 
                    setState(response.news)
                    console.log(state)
                }
            } catch (error){
                console.log('Error', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='gallery'>
            {/* user.role !=== undefind && user.role === 'admin &&  them moi button  */ }
            <div className="news">
                {state.map((news, index) => (
                    <NewsItem news={news} key={index} />
                ))}
            </div>
        </div>
    )
}

export default NewsPage;
