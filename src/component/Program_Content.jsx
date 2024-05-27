import React from 'react';
import { Card, Image, Button, Form, Badge, Table, InputGroup, Tabs, Tab, Tooltip, OverlayTrigger } from 'react-bootstrap';
import exclamation from '../assets/image/exclamation.svg';
import lock from '../assets/image/lockbox.svg';
import standimg from '../assets/image/standard.svg';
import close from '../assets/image/close-s.svg';
import checks from '../assets/image/check-s.svg';
import check from '../assets/image/check-w.svg';
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
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
    const handleCopyText3 = (e) => {
        setCopyText3(e.target.value);
    };

    const copyToClipboard3 = () => {

        copy(copyText3);
        setButtonText3("Copied")
    };
    return (
        <>

            <div className='border-end border-dark float-start box-height box-width-md programs-boxes'>
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
                    <Card.Body >
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

                        <Card.Text className='border border-dark bg-dark5 p-3 rounded-3 h-100 data mb-3 tabs_m'>
                            <Tabs defaultActiveKey="silver" id="uncontrolled-tab-example" className='tabs-mobile mb-3 border-dark justify-content-end service-type'>
                                <Tab eventKey="standard" title="Standard" disabled>
                                    Standard
                                </Tab>
                                <Tab eventKey="silver" title="Silver">
                                    <Table bordered className='mb-0' className="stand-tabs">
                                        <tbody className='table-format'>
                                            <tr className='no-border'>
                                                <td className='bg-dark5 fs-6 pb-2' align='center' width="20%">Spend</td>
                                                <td className='bg-dark5 fs-5 pb-2 ps-5  w-25' >$0</td>
                                                <td className='bg-dark5 fs-5 pb-2 ps-3' >$75</td>
                                                <td className='bg-dark5 fs-5 pb-2 protable1'>$150</td>
                                                <td className='bg-dark5 fs-5 pb-2 ' >$250</td>
                                            </tr>
                                            <tr className='no-border'>
                                                <td className='bg-dark6 round-left fs-6 py-2' align='center'>Discount</td>
                                                <td className='bg-dark6 fs-5 py-2 ps-5  w-25' >0%</td>
                                                <td className='bg-dark6 fs-5 py-2 ps-3' >25%</td>
                                                <td className='bg-dark6 fs-5 py-2  protable2'>30%</td>
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
                        {/*standard box mobile*/}
                        <div className="programs-stand-boxes">
                            <div class="standard-flex">
                                <div class="stand-image"> 
                                     <Image src={standimg} height={20} className='ms-1'/>
                                </div>
                                <div class="stand-text">
                                    <h3>Standard </h3>
                                </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Spend</div>
                                <div className="spend-val"> $0 </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Discount</div>
                                <div className="spend-val"> 0% </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Closed Chat</div>
                                <div className="spend-val">  <Image src={close} height={10} className='ms-1'/> </div>
                            </div>
                            <div className="spend gadgets">  
                                <div className="spend-txt"> Gadget</div>
                                <div className="spend-val">  <Image src={close} height={10} className='ms-1'/> </div>
                            </div> 
                        </div>

                        {/*silver box mobile*/}
                        <div className="programs-stand-boxes">
                            <div class="standard-flex">
                                <div class="stand-image silver-img"> 
                                     <Image src={check} height={20} className='ms-1'/>
                                </div>
                                <div class="stand-text">
                                    <h3>Silver </h3>
                                </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Spend</div>
                                <div className="spend-val"> $75 </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Discount</div>
                                <div className="spend-val"> 25% </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Closed Chat</div>
                                <div className="spend-val">  <Image src={close} height={10} className='ms-1'/> </div>
                            </div>
                            <div className="spend gadgets">  
                                <div className="spend-txt"> Gadget</div>
                                <div className="spend-val">  <Image src={close} height={10} className='ms-1'/> </div>
                            </div> 
                        </div>

                        {/*gold box mobile*/}
                        <div className="programs-stand-boxes">
                            <div class="standard-flex">
                                <div class="stand-image"> 
                                     <Image src={standimg} height={20} className='ms-1'/>
                                </div>
                                <div class="stand-text">
                                    <h3>Gold </h3>
                                </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Spend</div>
                                <div className="spend-val"> $150 </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Discount</div>
                                <div className="spend-val"> 30% </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Closed Chat</div>
                                <div className="spend-val">  <Image src={checks} height={10} className='ms-1'/> </div>
                            </div>
                            <div className="spend gadgets">  
                                <div className="spend-txt"> Gadget</div>
                                <div className="spend-val">  <Image src={checks} height={10} className='ms-1'/> </div>
                            </div> 
                        </div>

                        {/*diamond box mobile*/}
                        <div className="programs-stand-boxes">
                            <div class="standard-flex">
                                <div class="stand-image"> 
                                     <Image src={standimg} height={20} className='ms-1'/>
                                </div>
                                <div class="stand-text">
                                    <h3>Diamond </h3>
                                </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Spend</div>
                                <div className="spend-val"> $250 </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Discount</div>
                                <div className="spend-val"> 40% </div>
                            </div>
                            <div className="spend">  
                                <div className="spend-txt"> Closed Chat</div>
                                <div className="spend-val">  <Image src={checks} height={20} className='ms-1'/> </div>
                            </div>
                            <div className="spend gadgets">  
                                <div className="spend-txt"> Gadget</div>
                                <div className="spend-val">  <Image src={checks} height={20} className='ms-1'/> </div>
                            </div> 
                        </div>

                        </Card.Text>

                        <Card.Text className='border border-dark bg-dark5 p-3 rounded-3 h-100 data '>
                            <Card.Subtitle className="fs-5 text-light fw-3 mb-4 mt-1">Your Promo Code</Card.Subtitle>
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
            <div className='float-end box-height box-width-md programs-boxes'>
                <Card className='bg-dark2 box-margin py-4 text-center'>
                    <Card.Body>
                        <Image src={lock} height={45} />
                        <Card.Title className='h3 text-light mt-3 mb-1'>Affiliate Program</Card.Title>
                        <Card.Text className='text-secondary'>Coming Soon</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Bundle_content;
