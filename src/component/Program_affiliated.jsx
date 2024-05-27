import React from 'react';
import { Card, Image, Button, Form, Badge, Table, InputGroup, Tabs, Tab, Tooltip, OverlayTrigger } from 'react-bootstrap';
import exclamation from '../assets/image/exclamation.svg';
import { IoCheckmark } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import navi from '../assets/image/navi.svg';
import coinbox from '../assets/image/coin-box.svg';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Bundle_content = () => {

    const tooltip = (
        <Tooltip id="tooltip">Text goes here</Tooltip>
    );



    const [copyText3, setCopyText3] = useState("promocode25");
    const [buttonText3, setButtonText3] = useState('Copy');
    const [copyText4, setCopyText4] = useState("https://new-dashboard.lemonclub.io/vasco");
    const [buttonText4, setButtonText4] = useState('Copy');

    const handleCopyText3 = (e) => {
        setCopyText3(e.target.value);
    };
    const handleCopyText4 = (e) => {
        setCopyText4(e.target.value);
    };

    const copyToClipboard3 = () => {

        copy(copyText3);
        setButtonText3('Copied');
    };

    const copyToClipboard4 = () => {

        copy(copyText4);
        setButtonText4('Copied');
    };

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

            <div className='border-end border-dark float-start box-height box-width-md'>
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
                            <span className='fs-5'>Loyalty Program</span>
                            <span className='fs-5'><span className='text-dark3 fs-5'>Restarting:</span> 5:14:54:54</span>
                        </Card.Title>

                        <Card.Text className='border border-dark bg-dark5 p-3 rounded-3 h-100 data mb-3'>
                            <Card.Subtitle className="mb-2 h3 text-light fs-5">Your Stats</Card.Subtitle>
                            <div className="d-flex justify-content-between pt-3">
                                <div className="side-line">
                                    <h3 className='text-dark3 fw-5'>Monthly Spent</h3>
                                    <div className="d-flex mx-0 px-0">
                                        <div className="text-white fs-3 fw-lighter fw-3">$233.40 <Badge className="bg-dark4 fs-6 text-light2 fw-normal px-2 py-1 ms-2">Silver</Badge></div>
                                    </div>
                                </div>
                                <div className="side-line left-space left-space2 me-xl-4">
                                    <h3 className='text-dark3 fw-5'>Gold
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <Image src={exclamation} height={13} className='ms-2 mb-1' />
                                        </OverlayTrigger></h3>
                                    <div className="text-white fs-3 fw-3" >$275.00</div>
                                </div>
                            </div>
                            <div className="progress mt-2" style={{ height: "45px" }}>
                                <div className="progress-bar bg-orange" role="progressbar" style={{ width: "77.9%" }}
                                    aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </Card.Text>

                        <Card.Text className='border border-dark bg-dark5 p-3 rounded-3 h-100 data mb-3'>
                            <Tabs defaultActiveKey="silver" id="uncontrolled-tab-example" className='mb-3 border-dark justify-content-end service-type'>
                                <Tab eventKey="standard" title="Standard" disabled>
                                    Standard
                                </Tab>
                                <Tab eventKey="silver" title="Silver">
                                    <Table bordered className='mb-0'>
                                        <tbody className='table-format'>
                                            <tr className='no-border'>
                                                <td className='bg-dark5 fs-6 pb-2' align='center' width="20%">Spend</td>
                                                <td className='bg-dark5 fs-5 pb-2 ps-5  w-25' >$0</td>
                                                <td className='bg-dark5 fs-5 pb-2 ps-3' >$75</td>
                                                <td className='bg-dark5 fs-5 pb-2 protable1'  >$150</td>
                                                <td className='bg-dark5 fs-5 pb-2 ' >$250</td>
                                            </tr>
                                            <tr className='no-border'>
                                                <td className='bg-dark6 round-left fs-6 py-2' align='center'>Discount</td>
                                                <td className='bg-dark6 fs-5 py-2 ps-5  w-25' >0%</td>
                                                <td className='bg-dark6 fs-5 py-2 ps-3' >25%</td>
                                                <td className='bg-dark6 fs-5 py-2  protable2'  >30%</td>
                                                <td className='bg-dark6 round-right fs-5 py-2' >40%</td>
                                            </tr>
                                            <tr className='no-border'>
                                                <td className='bg-dark5 fs-6 py-2' align='center' >Closed Chat</td>
                                                <td className='bg-dark5 fs-5 py-2 ps-5  w-25' ><RxCross2 /></td>
                                                <td className='bg-dark5 fs-5 py-2 ps-3' ><RxCross2 className='ms-1' /></td>
                                                <td className='bg-dark5 fs-5 py-2 ps-4' ><IoCheckmark className='ms-4' /></td>
                                                <td className='bg-dark5 fs-5 py-2' ><IoCheckmark className='ms-1' /></td>
                                            </tr>
                                            <tr className='no-border'>
                                                <td className='bg-dark6 round-left fs-6 py-2' align='center' >Gadgets</td>
                                                <td className='bg-dark6 fs-5 py-2 ps-5  w-25' ><RxCross2 /></td>
                                                <td className='bg-dark6 fs-5 py-2 ps-3' ><RxCross2 className='ms-1' /></td>
                                                <td className='bg-dark6 fs-5 py-2 ps-4' ><IoCheckmark className='ms-4' /></td>
                                                <td className='bg-dark6 round-right fs-5 py-2' ><IoCheckmark className='ms-1' /></td>
                                            </tr>


                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="gold" title="Gold" disabled>
                                    Gold
                                </Tab>
                                <Tab eventKey="diamond" title="Diamond" disabled>
                                    Diamond
                                </Tab>
                            </Tabs>
                        </Card.Text>

                        <Card.Text className='border border-dark bg-dark5 p-3 rounded-3 h-100 data mb-2'>
                            <Card.Subtitle className="mb-2 fs-5 text-light fw-3 mb-4">Your Promo Code</Card.Subtitle>
                            <InputGroup>
                                <Form.Control className='bg-dark6 border border-dark text-dark3 fs-5'
                                    placeholder="promocode25"
                                    aria-label="promocode25"
                                    aria-describedby="basic-addon2"
                                    value={copyText3}
                                    onChange={handleCopyText3}
                                    readOnly
                                />
                                <Button variant="outline-secondary" id="button-addon2" className='promo text-white btn-orange-grad border-0' onClick={copyToClipboard3}>{buttonText3}</Button>
                            </InputGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='float-end box-height box-width-md'>
                <div className='h3  text-light d-flex align-items-center justify-content-between affiprog' >
                    <span className='fs-5 affiprog2' >Affiliated Program</span>
                    <span className='fs-5 text-orange btn py-0 me-0' >Open Settings</span>
                </div>
                <Card className='bg-dark5  box-margin  text-center border-dark'>
                    <Card.Body>

                        <div className="d-flex ">
                            <div className="d-flex">
                                <Image src={coinbox} />
                                <div className=" text-start afficard1">
                                    <h3 className='text-dark3 fw-5'>Monthly Earnings</h3>
                                    <div className="d-flex mx-0 px-0  align-items-center">
                                        <div className="text-white fs-3 fw-3 ">$533.50<Badge className="status-active fs-6 fw-3 afficard1 "><GoArrowUp />10.22%</Badge></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex ms-5">
                                <Image src={navi} />
                                <div className=" text-start afficard1">
                                    <h3 className='text-dark3 fw-5'>Clicks</h3>
                                    <div className="d-flex mx-0 px-0  align-items-center">
                                        <div className="text-white fs-3 fw-3 ">104<Badge className="status-active fs-6 fw-3 afficard1 "><GoArrowUp />3.29%</Badge></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='bg-dark5  box-margin  text-center border-dark'>
                    <Card.Body>
                        <Card.Title className='h3 mb-4 text-light text-start'>
                            <span className='fs-5'>Your Affiliated Link</span>

                        </Card.Title>
                        <InputGroup>
                            <Form.Control className='bg-dark6 border border-dark text-dark3 fs-5'
                                placeholder="https://new-dashboard.lemonclub.io/vasco"
                                aria-label="promocode25"
                                aria-describedby="basic-addon2"
                                value={copyText4}
                                onChange={handleCopyText4}
                                readOnly
                            />
                            <Button variant="outline-secondary" id="button-addon2" className='promo text-white btn-orange-grad border-0' onClick={copyToClipboard4}>{buttonText4}</Button>
                        </InputGroup>
                    </Card.Body>
                </Card>
                <Card className='bg-dark5  box-margin  text-center border-dark' >
                    <Card.Body>
                        <Card.Title className='h3 mb-4 text-light text-start d-flex align-items-center justify-content-between'>
                            <span className='fs-5'>Your Commissions</span>
                            <InputGroup className="max-width-select search ">
                                <Form.Control

                                    placeholder='Search'
                                    className='bg-modal-input search-affi '
                                />
                                <Button variant="outline-secondary" id="button-addon2" className='bg-modal-input'><LuSearch /></Button>
                            </InputGroup>
                        </Card.Title>
                        <div className='pt-2 table-responsive mx-0 bg-dark5 border-top border-dark commisioncard' 
                        >
                            <Table bordered className='border-dark btm-table mb-0 mx-0 bg-dark5 program-table' >
                                <thead>
                                    <tr className='no-border '>
                                        <th className='fw-3 text-start'>State</th>
                                        <th className='fw-3 text-start' onClick={toggleSortByDate}>Date{renderArrowIcon('asc', 'date')} {renderArrowIcon('desc', 'date')}</th>
                                        <th className='fw-3 text-start' onClick={toggleSortByTotal}>Amount{renderArrowIcon('asc', 'total')} {renderArrowIcon('desc', 'total')}</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className='no-border'>
                                        <td >
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <IoCheckmark className='me-2 fs-6 cursor' />
                                                <span>#Approved</span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            26 April 2024
                                        </td>
                                        <td className='text-start'>$32.50</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </div>



        </>
    );
}

export default Bundle_content;
