import copy from "copy-to-clipboard";
import { Container, Row, Col, Card, Image, InputGroup, Form, Modal, Button, Badge, ListGroup, NavLink, Table, Tabs, Tab, Tooltip, OverlayTrigger } from 'react-bootstrap';
import exclamation from '../assets/image/exclamation.svg';
import general from '../assets/image/general_logo.svg';
import gear from '../assets/image/gear.svg';
import faq from '../assets/image/faq.svg';
import watch from '../assets/image/watch.svg';
import product from '../assets/image/product.svg';
import people from '../assets/image/people.svg';
import orderfilter from '../assets/image/order-filter.svg';
import inserticone from '../assets/image/insert.svg';
import { GoDotFill } from "react-icons/go";
import { useState, useEffect } from "react";
import { GoCopy } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loyality_status from './Loyality_status';



const Home_content = () => {

    //*********Handle modal**********************//
    const [insert, setInsertModal] = useState(false);
    const [resetPass, setResetModal] = useState(false);
    const [offer, setofferModal] = useState(false);


    const handleClose = () => setInsertModal(false);
    const insertModal = () => setInsertModal(true);
    const hideinsert = () => setInsertModal(false);

    const handleClose5 = () => setResetModal(false);
    const resetPassModal = () => setResetModal(true);
    const hidepass = () => setResetModal(false);

    const handleClose6 = () => setofferModal(false);
    const offerModal = () => setofferModal(true);


    //*********Copy data**********************//
    const [copyText, setCopyText] = useState("promocode25");
    const [buttonText, setButtonText] = useState('Copy');
    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    };
    const copyToClipboard = () => {
        copy(copyText);
        setButtonText('Copied');
    };

    const [copyText2, setCopyText2] = useState("promocode25");
    const [buttonText2, setButtonText2] = useState('Copy');
    const handleCopyText2 = (e) => {
        setCopyText2(e.target.value);
    };
    const copyToClipboard2 = () => {
        copy(copyText2);
        setButtonText2('Copied');
    };

    const [copyText3, setCopyText3] = useState("welcome10");
    const [buttonText3, setButtonText3] = useState('Copy');
    const handleCopyText3 = (e) => {
        setCopyText3(e.target.value);
    };
    const copyToClipboard3 = () => {
        copy(copyText3);
        setButtonText3('Copied');
    };
    const copyTextTable = () => {
        const spanText = document.querySelector('.copytable').textContent;
        navigator.clipboard.writeText(spanText)
            .then(() => {
                toast("Copied Successfully");
                setTimeout(() => setButtonText('Copy'), 2000); // Reset button text after 2 seconds
            })
            .catch(err => console.error('Unable to copy text', err));
    };


    //********* download popup and tooltip**********************//
    const showdownload = () => {
        toast("Downloaded Successfully");
    }

    const tooltip = (
        <Tooltip id="tooltip">Text goes here</Tooltip>
    );

    //*********blur bg after opening modal**********************//
    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (offer) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [offer]);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (insert) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [insert]);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (resetPass) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [resetPass]);

    //*********Date and Total arrow icon change**********************//
    const [sortByDate, setSortByDate] = useState('desc');
    const [sortByTotal, setSortByTotal] = useState('desc');
    const toggleSortByDate = () => {
        if (sortByDate === 'asc') {
            setSortByDate('desc');
        } else {
            setSortByDate('asc');
        }
    };
    const toggleSortByTotal = () => {
        if (sortByTotal === 'asc') {
            setSortByTotal('desc');
        } else {
            setSortByTotal('asc');
        }
    };
    const renderArrowIcon = (sortDirection, column) => {
        if ((column === 'date' && sortByDate === sortDirection) || (column === 'total' && sortByTotal === sortDirection)) {
            return sortDirection === 'asc' ? <IoIosArrowRoundUp className='text-dark3 fs-3' /> : <IoIosArrowRoundDown className='text-dark3 fs-3' />;
        } else {
            return null;
        }
    };



    return (
        <>
            <div className='d-lg-flex hm-top-pnl' >
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
                <Card className='bg-dark2 status'>
                    <Card.Body>
                        <Card.Title className='h3 mb-4 text-light d-flex alignm-items-center justify-content-between'>
                            <span className='fs-5'>
                                Loyality Status
                                <OverlayTrigger placement="right" overlay={tooltip}>
                                    <Image src={exclamation} height={12} className='ms-1' />
                                </OverlayTrigger>
                            </span>
                            <span className='fs-5'><span className='text-dark3'>Restarting:</span> 5:14:54:54</span>
                        </Card.Title>
                        <div className="d-flex justify-content-between pt-3">
                            <div className="side-line ">
                                <h3 className='text-dark3 fs-5 mb-1'>Monthly Spent</h3>
                                <div className="d-flex mx-0 px-0">
                                    <div className="text-white fs-3">$233.40 <Badge className="bg-dark4 fs-6 text-light2 fw-normal  ms-1 mb-1 badge1" >Silver</Badge></div>
                                </div>
                            </div>
                            <div className="side-line left-space">
                                <h3 className='text-dark3 ms-2 fs-5 mb-1'>Gold
                                    <OverlayTrigger placement="left" overlay={tooltip}>
                                        <Image src={exclamation} height={12} className='ms-1' />
                                    </OverlayTrigger>
                                </h3>
                                <div className="text-white fs-3 ms-2" >$275.00</div>
                            </div>
                        </div>
                        <div className="progress mt-2 rounded-bottom" style={{ height: "45px" }}>
                            <div className="progress-bar bg-orange" role="progressbar" style={{ width: "70%" }}
                                aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100">
                            </div>
                        </div>
                        <InputGroup className="mt-3 pt-4 ">
                            <Form.Control className='bg-dark5 border border-dark text-dark3 fs-5 ' id='form-control'
                                placeholder="promocode25"
                                aria-label="promocode25"
                                aria-describedby="basic-addon2"
                                value={copyText}
                                onChange={handleCopyText}
                                readOnly
                            />

                            <Button variant="outline-secondary" id="button-addon2" className='promo text-white btn-orange-grad border-0' onClick={copyToClipboard} >{buttonText}</Button>
                        </InputGroup>
                    </Card.Body>
                </Card>

                <Card className='bg-dark2 announce'>
                    <Card.Body>
                        <h3 className="mb-3 pb-1 text-light fs-5">Announcements</h3>
                        <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className='border-dark '>
                            <Tab eventKey="general" title={["General", <Badge className="bg-dark4 fs-5 text-light2 fw-normal  py-1 ms-2 badge2" >3</Badge>]} className='overflow-y-scroll tab1' >
                                <div className='cmn-area theduke ' >
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <Image src={general} alt="Image" height={35} />
                                            <div className='ms-2'>
                                                <h3 className="mb-0 text-white fs-5">TheDuke</h3>
                                                <div className='fs-5'>on General</div>
                                            </div>
                                        </div>
                                        <div className='fs-5'>14h ago</div>
                                    </div>
                                    <div className="">
                                        <h4 className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                                    </div>
                                </div>
                                <div className=' cmn-area ' >
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className='d-flex align-items-center'>
                                            <Image src={general} alt="Image" height={35} />
                                            <div className='ms-2'>
                                                <h3 className="mb-0 text-white fs-5">TheDuke</h3>
                                                <div className='fs-5'>On General</div>
                                            </div>
                                        </div>
                                        <div className='fs-5'>14h ago</div>
                                    </div>
                                    <div className="">
                                        <h4 className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                                    </div>
                                </div>
                                <div className='cmn-area'>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className='d-flex align-items-center'>
                                            <Image src={general} alt="Image" height={35} />
                                            <div className='ms-2'>
                                                <h3 className="mb-0 text-white fs-5">TheDuke</h3>
                                                <div className='fs-5'>On General</div>
                                            </div>
                                        </div>
                                        <div className='fs-5'>14h ago</div>
                                    </div>
                                    <div className="">
                                        <h4 className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="status" title="Status">
                                <div className='mt-4'>Coming Soon</div>
                            </Tab>
                            <Tab eventKey="promotions" title="Promotions" className='overflow-y-scroll tab1'>
                                <Card className='border-dark rouded-4 mt-3 bg-modal p-2 '>


                                    <div className="d-flex justify-content-between mt-1">
                                        <h3 className='text-white fs-5'>25% Off
                                            <OverlayTrigger placement="right" overlay={tooltip}>
                                                <Image src={exclamation} height={12} className='ms-1' />
                                            </OverlayTrigger>
                                        </h3>
                                        <h3 className='text-dark3 fs-5'><Image src={watch} height={12} className='ms-1 ' />12h Left</h3>
                                    </div>
                                    <InputGroup className="mt-1">
                                        <Form.Control className='bg-modal-input border border-dark text-dark3 fs-5'
                                            placeholder="promocode25"
                                            aria-label="promocode25"
                                            aria-describedby="basic-addon2"
                                            value={copyText2}
                                            onChange={handleCopyText2}
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" className='promo text-white btn-orange-grad border-0' onClick={copyToClipboard2}>{buttonText2}</Button>
                                    </InputGroup>

                                </Card>

                                <Card className='border-dark rouded-4 mt-2 bg-modal p-2'>

                                    <div className="d-flex justify-content-between ">
                                        <h3 className='text-dark3 fs-5'>25% Off On Residential Proxies
                                            <OverlayTrigger placement="right" overlay={tooltip}>
                                                <Image src={exclamation} height={12} className='ms-1' />
                                            </OverlayTrigger>
                                        </h3>
                                        <div className='rounded-2 px-2 py-1 status-expired'><GoDotFill className='me-1' />Expired</div>
                                    </div>
                                    <InputGroup className="">
                                        <Form.Control className='bg-modal-input border border-dark text-dark3 fs-5'
                                            placeholder="promocode25"
                                            aria-label="promocode25"
                                            aria-describedby="basic-addon2"
                                            value={copyText}
                                            onChange={handleCopyText}
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" className='promo text-white btn-orange-grad border-0 disabled'>Copy</Button>
                                    </InputGroup>

                                </Card>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>

                <Card className='bg-dark2 help-center'>
                    <Card.Body>
                        <h3 className="mb-4 text-light fs-5 proxies">Help Center</h3>

                        <ListGroup id='help-links' variant="flush"  >
                            <ListGroup.Item className="menu_item mb-half " >
                                <NavLink to={''} className="help-icon1 menu_link fs-4" onClick={insertModal}><Image src={inserticone} alt="Globe Icon" height={20} className='me-2' /> Insert Vat</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="menu_item mb-half">
                                <NavLink to={''} className='help-icon2 menu_link fs-4' onClick={resetPassModal}><Image src={faq} alt="Globe Icon" height={20} className='me-2' /> FAQ</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="menu_item mb-half">
                                <NavLink to={''} className='help-icon3 menu_link fs-4' onClick={offerModal}><Image src={gear} alt="Globe Icon" height={20} className='me-2' /> Troubleshooting</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="menu_item " >
                                <NavLink to={''} className='help-icon4 menu_link fs-4'><Image src={people} alt="Globe Icon" height={20} className='me-2' /> Talk To support</NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

            <Card className='bg-dark2 btm-table '>
             <div className="order-padding"><h3 className="text-light fs-5 proxies your-orders-mob">Your Orders 
                 <Image src={orderfilter} height={20} className='ms-1' />
                 </h3>
              </div>
                <Card.Body className='px-2 table-responsive'>
                    <Table bordered className='border-dark my-0 Home-table' >
                        <thead>
                            <tr className='no-border'>
                                <th width="15.8%">ID</th>
                                <th width="19%">Product</th>
                                <th width="16.5%" onClick={toggleSortByDate}>  Date {renderArrowIcon('asc', 'date')} {renderArrowIcon('desc', 'date')}</th>
                                <th width="11%">Quantity</th>
                                <th>Status</th>
                                <th onClick={toggleSortByTotal}>  Total {renderArrowIcon('asc', 'total')} {renderArrowIcon('desc', 'total')}</th>
                                <th className='text-end action1'><span >Actions</span></th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr className='no-border'>
                            <td className="display_none"> {/* mobile view*/}
                                <div className="order-headers"> 
                                   <div className="product-item"> <Image src={product} height={20} className='ms-1' /></div>
                                   <div className="product-des">
                                        <h3>Static Proxies </h3>
                                        <h5> 26 Apr 2024 </h5>
                                    </div>
                                    <div className="waiting-btn">
                                    <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="me-1" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>Waiting</div>
                                     </div>
                                </div>
                             </td>
                                <td>
                                    <div className="d-flex align-items-center id-table">
                                        <span className="id-mob">ID </span>
                                        <GoCopy className='me-2 fs-6 cursor' onClick={copyTextTable} />
                                        <span className="copytable">#AP1934</span>
                                    </div>
                                </td>
                                <td className='fs-5 none-tbl'>Static Proxies</td>
                                <td className='fs-5 none-tbl'>26 April 2016</td>
                                <td className='fs-5'>
                                <div className="qty-table">
                                    <span className="qty-mob">Quantity </span>
                                    <span className="qty-value">4GB </span>
                                </div>
                                </td>
                                <td className="none-tbl">
                                    <div className='rounded-2 px-2 py-1 status-wait2 fs-5 fw-3'><GoDotFill className='me-1' />Waiting</div>
                                </td>
                                <td className='fs-5'>
                                    <div className="total-table">
                                        <span className="total-mob">Total </span>
                                        <span className="total-vae">  $33.00 </span>
                                    </div>
                                </td>
                                <td className='text-end download-mob'>
                                    <div className="download-pad">
                                      <Button className="rounded-3 help_center fs-4 download" onClick={showdownload}>Download Invoice</Button>
                                     </div></td> 
                            </tr>
                            <tr>
                            <td className="display_none">
                                <div className="order-headers"> 
                                   <div className="product-item"> <Image src={product} height={20} className='ms-1' /></div>
                                   <div className="product-des">
                                        <h3>Static Proxies </h3>
                                        <h5> 26 Apr 2024 </h5>
                                    </div>
                                    <div className="waiting-btn">
                                    <div class="rounded-2 px-2 py-1 status-wait2 fs-5 fw-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="me-1" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>Waiting</div>
                                     </div>
                                </div>
                             </td>
                                <td>
                                    <div className="d-flex align-items-center id-table">
                                        <span className="id-mob">ID </span>
                                        <GoCopy className='me-2 fs-6 cursor' onClick={copyTextTable} />
                                        <span className="copytable">#AP1934</span>
                                    </div>
                                </td>
                                <td className='fs-5 none-tbl'>Static Proxies</td>
                                <td className='fs-5 none-tbl'>26 April 2016</td>
                                <td className='fs-5'>
                                <div className="qty-table">
                                    <span className="qty-mob">Quantity </span>
                                    <span className="qty-value">4GB </span>
                                </div>
                                </td>
                                <td className="none-tbl">
                                    <div className='rounded-2 px-2 py-1 status-wait2 fs-5 fw-3'><GoDotFill className='me-1' />Waiting</div>
                                </td>
                                <td className='fs-5'>
                                    <div className="total-table">
                                        <span className="total-mob">Total </span>
                                        <span className="total-vae">  $33.00 </span>
                                    </div>
                                </td>
                                <td className='text-end download-mob'> 
                                <div className="download-pad">
                                <Button className="rounded-3 help_center fs-4 download" onClick={showdownload}>Download Invoice</Button>
                                </div></td>
                            </tr>
 
                             <tr>
                            <td className="display_none">
                                <div className="order-headers"> 
                                   <div className="product-item"> <Image src={product} height={20} className='ms-1' /></div>
                                   <div className="product-des">
                                        <h3>Static Proxies </h3>
                                        <h5> 26 Apr 2024 </h5>
                                    </div>
                                    <div className="waiting-btn">
                                    <div className='rounded-2 px-2 py-1 status-active2 fs-5 fw-3'><GoDotFill className='me-1' />Active</div>
                                     </div>
                                </div>
                             </td>
                                <td>
                                    <div className="d-flex align-items-center id-table">
                                        <span className="id-mob">ID </span>
                                        <GoCopy className='me-2 fs-6 cursor' onClick={copyTextTable} />
                                        <span className="copytable">#AP1934</span>
                                    </div>
                                </td>
                                <td className='fs-5 none-tbl'>Static Proxies</td>
                                <td className='fs-5 none-tbl'>26 April 2016</td>
                                <td className='fs-5'>
                                <div className="qty-table">
                                    <span className="qty-mob">Quantity </span>
                                    <span className="qty-value">4GB </span>
                                </div>
                                </td>
                                <td className="none-tbl">
                                <div className='rounded-2 px-2 py-1 status-active2 fs-5 fw-3'><GoDotFill className='me-1' />Active</div>
                                </td>
                                <td className='fs-5'>
                                    <div className="total-table">
                                        <span className="total-mob">Total </span>
                                        <span className="total-vae">  $33.00 </span>
                                    </div>
                                </td>
                                <td className='text-end download-mob'>
                                <div className="download-pad">
                                <Button className="rounded-3 help_center fs-4 download" onClick={showdownload}>Download Invoice</Button></div></td>
                            </tr>
  
                            <tr>
                            <td className="display_none">
                                <div className="order-headers"> 
                                   <div className="product-item"> <Image src={product} height={20} className='ms-1' /></div>
                                   <div className="product-des">
                                        <h3>Static Proxies </h3>
                                        <h5> 26 Apr 2024 </h5>
                                    </div>
                                    <div className="waiting-btn">
                                    <div className='rounded-2 px-2 py-1 status-expire2 fs-5 fw-3'><GoDotFill className='me-1' />Expired</div>
                                     </div>
                                </div>
                             </td>
                                <td>
                                    <div className="d-flex align-items-center id-table">
                                        <span className="id-mob">ID </span>
                                        <GoCopy className='me-2 fs-6 cursor' onClick={copyTextTable} />
                                        <span className="copytable">#AP1934</span>
                                    </div>
                                </td>
                                <td className='fs-5 none-tbl'>Static Proxies</td>
                                <td className='fs-5 none-tbl'>26 April 2016</td>
                                <td className='fs-5'>
                                <div className="qty-table">
                                    <span className="qty-mob">Quantity </span>
                                    <span className="qty-value">4GB </span>
                                </div>
                                </td>
                                <td className="none-tbl">
                                <div className='rounded-2 px-2 py-1 status-expire2 fs-5 fw-3'><GoDotFill className='me-1' />Expired</div>
                                </td>
                                <td className='fs-5'>
                                    <div className="total-table">
                                        <span className="total-mob">Total </span>
                                        <span className="total-vae">  $33.00 </span>
                                    </div>
                                </td>
                                <td className='text-end download-mob'>
                                <div className="download-pad">
                                <Button className="rounded-3 help_center fs-4 download" onClick={showdownload}>Download Invoice</Button>
                                </div></td>
                            </tr>

                          <tr>
                            <td className="display_none">
                                <div className="order-headers"> 
                                   <div className="product-item"> <Image src={product} height={20} className='ms-1' /></div>
                                   <div className="product-des">
                                        <h3>Static Proxies </h3>
                                        <h5> 26 Apr 2024 </h5>
                                    </div>
                                    <div className="waiting-btn">
                                    <div className='rounded-2 px-2 py-1 status-expire2 fs-5 fw-3'><GoDotFill className='me-1' />Expired</div>
                                     </div>
                                </div>
                             </td>
                                <td>
                                    <div className="d-flex align-items-center id-table">
                                        <span className="id-mob">ID </span>
                                        <GoCopy className='me-2 fs-6 cursor' onClick={copyTextTable} />
                                        <span className="copytable">#AP1934</span>
                                    </div>
                                </td>
                                <td className='fs-5 none-tbl'>Static Proxies</td>
                                <td className='fs-5 none-tbl'>26 April 2016</td>
                                <td className='fs-5'>
                                <div className="qty-table">
                                    <span className="qty-mob">Quantity </span>
                                    <span className="qty-value">4GB </span>
                                </div>
                                </td>
                                <td className="none-tbl">
                                <div className='rounded-2 px-2 py-1 status-expire2 fs-5 fw-3'><GoDotFill className='me-1' />Expired</div>
                                </td>
                                <td className='fs-5'>
                                    <div className="total-table">
                                        <span className="total-mob">Total </span>
                                        <span className="total-vae">  $33.00 </span>
                                    </div>
                                </td>
                                <td className='text-end download-mob'> <div className="download-pad"> 
                                <Button className="rounded-3 help_center fs-4 download" onClick={showdownload}>Download Invoice</Button>
                                </div></td>
                            </tr>
 
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* insert Vat Modal */}
            <Modal show={insert} onHide={handleClose} centered className='custom-modal'>

                <Modal.Body className='m-0 p-0 promo px-0 rounded-modal bg-modal border border-2 border-dark'  >
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2  py-2 fs-5 insertvatmargin'>Insert VAT</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={hideinsert}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <hr className='my-1 text-dark75 border-2' />
                    <Container fluid className='mt-3 mb-4 px-3'>

                        <Row className='g-1'>
                            <Col md={12}>
                                <div class="form-group mb-1 mt-2">
                                    <label className="form-label mb-2 fs-5">Company Name</label>

                                    <input type="text" name="" className="form-control py-2 text-light border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='Near NineTeen' />
                                </div>
                            </Col>
                            <Col md={12}>
                                <div class="form-group mb-2">
                                    <label className="form-label mb-2 fs-5">VAT Number</label>

                                    <input type="text" name="" className="form-control py-2 text-light border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='1234567891234891234' />
                                </div>
                            </Col>
                            <Col md={12}>
                                <div class="form-group mb-2">
                                    <label className="form-label mb-2 fs-5">Address</label>

                                    <input type="text" name="" className="form-control py-2 text-light border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='Avenida da Liberdade n19' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="form-group mb-2">
                                    <label className="form-label mb-2 fs-5">Postal Code</label>

                                    <input type="text" name="" className="form-control py-2 text-light border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='4422-322' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="form-group mb-2">
                                    <label className="form-label mb-0 fs-5 mb-2">Village</label>

                                    <input type="text" name="" className="form-control py-2 text-light border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='Lisboa' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <Button className='w-100 mt-4  py-2 f-1 cmn-btn-format btn-border' onClick={hideinsert}>Cancel</Button>
                            </Col>
                            <Col md={6}>
                                <Button className='w-100 mt-4 border-0 py-2 btn-orange-grad fs-4 text-white' >Confirm</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>


            </Modal>


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

            {/* Offer modal */}
            <Modal show={offer} onHide={handleClose6} centered className='custom-modal' >
                <Modal.Body className='m-0 p-0 border border-2 border-dark px-0 rounded-2 bg-modal' closeButton>
                    <div className="text-end m-0 p-0 px-0">
                        <Button className='fs-6 btn-sm bg-modal border-0 rounded-3 mt-1' onClick={handleClose6}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <Container fluid className='text-center mb-4 mt-0'>
                        <h4 className='py-2 text-white getoffer' >Get 10% Off!</h4>
                        <div className='fs-5 '>Hey,welcome to LemonClub! As a thank <br />you,here's a 10% discount code. Enjoy!'</div>
                    </Container>
                    <Container fluid className=' mt-2 mb-4 px-3'>
                        <InputGroup className="mb-3">
                            <Form.Control className='promo bg-modal-input border-0'
                                placeholder="welcome10"
                                aria-label="welcome10"
                                aria-describedby="basic-addon3"
                                value={copyText3}
                                onChange={handleCopyText3}
                            />
                            <InputGroup.Text className='text-white btn-orange-grad border-0 btn' onClick={copyToClipboard3}>{buttonText3}</InputGroup.Text>
                        </InputGroup>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Home_content;