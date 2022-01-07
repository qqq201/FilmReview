
const CardComment = (props) => {

    const {id, comment, user, avatar} = props;

    return (
        <>
            <div
                className=" btn--border-radius bg-white mt-2 mb-3 ml-5  p-2 d-flex justify-content-between align-items-center">
                <img className="image-round-comment mt-5 mr-3"
                     src={avatar}
                     alt="avatar"/>


                <div className="col-10">
                    <div className="ml text-black d-flex flex-column">
                        <p className="text-dark font-weight-bold">{user}</p>
                    </div>

                    <p className="text-black"> {comment}</p>
                </div>
            </div>
        </>
    )
};


export default CardComment;
