import "./AddNewsPage.css"
import React, {useState} from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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

    function getBase64_2(file) {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            document = reader.result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

        return document;
    }

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

    // ttttttttttttttttttttttttttttttttttt
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    class PicturesWall extends React.Component {
        state = {
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [

            ],
        };

        handleCancel = () => this.setState({ previewVisible: false });


        //Image Preview
        handlePreview = async file => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }

            this.setState({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
            });
        };

        handleChange = ({ fileList }) => this.setState({ fileList });

        render() {
            const { previewVisible, previewImage, fileList, previewTitle } = this.state;
            const uploadButton = (
                <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                </div>
            );
            return (
                <>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={this.handleCancel}
                    >

                        <img  alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </>
            );
        }
    }

    

    const handleTitleChange = event => {
        form.title = event.target.value
        setForm(form)
    };
    const handleContentChange = event => {
        form.content = event.target.value
        setForm(form)
    };
    const handleThumbnailChange = event => {
        if (event.target.files && event.target.files.length > 0) {
            form.thumbnail = event.target.files[0]
            setForm(form)
        }
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
        // alert(`Your state values: \n 
        //         form: ${form.thumbnail} \n 
        //         You can replace this alert with your process`);
        console.log(form.thumbnail)
        try {
            const response = await newsApi.upload(form)
            if (response !== undefined) {
                console.log(response)
            }
        } catch (error) {
            console.log('Error', error)
        }
        
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
                            <h2 className="text-title">Tiêu đề</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_direct" placeholder="Tên đạo diễn" onChange={handleTitleChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Nội dung</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_genre" placeholder="Thể loại" onChange={handleContentChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Ngày đăng</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_content" placeholder="Nội dung" onChange={handleTimeChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Link bài viết</h2>
                            <div className="line"></div>
                        </div>
                        <input type="text" className="form-control" name="name_content" placeholder="Nội dung" onChange={handleArticleLinkChange}/>
                    </div>
                    <div className="mb-1">
                        <div className="title">
                            <h2 className="text-title">Hình ảnh đại diện</h2>
                            <div className="line"></div>
                        </div>
                        <div className="container">

                            {selectedImage && (
                                <div className="preview">

                                    <img  className="image" src={URL.createObjectURL(selectedImage)}  >

                                    </img>
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
                            <h2 className="text-title">Hình ảnh bìa</h2>
                            <div className="line"></div>
                        </div>
                        <div className="container">
                            <div className="MainDiv">
                                <div className="container">
                                    <PicturesWall />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mb-1">
                        <button type="submit" className="btn btn-outline-primary d-block w-100" >Đăng</button>

                    </div>

                </form>
            </section>

        </>
    )
}

export default AddNewsPage
