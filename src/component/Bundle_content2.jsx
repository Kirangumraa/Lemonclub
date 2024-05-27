import React from 'react';
import { Row, Col, Card, Image, Button, Form, ListGroup } from 'react-bootstrap';
import general from '../assets/image/general_logo.svg';
import { GoCheck } from "react-icons/go";
import { IoMdStopwatch } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
const Bundle_content2 = () => {
    const showpurchase = () => {
        toast("Purchased Successfully");
    }
    const [activeButton, setActiveButton] = useState(null);
    const [smallprice, setsmallPrice] = useState('$40')
    const [smallprice2, setsmallPrice2] = useState('$34')
    const [activeButton2, setActiveButton2] = useState(null);
    const [smallprice3, setsmallPrice3] = useState('$40')
    const [smallprice4, setsmallPrice4] = useState('$34')


    const handleClick = (button) => {
        setActiveButton(button);
    };
    const activeStyle = {
        background: 'linear-gradient(to bottom, #f4866a 0%,#f16a48 1%,#eb4e27 100%)',
        color: 'white'
    };
    const handlesmallPrice = () => {
        setsmallPrice("$40")
        setsmallPrice2("$34")
    }
    const handlemediumPrice = () => {
        setsmallPrice("$80")
        setsmallPrice2("$68")
    }
    const handlelargePrice = () => {
        setsmallPrice("$120")
        setsmallPrice2("$102")
    }


    const handleClick2 = (button) => {
        setActiveButton2(button);
    };
    const activeStyle2 = {
        background: 'linear-gradient(to bottom, #f4866a 0%,#f16a48 1%,#eb4e27 100%)',
        color: 'white'
    };
    const handlesmallPrice2 = () => {
        setsmallPrice3("$40")
        setsmallPrice4("$34")
    }
    const handlemediumPrice2 = () => {
        setsmallPrice3("$80")
        setsmallPrice4("$68")
    }
    const handlelargePrice2 = () => {
        setsmallPrice3("$120")
        setsmallPrice4("$102")
    }

    return (<>

        <div className='border-end border-dark float-start box-height box-width-sm bundle-boxes'>
            <ToastContainer position="top-right"
                autoClose={3000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Card className='bg-dark2 box-margin'>
                <Card.Body>
                    <Card.Title className='h3 mb-4 text-light d-flex alignm-items-center justify-content-between'>
                        <span className='fs-5'>Bundle Name</span>
                        <span className='bg-orange px-1 py-1 rounded fs-5'><IoMdStopwatch /> 32h Left</span>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 fs-5">Package</Card.Subtitle>
                    <Row className="gx-2 gy-3">
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick('small'); handlesmallPrice(); }}
                                style={activeButton === 'small' ? activeStyle : {}}
                            >
                                Small
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick('medium'); handlemediumPrice() }}
                                style={activeButton === 'medium' ? activeStyle : {}}
                            >
                                Medium
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick('large'); handlelargePrice() }}
                                style={activeButton === 'large' ? activeStyle : {}}
                            >
                                Large
                            </Button>
                        </Col>
                    </Row>
                    <Card.Subtitle className="mb-2 fs-5 mt-3">Location</Card.Subtitle>
                    <Form.Select>
                        <option className='fw-lighter'>Italy</option>
                    </Form.Select>
                    <Card.Text className='border-top border-dark pt-3 mt-3'>
                        <div className='d-flex align-items-center'>
                            <Image src={general} alt="Image" height={40} />
                            <div className='aioisp'>
                                <h3 className="mb-1 text-white">Small Bundle</h3>
                                <div className='text-orange'>Save $30</div>
                            </div>
                        </div>
                    </Card.Text>

                    <Card.Subtitle className="mb-2 fs-5 mt-4 text-light fw-light">Includes:</Card.Subtitle>
                    <Row>
                         <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Price</span>
                        <span className='text-light fs-5 fw-light '>{smallprice}</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <span className='text-dark3 fs-5'>Discount</span>
                        <span className='text-light fs-5 text-orange'>15%</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Total Price</span>
                        <span className='text-light fs-3 fw-light'>{smallprice2}</span>
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-dark3 fs-5 border-top border-dark pt-3 mt-2 mb-0">Payment Method</Card.Subtitle>
                    <Form.Select>
                        <option>Stripe</option>
                    </Form.Select>
                    <Button className='border-0 w-100 text-white btn-orange-grad mt-4 py-2 Purchase' onClick={showpurchase}>Purchase</Button>
                </Card.Body>
            </Card>
        </div>

        <div className='border-end border-dark float-start box-height box-width-sm bundle-boxes'>
            <Card className='bg-dark2 box-margin'>
                <Card.Body>
                    <Card.Title className='h3 mb-4 text-light d-flex alignm-items-center justify-content-between'>
                        <span className='fs-5'>Bundle Name</span>
                        <span className='bg-orange px-1 py-1 rounded fs-5'><IoMdStopwatch /> 32h Left</span>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 fs-5">Package</Card.Subtitle>
                    <Row className="gx-2 gy-3">
                         <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('small'); handlesmallPrice2(); }}
                                style={activeButton2 === 'small' ? activeStyle2 : {}}
                            >
                                Small
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('medium'); handlemediumPrice2() }}
                                style={activeButton2 === 'medium' ? activeStyle2 : {}}
                            >
                                Medium
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('large'); handlelargePrice2() }}
                                style={activeButton2 === 'large' ? activeStyle2 : {}}
                            >
                                Large
                            </Button>
                        </Col>
                    </Row>
                    <Card.Subtitle className="mb-2 fs-5 mt-3">Location</Card.Subtitle>
                    <Form.Select>
                        <option className='fw-lighter'>Italy</option>
                    </Form.Select>
                    <Card.Text className='border-top border-dark pt-3 mt-3'>
                        <div className='d-flex align-items-center'>
                            <Image src={general} alt="Image" height={40} />
                            <div className='aioisp'>
                                <h3 className="mb-1 text-white">Small Bundle</h3>
                                <div className='text-orange'>Save $30</div>
                            </div>
                        </div>
                    </Card.Text>

                    <Card.Subtitle className="mb-2 fs-5 mt-4 text-light fw-light">Includes:</Card.Subtitle>
                    <Row>
                    <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Price</span>
                        <span className='text-light fs-5 fw-light '>{smallprice3}</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <span className='text-dark3 fs-5'>Discount</span>
                        <span className='text-light fs-5 text-orange'>15%</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Total Price</span>
                        <span className='text-light fs-3 fw-light'>{smallprice4}</span>
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-dark3 fs-5 border-top border-dark pt-3 mt-2 mb-0">Payment Method</Card.Subtitle>
                    <Form.Select>
                        <option>Stripe</option>
                    </Form.Select>
                    <Button className='border-0 w-100 text-white btn-orange-grad mt-4 py-2 Purchase' onClick={showpurchase}>Purchase</Button>
                </Card.Body>
            </Card>
        </div>

        <div className='border-end border-dark float-start box-height box-width-sm bundle-boxes'>
            <Card className='bg-dark2 box-margin'>
                <Card.Body>
                    <Card.Title className='h3 mb-4 text-light d-flex alignm-items-center justify-content-between'>
                        <span className='fs-5'>Bundle Name</span>
                        <span className='bg-orange px-1 py-1 rounded fs-5'><IoMdStopwatch /> 32h Left</span>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 fs-5">Package</Card.Subtitle>
                    <Row className="gx-2 gy-3">
                         <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('small'); handlesmallPrice2(); }}
                                style={activeButton2 === 'small' ? activeStyle2 : {}}
                            >
                                Small
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('medium'); handlemediumPrice2() }}
                                style={activeButton2 === 'medium' ? activeStyle2 : {}}
                            >
                                Medium
                            </Button>
                        </Col>
                        <Col sm={4} lg={4} md={4} xs={4}>
                            <Button
                                className="rounded-3 help_center px-2 py-1 fs-5 w-100"
                                onClick={() => { handleClick2('large'); handlelargePrice2() }}
                                style={activeButton2 === 'large' ? activeStyle2 : {}}
                            >
                                Large
                            </Button>
                        </Col>
                    </Row>
                    <Card.Subtitle className="mb-2 fs-5 mt-3">Location</Card.Subtitle>
                    <Form.Select>
                        <option className='fw-lighter'>Italy</option>
                    </Form.Select>
                    <Card.Text className='border-top border-dark pt-3 mt-3'>
                        <div className='d-flex align-items-center'>
                            <Image src={general} alt="Image" height={40} />
                            <div className='aioisp'>
                                <h3 className="mb-1 text-white">Small Bundle</h3>
                                <div className='text-orange'>Save $30</div>
                            </div>
                        </div>
                    </Card.Text>

                    <Card.Subtitle className="mb-2 fs-5 mt-4 text-light fw-light">Includes:</Card.Subtitle>
                    <Row>
                       <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6} xs={12}>
                            <ListGroup className='mb-0 check_list'>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                                <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 25 Static Proxies</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Price</span>
                        <span className='text-light fs-5 fw-light '>{smallprice3}</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <span className='text-dark3 fs-5'>Discount</span>
                        <span className='text-light fs-5 text-orange'>15%</span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-2 mb-0">
                        <span className='text-dark3 fs-5'>Total Price</span>
                        <span className='text-light fs-3 fw-light'>{smallprice4}</span>
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-dark3 fs-5 border-top border-dark pt-3 mt-2 mb-0">Payment Method</Card.Subtitle>
                    <Form.Select>
                        <option>Stripe</option>
                    </Form.Select>
                    <Button className='border-0 w-100 text-white btn-orange-grad mt-4 py-2 Purchase' onClick={showpurchase}>Purchase</Button>
                </Card.Body>
            </Card>
        </div>
    </>
    );
}

export default Bundle_content2;
