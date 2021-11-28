import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './loginPage..css'

const LoginPage = () => {
    return (
        <div id="loginPage">
            <div id="background" class="rotate">
            </div>

            <div class="backgroundLogin">
                <div className="context">
                </div>
                <div className="area">
                    <div>
                        <Container fluid>
                            <Row >
                                <Col className={"h1 d-flex justify-content-end text-success mr-5 mt-5 mb-2"}>Film</Col>
                            </Row>
                            <Row >
                                <Col className={"h1 d-flex justify-content-end text-success mr-5 mt-3 mb-5"}>Review</Col>
                            </Row>
                        </Container>

                    </div>

                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>ReViewFilm</li>
                        <li>ReViewFilm</li>
                        <li>ReViewFilm</li>
                        <li></li>
                        <li></li>

                    </ul>
                    <div>
                        <Container id="buttonLogin" className={"d-flex justify-content-end mt-5"}>

                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail" className={"mb-4"}>
                                            <Form.Label>
                                                <div className="h3 text-white align-items-start">Đăng nhập</div>
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Email"/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Mật khẩu"/>
                                        </Form.Group>
                                        {/*<Form.Group controlId="formBasicCheckbox">*/}
                                        {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                                        {/*</Form.Group>*/}

                                        <Row>
                                            <Col>
                                                <Button id="registerButton" variant="btn btn-success btn-lg mt-5"
                                                        type="submit">
                                                    Đăng Nhập
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button id="cancelButton" variant="btn btn-danger btn-lg mt-5"
                                                        type="submit">
                                                    Huỷ
                                                </Button>

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <hr/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div className="text-white">
                                                    <div className="h5 text-white">
                                                        Chưa có tài khoản?
                                                        <span className="ml-2 h5">
                                                        <a href="/register">Đăng ký ngay</a>
                                                    </span>
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>


                                    </Form>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default LoginPage;
