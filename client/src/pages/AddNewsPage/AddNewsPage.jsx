import "./AddNewsPage.css"
import React, {useState} from 'react'
//import { Upload, Modal } from 'antd';
import {useNavigate} from "react-router-dom";
import newsApi from '../../api/news_api.js'

const AddNewsPage = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState();

    const backToHome = () => {
        navigate("/news");
    }

    const [form, setForm] = useState({
        title : '',
        content : '',
        thumbnail : '',
        articleLink: '',
        time : ''
    })
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    // This function will be triggered when the file field change
    const imageChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            form.thumbnail = await getBase64(e.target.files[0])
            setForm(form)
        }
    };


    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    const handleTitleChange = event => {
        form.title = event.target.value
        setForm(form)
    };
    const handleContentChange = event => {
        form.content = event.target.value
        setForm(form)
    };

    const handleArticleLinkChange = event => {
        form.articleLink = event.target.value
        setForm(form)
    };
    const handleTimeChange = event => {
        form.time = event.target.value
        setForm(form)
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await newsApi.upload(form)
            if (response !== undefined) {
                console.log(response)
            }
        } catch (error) {
            console.log('Error', error)
        }
        navigate("/news");
      };


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
                            <h2 className="text-title">Ti??u ?????</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_direct" placeholder="T??n ?????o di???n" onChange={handleTitleChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">N???i dung</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_genre" placeholder="Th??? lo???i" onChange={handleContentChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Ng??y ????ng</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_content" placeholder="N???i dung" onChange={handleTimeChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Link b??i vi???t</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_content" placeholder="N???i dung" onChange={handleArticleLinkChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">H??nh ???nh ?????i di???n</h2>
                            <div className="line"></div>
                        </div>
                        <div className="container">

                            {selectedImage && (
                                <div className="preview">
                                    <img alt='preview' className="image" src={URL.createObjectURL(selectedImage)}/>
                                    <button onClick={removeSelectedImage} className="button">
                                        <span aria-hidden="true" className="cancel-btn-custom">&times;</span>
                                    </button>
                                </div>
                            )}
                            <input accept="image/*"   type="file"   onChange={imageChange} className="add_image"  />
                        </div>

                    </div>
                    <div className="mb-1">
                        <button type="submit" className="btn btn-outline-primary d-block w-100" >????ng</button>

                    </div>

                </form>
            </section>

        </>
    )
}

export default AddNewsPage
