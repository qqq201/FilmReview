import $ from 'jquery'

const Reply = (props) => {

    const {avatar, idUser} = props;


    function handleChange() {
        const text = $(`#${idUser}` + "textArea").val();
        alert(text);
    }


    return (
        <div
            className=" btn--border-radius bg-white mt-2 mb-3 ml-5  p-2 d-flex justify-content-between align-items-center">
            <img className="image-round mt-5 mr-3"
                 src={avatar}
                 alt="avatar"/>
            <div className="col-9">
                <textarea id={idUser + "textArea"} className="col-12 mr-5 d-inline-block text-black btn--border-radius"
                          placeholder="Bình luận ... " />
            </div>

            <button className="btn btn-outline-success" onClick={handleChange}><i className="fa fa-paper-plane fa-1x" aria-hidden="true" />  </button>
        </div>
    );
}

export default Reply;