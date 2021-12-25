import "./NewsItem.css"

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className='news-photo'>
                <img src={props.news.thumbnail} alt="Poster"/>
            </div>
            <div className="post-wrapper">
                <h2 className='post-title-link' color= 'black'>
                    <a href={props.news.articleLink} >
                        {props.news.title}
                    </a>
                </h2>
                <span className="post-date">{props.news.time}</span>
                <div className="post-excerpt line-clamp-3">
                    {props.news.content}
                </div>
            </div>
            {/* user.role !=== undefind && user.role === 'admin &&  them moi button  */ }
        </div>
    )
}

export default NewsItem
