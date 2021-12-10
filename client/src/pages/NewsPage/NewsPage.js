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
            <div className="news">
                {state.map((news, index) => (
                    // <div className="news-item" key={index}>
                    //     <div className='news-photo'>
                    //         <img src={news.thumbnail} alt="Poster"/>
                    //     </div>
                    //     <div className="post-wrapper">
                    //         <h2 className='post-title-link' color= 'black'>
                    //             <a href={news.articleLink} >
                    //                 {news.title}
                    //             </a>
                    //         </h2>
                    //         <span className="post-date">{news.time}</span>
                    //         <div className="post-excerpt line-clamp">
                    //             {news.content}
                    //         </div>
                    //     </div>
                    // </div>
                    <NewsItem news={news} key={index} />
                ))}
                
            </div>
        </div>
    )
}

export default NewsPage;
