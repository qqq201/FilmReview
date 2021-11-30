import "./NewsPage.css"

const NewsPage = () => {

    var News = [{
        Title: "Kịch bản kinh tế toàn cầu khi xuất hiện Omicron",
        Date: "1/1/2021",
        Link: "https://vnexpress.net/kich-ban-kinh-te-toan-cau-khi-xuat-hien-omicron-4396317.html",
        Photos: "https://vcdn-kinhdoanh.vnecdn.net/2021/11/30/1x-1-jpeg-9944-1638235172.jpg",
        PostExcerpt: "Biến chủng nCoV mới giáng đòn vào kỳ vọng phục hồi nhanh trong năm tới, nhưng mức độ ảnh hưởng có thể không quá nghiêm trọng."
    },{
        Title: "MeowMeow",
        Date: "2/1/2021",
        Link: "https://vnexpress.net/loat-ga-noi-cua-trump-that-the-4395868.html",
        photos: "https://icdn3.digitaltrends.com/image/dark-tv-netflix-1200x630-c-ar1.91.jpg"
    },{
        Title: "Meow",
        Date: "3/1/2021",
        Link: "https://dev.to/graftini/rendering-in-an-iframe-in-a-react-app-2boa",
        photos: [
            "https://icdn3.digitaltrends.com/image/dark-tv-netflix-1200x630-c-ar1.91.jpg"
        ]
    }
    ]

    return (
        <div className='gallery'>
            <div className="news">
                <div className="new-1" >
                    <picture>
                        <img src={News[0].Photos}
                            width="250" height="200"
                        >
                        </img>
                    </picture>
                    <div className="post-wrapper">
                        <h2 className='post-title-link'>
                            <a href={News[0].Link}>
                                {News[0].Title}
                            </a>
                        </h2>
                        <span className="post-card-tag">{News[0].Date}</span>
                        <div className="post-excerpt">
                            {News[0].PostExcerpt}
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default NewsPage;
