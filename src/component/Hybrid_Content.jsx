import React from 'react';
import { GoDotFill } from "react-icons/go";
import { Row, Col, Card, Form, InputGroup, Image, Button, ListGroup, Table, Badge, Modal, Container, Tooltip, OverlayTrigger } from 'react-bootstrap';
import general from '../assets/image/general_logo.svg';
import hybrid from '../assets/image/hybrid.svg';
import exclamation from '../assets/image/exclamation.svg';
import timegreen from '../assets/image/time-green.svg';
import timered from '../assets/image/time-red.svg';
import time from '../assets/image/time.svg';
import { GoCheck } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Static_Content = () => {


    const [Topup, setTopupModal] = useState(false);
    const [proxy, setProxyModal] = useState(false);

    const handleClose4 = () => setTopupModal(false);
    const TopUpModal = () => setTopupModal(true);
    const hidetopup = () => setTopupModal(false);


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

            <div className='border-end border-dark float-start box-height box-width-sm width-seven hybrid-plan'>
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
                        <Card.Title className='fs-5 mb-4 text-light fw-3'>Purchase Plans</Card.Title>
                        <Row className="gx-2 gy-3">
                            <Col sm={12} lg={6} md={12} xs={12}>
                                <Card.Subtitle className="mb-2 fs-5">Location</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>Italy</option>
                                </Form.Select>
                            </Col>
                            <Col sm={12} lg={6} md={12} xs={12}>
                                <Card.Subtitle className="mb-2 fs-5">Data</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>10GB</option>
                                </Form.Select>
                            </Col>
                            <Col sm={12} lg={6} md={12} xs={12}>
                                <Card.Subtitle className="mb-2 fs-5">Length</Card.Subtitle>
                                <Form.Select>
                                    <option className='fw-lighter'>30 days</option>
                                </Form.Select>
                            </Col>
                            <Col sm={12} lg={6} md={12} xs={12}>
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
                                    <h3 className="mb-1 text-white">Hybrid ISPs
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <Image src={exclamation} height={13} className='ms-2 mb-1' />
                                        </OverlayTrigger></h3>
                                    <div className='text-orange'>$2.45/isp</div>
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
            <div className='float-end box-height box-width-lg width-seven hybrid-order'>
                <Card className='bg-dark2 box-margin proxies'>
                    <Card.Header className='mx-3 px-0 py-3 h3 text-light br-none d-flex justify-content-between align-items-center border-dark'>
                        <span>Your Orders</span>
                        <InputGroup className="max-width-select search search-orders">
                            <Form.Control
                                placeholder="Search Orders"
                            />
                            <Button variant="outline-secondary" id="button-addon2"><LuSearch /></Button>
                        </InputGroup>
                    </Card.Header>
                    <Card.Body className='pt-2 table-responsive'>
                        <Table bordered className='border-dark mb-0'>
                            <thead>
                                <tr className='no-border'>
                                    <th>Product</th>
                                    <th onClick={toggleSortByDate}>Date{renderArrowIcon('asc', 'date')} {renderArrowIcon('desc', 'date')}</th>
                                    <th>Quantity</th>
                                    <th>Expiration</th>
                                    <th>Location</th>
                                    <th className='text-end '><span className='action3' >Actions</span></th>
                                </tr>
                            </thead>
                            <tbody className='table-format'>
                                <tr className='no-border'>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={hybrid} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Hybrid </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m2">
                                        <Image src={timegreen} height={17} className='ms-1' /> 2 Days</div>
                                        </div>
                                    </div>
                                 </td> 
                                 <td className="mob-n">Hybrid</td>
                                 <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                        <div className='rounded-2 px-1 py-1 status-active fs-5 fw-3'><GoDotFill /> 2 Days</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                      {/* Mobile data  */}
                                    <td className="hybrid-data-mob">  
                                          <div className=' d-flex flex-bl align-items-center'> 
                                            <div className="data-section">                                
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">100%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="data-divide"> </div>
                                        </div>
                                        
                                        <div className='bg-dark5 data-used'>
                                             <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                             <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                         </div>
                                    </td>
                                     
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-3 help_center px-2 py-1 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1 down-btn" onClick={showdownload}>Download</Button>
                                        <Button className="rounded-3 px-2 py-1  btn-orange-grad text-white border-orange Purchase topup-btn" onClick={TopUpModal}>Topup</Button>
                                    </td>
                                </tr>



                                <tr className='no-border hybrid-data-no'>
                                    <td className='bg-dark5 round-left' colspan="3">
                                        <div className=' d-flex flex-bl align-items-center'> 
                                            <div className="data-section">                                
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">100%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td className='bg-dark5 data-used' colspan="2">
                                        <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                        <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                    </td>
                                    <td className='bg-dark5 round-right pe-0 top-nonem' align='right'>
                                        <Button className="rounded-3 px-2 py-1  btn-orange-grad text-white border-orange Purchase" onClick={TopUpModal}>Topup</Button>
                                    </td>
                                </tr>

                                {/*second tr */}
                                <tr className='no-border'>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={hybrid} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Hybrid </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m2">
                                        <Image src={timegreen} height={17} className='ms-1' /> 2 Days</div>
                                        </div>
                                    </div>
                                 </td> 
                                 <td className="mob-n">Hybrid</td>
                                 <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                        <div className='rounded-2 px-1 py-1 status-active fs-5 fw-3'><GoDotFill /> 2 Days</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                      {/* Mobile data  */}
                                    <td className="hybrid-data-mob">  
                                          <div className=' d-flex flex-bl align-items-center'> 
                                            <div className="data-section">                                
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">62%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4" style={{ height: "8px", width: '135px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: '#b1f55a' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                                            </div>
                                            <div className="data-divide"> </div>
                                        </div> 
                                        <div className='bg-dark5 data-used'>
                                             <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                             <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                         </div>
                                    </td>
                                     
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-3 help_center px-2 py-1 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1 down-btn" onClick={showdownload}>Download</Button>
                                    </td>
                                </tr>
 
                                <tr className='no-border hybrid-data-no'>
                                    <td className='bg-dark5 round-left' colspan="3">
                                        <div className=' d-flex flex-bl align-items-center padding-top-bottom10'> 
                                            <div className="data-section">                                
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">100%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4" style={{ height: "8px", width: '135px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: '#b1f55a' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td className='bg-dark5 data-used' colspan="2">
                                        <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                        <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                    </td>
                                    <td className='bg-dark5 round-right pe-0 top-nonem' align='right'>
                                        
                                    </td>
                                </tr>
                                {/*second tr end*/}


                             {/*3rd tr start*/}
                             <tr className='no-border'>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={hybrid} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Hybrid </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3 today-m2">
                                        <Image src={timegreen} height={17} className='ms-1' /> 2 Days</div>
                                        </div>
                                    </div>
                                 </td> 
                                 <td className="mob-n">Hybrid</td>
                                 <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                        <div className='rounded-2 px-1 py-1 status-active fs-5 fw-3'><GoDotFill /> 2 Days</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                      {/* Mobile data  */}
                                    <td className="hybrid-data-mob">  
                                          <div className=' d-flex flex-bl align-items-center'> 
                                            <div className="data-section">                                
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">62%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4" style={{ height: "8px", width: '135px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: '#b1f55a' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                                            </div>
                                            <div className="data-divide"> </div>
                                        </div> 
                                        <div className='bg-dark5 data-used'>
                                             <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                             <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                         </div>
                                    </td>
                                     
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-3 help_center px-2 py-1 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1 down-btn" onClick={showdownload}>Download</Button>
                                    </td>
                                </tr>
 
                                <tr className='no-border hybrid-data-no'>
                                    <td className='bg-dark5 round-left' colspan="3">
                                        <div className=' d-flex flex-bl align-items-center padding-top-bottom10'> 
                                            <div className="data-section">                                 
                                                <span className="data-left">Data Left: </span>
                                                <span className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2 badg-m">100%</span>
                                             <span className="data-gb"> 6.2GB</span> 
                                             </div> 
                                            <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2  badg-s">100%</Badge>
                                            <div className="progress progress-css rounded-4 ms-2 bg-dark4" style={{ height: "8px", width: '135px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: '#b1f55a' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td className='bg-dark5 data-used' colspan="2">
                                        <span className='border-start border-dark4 ps-3'> Used Today:</span>
                                        <span className='border-dark4 ps-3 text-right-m'> 1.2GB</span>
                                    </td>
                                    <td className='bg-dark5 round-right pe-0 top-nonem' align='right'>
                                        
                                    </td>
                                </tr>
                                {/*3rd tr end*/}
 

                                  {/*4th expired tr start*/}
                             <tr className='no-border'>
                                <td className="display_none1">
                                    <div className="order-headers1"> 
                                        <div className="product-item1"> <Image src={hybrid} height={20} className='ms-1' /></div>
                                        <div className="product-des1">
                                            <h3>Hybrid </h3>
                                            <h5> 26 Apr 2024 </h5>
                                        </div>
                                        <div className="waiting-btn">
                                        <div class="rounded-2 px-2 py-1 status-expire fs-5 fw-3 exp-p">
                                        <Image src={timered} height={17} className='ms-1' />Expired</div>
                                        </div>
                                    </div>
                                 </td> 
                                 <td className="mob-n">Hybrid</td>
                                 <td className="mob-n">26 Apr 2024</td>
                                    <td>
                                        <div className="qty1">
                                            <span className="qty-txt"> Quantity </span>
                                            <span className="qty-v1">50 </span>
                                        </div>
                                    </td>
                                    <td className="today-no">
                                        <div className='rounded-2 px-1 py-1 status-expire fs-5 fw-3'><GoDotFill /> Expired</div>
                                    </td>
                                    <td>
                                        <div className="location1">
                                            <span className="loc-txt"> Location </span>
                                            <span className="loc-val">Italy </span>
                                        </div>
                                    </td>
                                     
                                    <td className='text-end pe-0'>
                                        <Button className="rounded-3 help_center px-2 py-1 view-btn" onClick={ProxyModal}>View</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1 down-btn" onClick={showdownload}>Download</Button>
                                    </td>
                                </tr>
  
                                {/*4th expired tr end*/}
 
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>

            {/* topup modal */}

            <Modal show={Topup} onHide={handleClose4} centered className='custom-modal' >

                <Modal.Body className='m-0 p-0 border border-2 border-dark  px-0 rounded-modal bg-modal' >
                    <div className="d-flex justify-content-between  border-0 border-bottom border-dark border-2">
                        <h6 className='text-white my-2 ms-3 py-1 fs-5'>Topup</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={hidetopup}><RxCross2 className='fs-4' /></Button>
                    </div>
                    {/* <hr className='my-1 text-dark75'  /> */}
                    <Container fluid className='my-3 mt-4 px-3'>
                        <Card className='rounded-3 bg-modal-input p-3 topupcard'>
                            <h6 className='fs-5 text-white mb-4'>Data Left</h6>
                            <div className="side-line mb-1">
                                <div className="text-light fs-3">2.3GB <Badge className="border border-dark fs-6 text-dark3 fw-normal px-1 py-1 ms-2">18%</Badge></div>
                            </div>
                            <div className="progress mt-1" style={{ height: "45px" }}>
                                <div className="progress-bar bg-orange" role="progressbar" style={{ width: "70%" }}
                                    aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </Card>
                        <hr className='my-4 text-dark75' />
                        <Card className='promo bg-modal-input topupcard'>
                            <h6 className='fs-5 text-dark3 mt-3 mb-2 ms-3 fw-4'>Topup Amount</h6>
                            <div className='text-start mb-3 px-3'>
                                <Form.Select className='text-light border-0 fs-5 bg-Topup-modal arrow-color'>
                                    <option ><span className='fw-lighter m-0 p-0'>8GB</span></option>
                                </Form.Select>

                            </div>
                        </Card>
                        <Card className="container-fluid mt-3 bg-modal-input topupcard" >
                            <div className="m-0 p-0 text-start mt-3">
                                <h6 className="text-white fs-5">Order Summarry</h6>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <h6 className='fs-5 text-dark3 mb-0 fw-4'>Total Price</h6>
                                <h5 className="text-white fs-3 fw-light mb-0">$45</h5>
                            </div>
                            <hr className='my-3 text-dark3' />
                            <h6 className='fs-5 text-dark3 fw-4'>Payment Method</h6>
                            <Form.Select className='bg-Topup-modal arrow-color'>
                                <option>Stripe</option>
                            </Form.Select>
                            <div className='btn btn-md w-100 my-4 mx-1 text-white btn-orange-grad'>Purchase</div>
                        </Card>

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
