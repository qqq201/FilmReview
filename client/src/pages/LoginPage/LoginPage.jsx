import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './loginPage..css'

const LoginPage = () => {
    return (

        <div id="loginPage">

            <Container id="" className={"d-flex justify-content-end"}>
                <Row>
                    <Col lg={12} xl={12}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Button variant="btn btn-success btn-lg " type="submit">
                                        Đăng Nhập
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="btn btn-danger btn-lg" type="submit">
                                        Huỷ
                                    </Button>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default LoginPage;
