import './PostReview.css'


const PostReview = () => {

    const reviews = [{
        content: "Perfect\n" +
            "\n" +
            "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
        user: {
            avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "Andrew",
            date: "20:00 8/11/2021"
        },
        dislike: 0,
        like: 0,
        comment: {
            num: 1,
            content: [""]
        }
    },
        {
            content: "Perfect\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021"
            },
            dislike: 0,
            like: 0,
            comment: {
                num: 1,
                content: [""]
            }
        },
        {
            content: "Perfect\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021"
            },
            dislike: 0,
            like: 0,
            comment: {
                num: 1,
                content: [""]
            }
        },
        {
            content: "Perfect\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021"
            },
            dislike: 0,
            like: 0,
            comment: {
                num: 1,
                content: [""]
            }
        },

    ]

    let count = 0;

    // get data from the server
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch('/api/reviews/')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    return (
        <section className="post-review">
            <div className="num-reviews text-black m-5 "> {reviews.length} reviews</div>
            <div className="container brown-color">
                <div className="row">

                    {
                        reviews.map((e) => {

                            return (
                                <>
                                    <div className="card col bg-white m-2">
                                        <div id="content-image">
                                            <img className="image-border mt-5 text-float mr-3" src={e.user.avatar}
                                                 alt="avatar"/>
                                            <div className="mt-5 mb-2 ml-5 text-black" id="">{e.user.name}</div>
                                            <date className="text-black">{e.user.date}</date>

                                        </div>

                                        <div className="mt-4 text-inline text-black">{e.content}</div>
                                        <div className="row my-3">
                                            <div className="col-2">
                                                <button className="btn btn-outline-success"><i
                                                    className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"/> <span
                                                    className="m-2">20</span></button>
                                            </div>
                                            <div className="col-2">
                                                <button className="btn btn-outline-danger"><i
                                                    className="fa fa-thumbs-o-down"
                                                    aria-hidden="true"/> <span
                                                    className="m-2">20</span></button>
                                            </div>
                                            <div className="offset-6 col-2"><i className="fa fa-comment fa-3x"
                                                                               aria-hidden="true"/></div>
                                        </div>
                                    </div>

                                    {(count++ ? count % 2 === 0 : false) ? (<>
                                        <div className="w-100"/>
                                    </>) : (<></>)}
                                </>
                            );

                        })}
                </div>

            </div>
        </section>
    )
        ;
}

export default PostReview;