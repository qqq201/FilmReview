import './add_movie.css'
import React, {useState} from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import movieApi from "../../api/movie_api";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const PicturesWall = (props) => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    })

    const handleCancel = () => {
        state.previewVisible = false
        setState(state)
    }

    //Image Preview
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        state.previewImage = file.url || file.preview
        state.previewVisible = true
        state.previewTitle = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        setState(state);
    };

    const handleChange = async ({fileList}) => {
        console.log(fileList)
        setState({fileList})
        var array_img=[]
        for(let i=0 ; i <fileList.length ; i++){
            var url_image =  await getBase64 (fileList[i].originFileObj)
            array_img.push(url_image)
        }
        props.setphoto(array_img)
    }


    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={state.fileList}
                onPreview={handlePreview}
                onChange={handleChange}

            >
                {state.fileList.length >= 8 ? null : (
                    <div>
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Upload</div>
                    </div>
                )}

            </Upload>
            <Modal
                visible={state.previewVisible}
                title={state.previewTitle}
                footer={null}
                onCancel={handleCancel}
            >

                <img alt="example" style={{width: '100%'}} src={state.previewImage}/>
            </Modal>
        </>
    );
}
const Addmovie = (props) => {
    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const imageChange = async (e) => {

        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            form.poster = await getBase64(e.target.files[0])
            setForm(form)
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    // ttttttttttttttttttttttttttttttttttt


    const navigate = useNavigate();

    const [form, setForm] = useState({
        title : '',
        year : '',
        poster: '',
        trailer: '',
        content: '',
        genres: [],
        actors: [],
        director: [],
        photos : [],
    })


    const handleTrailerChange = event => {
        form.trailer = event.target.value
        setForm(form)
    };
    const handleTitleChange = event => {
        form.title = event.target.value
        setForm(form)
    };
    const handleYearChange = event => {
        form.year = event.target.value
        setForm(form)
    };
    const handleGenresChange = event => {
        form.genres = event.target.value
        setForm(form)
    };
    const handleDirectorChange = event => {
        form.director = event.target.value
        setForm(form)
    };
    const handleActorChange = event => {
        form.actors = event.target.value
        setForm(form)
    };
    const handleContentChange = event => {
        form.content = event.target.value
        setForm(form)
    };
    const handlePhotosChange =(photo) => {
        form.photos= photo
        setForm(form)
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log(form)
            const response = await movieApi.upload(form)

            if (response !== undefined) {
                console.log(response)
            }

        } catch (error) {

            console.log('Error', error)
        }
        navigate("/movie");
    };
    const backToHome = () => {
        navigate("/movie");
    }

    return (
        <>
            <section className="info1" >
                <form className="row" onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <div className="title">
                            <button type="button" className="close" aria-label="Close" onClick={backToHome}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Link nh??ng trailer</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="Link nh??ng trailer" onChange={handleTrailerChange}/>
                    </div>

                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">T??n Phim</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_movie" placeholder="T??n phim" onChange={handleTitleChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">N??m s???n xu???t</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_year" placeholder="N??m" onChange={handleYearChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">?????o di???n</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_direct" placeholder="T??n ?????o di???n" onChange={handleDirectorChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Di???n vi??n</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_actor" placeholder="T??n di???n vi??n" onChange={handleActorChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Th??? lo???i</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_genre" placeholder="Th??? lo???i" onChange={handleGenresChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">N???i dung</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_content" placeholder="N???i dung" onChange={handleContentChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">H??nh ???nh ?????i di???n</h2>
                            <div className="line"></div>
                        </div>
                        <div className="container">

                            {selectedImage && (
                                <div className="preview">

                                    <img  alt='preview' className="image" src={URL.createObjectURL(selectedImage)}/>
                                    <button onClick={removeSelectedImage} className="button">
                                        <span aria-hidden="true" className="cancel-btn-custom">&times;</span>
                                    </button>
                                </div>
                            )}
                            <input accept="image/*"   type="file"   onChange={imageChange} className="add_image"  />
                        </div>

                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">H??nh ???nh b??a</h2>
                            <div className="line"></div>
                        </div>
                        <div className="container">
                            <div className="MainDiv">
                                <div className="container">
                                    <PicturesWall setphoto={handlePhotosChange}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mb-1">
                        <button type="submit" className="btn btn-outline-primary d-block w-100">????ng</button>
                    </div>

                </form>
            </section>

        </>
    );
};
export default Addmovie;
