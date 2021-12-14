import './PostReview.css'
import CardReview from "./CardReview.jsx";
import {Col, Row} from "react-bootstrap";
import Reply from "./Reply.jsx";
import CardComment from "./CardComment";


const PostReview = () => {

    let list = [];
    let temp = [];

    const addCard = () => {
        list.push(<CardReview/>);
    }

    const reviews = [{
        content: "Perfect 1\n" +
            "\n" +
            "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
        user: {

            avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "Andrew",
            date: "20:00 8/11/2021",
            id: "1"
        },
        dislike: 0,
        like: 0,
        comment: [
            {
                id: 1,
                num: 1,
                content: "Best series ever. period.",
                user: "Andrew He",
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }
            ,
            {
                id: 10,
                num: 1,
                content: "Best series ever. period.",
                user: "Andrew He",
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }
        ]
    },
        {
            content: "Perfect 2\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021",
                id: "2"
            },
            dislike: 0,
            like: 0,
            comment: [{
                id: 2,
                num: 1,
                content: "Best series ever. period.",
                user: "Andrew He",
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }
            ]
        },


        {
            content: "Perfect 3\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021",
                id: "3"
            },
            dislike: 0,
            like: 0,
            comment:
                [{
                    id: 3,
                    num: 1,
                    content: "Best series ever. period.",
                    user: "Andrew He",
                    avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }]

        },
        {
            content: "Perfect 4\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021",
                id: "4"
            },
            dislike: 0,
            like: 0,
            comment:
                [{
                    id: 4,
                    num: 1,
                    content: "Best series ever. period.",
                    user: "Andrew He",
                    avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                }]

        },

        {
            content: "Perfect 5\n" +
                "\n" +
                "I've been wanting to start this series for a long time. But I don't know, I postponed it. I started watching this week. It got me curious from the first episode. This series was perfect in every way. Actors, acting, script, music, everything. Everything was mixed up. I finished the series in 1 week and it was a very good, enjoyable week ;) Things were getting mixed up, I was wondering how they will end with logic. . . And it ended very logically and beautifully. This series has become one of my favourites.",
            user: {
                avatar: "https://s3-alpha-sig.figma.com/img/037e/90d3/e0b3c9f9d0d11a90ced334a86de721de?Expires=1639958400&Signature=L5G~E7~mDN9hQvCRLQTudK408gxRQAfa-n6K3pAyg-ILjjduHlH3ZhcMFBqyqgc4vnKTH0J8O~Qv~A-D3RR4OJ4HPQIfacFeV0USSSlEj5LeJdT3-FVvFyuBnNU8gpVJCvVzXNSiI~wRLKQjQO8R24VkD3jPoDULR7FQUXemYmlo3g~sSZGjeECIvVPhp-u3dpRd6JxsfhCt7VcwrEg~KbFVLO2VlCLjbHl9YuUf87qVibsUzSVWHrOE8PVkcusjWeHzVI0zHpRMpiC1dEcRP8JgCumPAWv9nACyeY3Rsjlgh1hw1GcAYpDBkCENOIR96FBalDaYl-ooMkNCvotc6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                name: "Andrew",
                date: "20:00 8/11/2021",
                id: "5"
            },
            dislike: 0,
            like: 0,
            comment: [{
                id: 5,
                num: 1,
                content: "Best series ever. period.",
                user: "Andrew He",
                avatar: "https://s3-alpha-sig.figma.com/img/f86c/55b2/5e8586d5a89b165204e3c33206e5245a?Expires=1640563200&Signature=Ze8ijoxNppgRmixZpze05i16w7XIw0q5LowkKGXUJYiFFClMkObTa82gvWyBek9xDsaGKc~Cm-flQg7EaEueDiIZCenjX8uOWZF3fBdEeas8Prc33xS~SHq2oYtDO2ACyW1GnTp-O6UPdZSJca4ilvv5GnQUPMYk8ImQ~wgE4BGGd4CbjpalrLmMZkW0THQ80EaPDyziTVJQJ~mveTWoh24VlbKYaW49RXd1ZtIizi8VNTPjkeQWYjV7Qe-ohQt6t4bPm1Dg-XYtF7YDgVF~FGzJ00QX-6l9-FLmzWtI5dLX19qTO9PGlQ7Tb9I2kW3XY9ACFa~yGTOo1vT5tcZFqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",

            }
            ]
        },


    ]

    let count = 0;

    let displayComment = [];
    let commentList = [];

    function displayCard() {

    }

    // useEffect(()=>{
    //     async function getData() {
    //         const res = await axios.get("");
    //         return res;
    //
    //     }
    //     getData().then((res) => console.log(res));
    // }, []);


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

                {
                    reviews.map((e) => {

                        commentList = [...e.comment];
                        displayComment = [];
                        ++count;
                        commentList.map(p => {
                            displayComment.push(
                                <Row>
                                    <Col><CardComment user={p.user} avatar={p.avatar} comment={p.content}/></Col>
                                </Row>
                            )

                        });


                        list.push(
                            <>
                                <CardReview name={e.user.name} image={e.user.avatar} date={e.user.date}
                                            message={e.content}
                                            like={e.like} dislike={e.dislike} num={e.comment.length}
                                            idUser={e.user.id}/>
                                <div id={e.user.id + "chatbox"} hidden>
                                    {displayComment}
                                    <Row>
                                        <Col><Reply avatar={e.user.avatar} idUser={e.user.id}/></Col>
                                    </Row>
                                </div>


                            </>)
                        ;


                        if (list.length === 2) {
                            temp = {...list};
                            list = [];
                            return (
                                <Row>
                                    <Col md={12} lg={6}>
                                        {temp[0]}
                                    </Col>
                                    <Col md={12} lg={6}>
                                        {temp[1]}
                                    </Col>
                                </Row>
                            )
                        }


                        if (reviews.length % 2 === 1 && count === reviews.length) {
                            return (
                                <Row>
                                    <Col md={12} lg={6}>
                                        {list[0]}
                                    </Col>
                                </Row>
                            )
                        }


                    })

                }


            </div>
        </section>
    );
}

export default PostReview;