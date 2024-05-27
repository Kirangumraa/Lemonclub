import React from 'react';
import { GoDotFill } from "react-icons/go";
import { Row, Col, Card, Form, InputGroup, Button, Image, ListGroup, Table, Tooltip, OverlayTrigger, Modal, Container } from 'react-bootstrap';
import { LuLock } from "react-icons/lu";
import general from '../assets/image/general_logo.svg';
import lock1 from '../assets/image/lock1.svg';
import exclamation from '../assets/image/exclamation.svg';
import product from '../assets/image/product.svg';
import timegreen from '../assets/image/time-green.svg';
import timered from '../assets/image/time-red.svg';
import time from '../assets/image/time.svg';
import { GoCheck } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Static_Content = () => {
    const [resetPass, setResetModal] = useState(false);
    const [proxy, setProxyModal] = useState(false);

    const handleClose5 = () => setResetModal(false);
    const resetPassModal = () => setResetModal(true);
    const hidepass = () => setResetModal(false);

    const handleClose3 = () => setProxyModal(false);
    const ProxyModal = () => setProxyModal(true);
    const hideproxy = () => setProxyModal(false);

    const showdownload = () => {
        toast("Downloaded Successfully");
    }
    const tooltip = (
        <Tooltip id="tooltip">Text goes here</Tooltip>
    );
    const showpurchase = () => {
        toast("Purchased Successfully");
    }

    const [sortByDate, setSortByDate] = useState('desc');
    const toggleSortByDate = () => {
        if (sortByDate === 'asc') {
            setSortByDate('desc');
        } else {
            setSortByDate('asc');
        }
    };

    const renderArrowIcon = (sortDirection, column) => {
        if ((column === 'date' && sortByDate === sortDirection)) {
            return sortDirection === 'asc' ? <IoIosArrowRoundUp className='text-dark3 fs-3' /> : <IoIosArrowRoundDown className='text-dark3 fs-3' />;
        } else {
            return null;
        }
    };
    return (
        <>
            <div className='border-end border-dark float-start box-height box-width-sm static-plan'>
                <ToastContainer position="top-right" autoClose={3000} limit={3} hideProgressBar={false} newestOnTop={false} closeOnClick                    rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
                <Card className='bg-dark2 box-margin'>
                    <Card.Body>
                        <Card.Title className='fs-5 mb-4 text-light fw-3'>Purchase Plans</Card.Title>
                        <Row className="gx-2 gy-3">
                            <Col sm={6}>
                                <Card.Subtitle className="mb-2 fs-5">Package</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter fs-5'>AIO ISPs</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Card.Subtitle className="mb-2 fs-5">Location</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>Italy</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Card.Subtitle className="mb-2 fs-5">Length</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>30 days</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Card.Subtitle className="mb-2 fs-5">Quantity</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>255</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Card.Text className='border-top border-dark pt-4 mt-3'>
                            <div className='d-flex align-items-center'>
                                <Image src={general} alt="Image" height={40} />
                                <div className='aioisp' >
                                    <h3 className="mb-1 text-white">AIO ISPs
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <Image src={exclamation} height={13} className='ms-2 mb-1' />
                                        </OverlayTrigger></h3>
                                    <div className='text-orange'>$1.45/isp</div>
                                </div>
                            </div>
                        </Card.Text>
                        <ListGroup className='mb-0 check_list'>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Speed 100ms - 300ms</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 14 million Dedicated IPs</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Feature 3</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Feature 4</ListGroup.Item>
                            <ListGroup.Item className='text-dark3'><GoCheck /> Feature 5</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card className='bg-dark2 box-margin'>
                    <Card.Body>
                        <Card.Title className='fs-5 mb-4 text-light'>Order Summarry</Card.Title>
                        <Card.Subtitle className="d-flex justify-content-between align-items-center border-bottom border-dark pb-3 mb-4">
                            <span className='text-dark3 fs-5'>Total price</span>
                            <span className='text-light fs-3 fw-light'>$45</span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-dark3 fs-5">Payment Method</Card.Subtitle>
                        <Form.Select>
                            <option>Stripe</option>
                        </Form.Select>
                        <Button className='border-0 w-100 text-white btn-orange-grad mt-4 py-2 Purchase' onClick={showpurchase}>Purchase</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='float-end box-height box-width-lg static-order'>
                <Card className='bg-dark2 box-margin proxies'>
                    <Card.Header className='mx-3 px-0 py-3 h3 text-light d-flex justify-content-between align-items-center border-dark'>
                        <span className='fs-5'>Your Orders</span>
                        <InputGroup className="max-width-select search">
                            <Form.Control
                                placeholder="Search Orders"
                            />
                            <Button variant="outline-secondary" id="button-addon2"><LuSearch /></Button>
                        </InputGroup>
                    </Card.Header>
                    <Card.Body className='pt-2 table-responsive px-2'>
                        <Table bordered className='border-dark btm-table mb-0 mx-0'>
                            <thead>
                                <tr className='no-border '>
                                    <th className='fw-3'>Product</th>
                                    <th className='fw-3' onClick={toggleSortByDate}> Date {renderArrowIcon('asc', 'date')} {renderArrowIcon('desc', 'date')}</th>
                                    <th className='fw-3'>Quantity</th>
                                    <th className='fw-3 Expiration'>Expiration</th>
                                    <th className='fw-3'>Location</th>
                                    <th className='text-end fw-3 static-table' ><span >Actions</span></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className='no-border'>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>AIO ISPs </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m">
                                        <Image src={time} height={17} className='ms-1' /> Today</div>
                                        </div>
                                    </div>
                                 </td>

                                    <td className="mob-n">AIO ISPs</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                        <div className='rounded-2 px-1 py-1 status-wait fw-3'><GoDotFill className='fs-6' /> Today</div>
                                    </td>
                                    <td>
                                         <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>
 
                                 <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m2">
                                        <Image src={timegreen} height={17} className='ms-1' /> 2 Days</div>
                                        </div>
                                    </div>
                                 </td>

                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-active fw-3'><GoDotFill className='fs-6' /> 2 Days</div>
                                    </td>
                                    <td>
                                         <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>


                                 <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m2">
                                        <Image src={timegreen} height={17} className='ms-1' /> 21 Days</div>
                                        </div>
                                    </div>
                                 </td>

                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-active fw-3'><GoDotFill className='fs-6' /> 21 Days</div>
                                    </td>
                                    <td>
                                         <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>
 
                                <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-expire fs-5 fw-3 today-m3">
                                        <Image src={timered} height={17} className='ms-1' /> Expired</div>
                                        </div>
                                    </div>
                                 </td> 
                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-expire fw-3'><GoDotFill className='fs-6' /> Expired</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>

                                <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-expire fs-5 fw-3 today-m3">
                                        <Image src={timered} height={17} className='ms-1' /> Expired</div>
                                        </div>
                                    </div>
                                 </td> 
                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-expire fw-3'><GoDotFill className='fs-6' /> Expired</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>

                                <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-expire fs-5 fw-3 today-m3">
                                        <Image src={timered} height={17} className='ms-1' /> Expired</div>
                                        </div>
                                    </div>
                                 </td> 
                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-expire fw-3'><GoDotFill className='fs-6' /> Expired</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr>

                                <tr>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={product} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Sorrentos </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-expire fs-5 fw-3 today-m3">
                                        <Image src={timered} height={17} className='ms-1' /> Expired</div>
                                        </div>
                                    </div>
                                 </td> 
                                    <td className="mob-n">Sorrentos</td>
                                    <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                    <div className='rounded-2 px-1 py-1 status-expire fw-3'><GoDotFill className='fs-6' /> Expired</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-2 help_center px-2 py-1 fs-4 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-2 help_center ms-2 px-2 py-1 fs-4 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-2 help_center_btn ms-2 py-1 px-2 pass-btn">
                                        <Image src={lock1} alt="generate" height={17.8} onClick={resetPassModal} className='residential-icon' />
                                        <span> Reset Password</span></Button>
                                    </td>
                                </tr> 
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>


            {/* Reset password modal */}
            <Modal show={resetPass} onHide={handleClose5} centered className='custom-modal' >

                <Modal.Body className='m-0 p-0 border border-2 border-dark px-0  rounded-modal bg-modal'>
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2 ms-3 py-2 fs-5'>Reset Password</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={hidepass}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <hr className='my-1 text-dark75 border-2' />
                    <Container fluid className='my-3 px-3'>
                        <p className='fs-5 fw-4'>Are you sure wants to reset the proxy password ?</p>
                        <p className='fs-5 fw-4'>This action cannot been undone</p>

                    </Container>
                    <Container fluid className=' mt-2 mb-4 px-2'>
                        <Row className='g-1'>
                            <Col md={6}>
                                <Button className='w-100 mt-4  py-2 f-1 bg-dark btn-border' onClick={hidepass}>Cancel</Button>
                            </Col>
                            <Col md={6}>
                                <Button className='w-100 mt-4 border-0 py-2 btn-orange-grad fs-4 text-white' >Confirm</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>


            {/* Proxie List modal */}

            <Modal show={proxy} onHide={handleClose3} centered className='custom-modal' >

                <Modal.Body className='m-0 p-0 border border-1 border-dark px-0  rounded-modal bg-modal'  >
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2 ms-3 py-2 fs-5'>Proxy List</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={hideproxy}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <hr className='my-1 text-dark75' />

                    <Container fluid className='mt-3 mb-4 px-3'>
                        <Card className='promo bg-modal-input'>
                            <div className='ms-2 mt-3 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>
                            <div className='ms-2 mt-0 mb-5 pb-4 fs-5 text-dark3'>IP:PORT:USERNAME:PASSWORD</div>

                        </Card>
                        <Container fluid className='mt-3 px-0'>
                            <Row className='g-1'>
                                <Col md={6}>
                                    <Button className='w-100 mt-4  py-2 f-1 cmn-btn-format btn-border' onClick={hideproxy}>Cancel</Button>
                                </Col>
                                <Col md={6}>
                                    <Button className='w-100 mt-4 border-0 py-2 btn-orange-grad fs-4 text-white' >Confirm</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Static_Content;
