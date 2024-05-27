import check from '../assets/image/check.svg';
import { LiaCopySolid } from "react-icons/lia";
import { LuLock } from "react-icons/lu";
import Generate from '../assets/image/generate.svg';
import Generate2 from '../assets/image/generate2.svg';
import download from '../assets/image/download.svg';
import lock1 from '../assets/image/lock1.svg';
import lemo from '../assets/image/lemo.svg';
import exclamation from '../assets/image/exclamation.svg';
import { GoCheck } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Row, Col, Card, Image, Button, ListGroup, Form, Badge, NavLink, Table, Modal, Container, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { MultiSelect } from "react-multi-select-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Residential_Content = () => {

    //*********handle modal**********************//
    const [generate, setGenerateModal] = useState(false);
    const [proxy, setProxyModal] = useState(false);
    const [resetPass, setResetModal] = useState(false);
    const [copy, setCopyModal] = useState(false);

    const handleClose2 = () => setGenerateModal(false);
    const generateModal = () => setGenerateModal(true);
    const hidegenerate = () => setGenerateModal(false);

    const handleClose3 = () => setProxyModal(false);
    const ProxyModal = () => setProxyModal(true);
    const hideproxy = () => setProxyModal(false);

    const handleClose4 = () => setCopyModal(false);
    const Copymodal = () => setCopyModal(true);
    const handleCopy = () => setCopyModal(false);

    const handleClose5 = () => setResetModal(false);
    const resetPassModal = () => setResetModal(true);
    const hidepass = () => setResetModal(false);

    //*********Display toast**********************//
    const showpurchase = () => {
        toast("Purchased Successfully");
    }

    const showcopy = () => {
        toast("Copied Successfully");
    }
    const showdelete = () => {
        toast("Deleted Successfully");
    }
    const showdownload = () => {
        toast("Downloaded Successfully");
    }


    //*********Generate Modal multiple select**********************//
    const options = [
        { label: "Portugal ", value: "Portugal" },
        { label: "Italy", value: "Italy" },
        { label: "Austria", value: "Austria" },
        { label: "Andorra", value: "Andorra" },
        { label: "Albania", value: "Albania" },

    ];
    const [selected, setSelected] = useState([]);

    const tooltip = (
        <Tooltip id="tooltip">Text goes here</Tooltip>
    );

    //*********handle bg after openeing modal**********************//
    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (generate) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [generate]);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (proxy) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [proxy]);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (resetPass) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [resetPass]);
    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (copy) {
            mainContent.classList.add('blur-background');
        } else {
            mainContent.classList.remove('blur-background');
        }
    }, [copy]);
    return (
        <>
            <div className='border-end border-dark float-start box-height box-width-sm width-response'>
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
                        <Row className="g-2 pur-2">
                            <Col>
                                <Card.Subtitle className="mb-2 fs-5">Provider</Card.Subtitle>
                                <Form.Select className='ps-2'>
                                    <option>PacketStream</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Card.Subtitle className="mb-2 fs-5">Quantity</Card.Subtitle>
                                <Form.Select className='ps-2'>
                                    <option ><span className='fw-lighter m-0 p-0'>7GB</span></option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Card.Text className='border-top border-dark residentialcard1'>
                            <div className='d-flex align-items-center '>
                                <Image src={lemo} alt="Image" height={40} />
                                <div className='Lemonprime' >
                                    <h3 className="mb-1 text-white fs-5">Lemonprime
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <Image src={exclamation} height={13} className='ms-2' />
                                        </OverlayTrigger>
                                    </h3>
                                    <div className='text-orange'>$7.99/gb</div>
                                </div>
                            </div>
                        </Card.Text>
                        <ListGroup className='mb-0 check_list'>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Speed 100ms - 300 ms</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> 14 million of Dedicated IPs</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Feature 3</ListGroup.Item>
                            <ListGroup.Item className='text-dark3 mb-2 pb-1'><GoCheck /> Feature 4</ListGroup.Item>
                            <ListGroup.Item className='text-dark3'><GoCheck /> Feature 5</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card className='bg-dark2 box-margin'>
                    <Card.Body>
                        <Card.Title className='h3 mb-3 text-light fs-5'>Order Summarry</Card.Title>
                        <Card.Subtitle className="d-flex justify-content-between align-items-center border-bottom border-dark pb-3 mb-4">
                            <span className='text-dark3 fs-5'>Total Price</span>
                            <span className='text-light fs-3 fw-normal'>$45</span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-dark3 fs-5">Payment Method</Card.Subtitle>
                        <Form.Select>
                            <option>Stripe</option>
                        </Form.Select>
                        <Button className='border-0 w-100 text-white btn-orange-grad mt-4 py-2 Purchase' onClick={showpurchase}>Purchase</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='float-end box-height box-width-lg width-response'>
                <Card className='bg-dark2 box-margin'>
                    <Card.Body>
                        <Card.Title className='h3 mb-3 text-light d-flex d-flex-mob justify-content-between align-items-center'>
                            <span className='fs-5'>Your Plans</span>
                            <Form.Select className='max-width-select'>
                                <option>Choose Plan</option>
                            </Form.Select>
                        </Card.Title>
                        <Row className="g-3">
                            <Col xs={12} md={12} xl={8} lg={7} sm={12}>                           
                                <div className='border border-dark bg-dark5 p-3 rounded-3 h-100 data'>
                                    <Card.Subtitle className="mb-2  text-light mb-4 fs-5 fw-3"> Data Left</Card.Subtitle>
                                    <div className="side-line">
                                        <div className="text-light fs-3">2.3GB <Badge className="border border-dark bg-dark5 fs-6 text-dark3 fw-normal px-1 py-1 ms-2">18%</Badge></div>
                                    </div>
                                    <div className="progress mt-2" style={{ height: "45px" }}>
                                        <div className="progress-bar bg-orange" role="progressbar" style={{ width: "85%" }}
                                            aria-valuenow="75" aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={4} lg={5} sm={12}>  
                                <div className='border border-dark bg-dark5 p-3 rounded-3 h-100 data-used-residential'>
                                    <Card.Subtitle className="mb-5 text-light fs-5 fw-3">Data Used</Card.Subtitle>
                                    <div className='d-flex align-items-center pt-2'>
                                        <Image src={check} height={40} />
                                        <div className='ms-2'>
                                            <h3 className="mb-0 text-light fs-3 ms-1">7.7GB <Badge className="status-active fs-6 ms-1"><GoArrowUp /> 4,32%</Badge></h3>
                                            <div className='text-dark3 fs-5 ms-1'>All Time</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className='bg-dark2 box-margin proxies height-max'>
                    <Card.Header className='mx-3 px-0 py-3 h3 text-light d-flex justify-content-between align-items-center border-dark'>
                        <span>Generated Proxies</span>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <NavLink to={''} className="help-icon1 menu_link btn-orange-grad text-white generate-btn" onClick={generateModal} ><Image src={Generate2} alt="generate" height={20} /> Generate</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to={''} className="help-icon1 menu_link" onClick={showdownload}><Image src={download} alt="generate" height={20} className='me-1 residential-icon' /> Download All</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to={''} className="help-icon1 menu_link" onClick={showcopy}><LiaCopySolid className='me-1 copyall'  /> Copy All</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to={''} className="help-icon1 menu_link" onClick={resetPassModal}><Image src={lock1} alt="generate" height={20} className='residential-icon' /><span>Reset Password</span></NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Header>
                    <Card.Body className='table-responsive' >
                        <Table bordered className='border-dark mb-0 pb-0 table-resi'>
                            <thead>
                                <tr className='no-border'>
                                    <th className='ps-0'>Proxy</th>
                                    <th className='text-end '><span className='action2'>Actions</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='no-border'>
                                    <td className='ps-0'>
                                        <div className="resi-tbl-col">
                                            <div className="text-light proxy-mm">Proxy </div>
                                            <div className="proxy-val"> IP:PORT:USERNAME:PASSWORD </div>
                                         </div>
                                    </td>
                                    <td className='text-end pe-0 actions-mob'>
                                        <Button className="rounded-3 help_center px-2 py-1" onClick={showcopy}>Copy</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1" onClick={showdelete}>Delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='ps-0'>
                                        <div className="resi-tbl-col">
                                            <div className="text-light proxy-mm">Proxy </div>
                                            <div className="proxy-val"> IP:PORT:USERNAME:PASSWORD </div>
                                         </div>
                                    </td>
                                    <td className='text-end pe-0 actions-mob'>
                                        <Button className="rounded-3 help_center px-2 py-1" onClick={showcopy}>Copy</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1" onClick={showdelete}>Delete</Button>
                                    </td>
                                </tr>
                                <tr className='no-border'>
                                    <td className='ps-0'>
                                        <div className="resi-tbl-col">
                                            <div className="text-light proxy-mm">Proxy </div>
                                            <div className="proxy-val"> IP:PORT:USERNAME:PASSWORD </div>
                                         </div>
                                    </td>
                                    <td className='text-end pe-0 actions-mob'>
                                        <Button className="rounded-3 help_center px-2 py-1" onClick={showcopy}>Copy</Button>
                                        <Button className="rounded-3 help_center ms-2 px-2 py-1" onClick={showdelete}>Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>

            {/*Generate Proxies Modal*/}

            <Modal show={generate} onHide={handleClose2} centered className='custom-modal ' >

                <Modal.Body className='m-0 p-0 border border-1 border-dark px-0  rounded-modal bg-modal ' >
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2 ms-3 py-2 fs-5'>Generate Proxies</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={hidegenerate}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <hr className='my-1 text-dark75' />
                    <Container fluid className='mt-3 mb-4 px-3'>

                        <Row className='g-1'>
                            <Col md={12}>
                                <div class="form-group mt-2 mb-2">
                                    <label className="form-label fs-5">Provider</label>
                                    <Form.Select className='text-light border-0 fs-5 bg-modal-input fw-3'>
                                        <option ><span className='fw-lighter m-0 p-0'>NetnNut</span></option>
                                    </Form.Select>

                                </div>
                            </Col>
                            <Col md={12}>
                                <div class="form-group mb-2">
                                    <label className="form-label  fs-5">Region Pool</label>
                                    <MultiSelect
                                        className='border-0 fs-5 fw-3 '
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />

                                </div>
                            </Col>
                            <Col md={12}>
                                <div class="form-group mb-2">
                                    <label className="form-label fs-5">Plan Pool</label>
                                    <Form.Select className='text-light border-0 fs-5 bg-modal-input fw-3'>
                                        <option ><span className='fw-lighter m-0 p-0'>Sticky</span></option>
                                    </Form.Select>

                                </div>
                            </Col>
                            <Col md={12}>
                                <div class="form-group mb-2">
                                    <label className="form-label fs-5">Proxy Amount</label>
                                    <input type="text" name="" className="form-control py-2 text-white border-0 fs-5 bg-modal-input fw-3" id="basic-default-category" value='250' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <Button className='w-100 mt-4  py-2 f-1 cmn-btn-format btn-border' onClick={hidegenerate}>Reset</Button>
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

            {/* Copyall modal */}

            <Modal show={copy} onHide={handleClose4} centered className='custom-modal' >

                <Modal.Body className='m-0 p-0 border border-1 border-dark px-0  rounded-modal bg-modal'  >
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2 ms-3 py-2 fs-5'>Copy Proxy List</h6>
                        <Button className='fs-6 btn-sm bg-modal border-0 me-2' onClick={handleClose4}><RxCross2 className='fs-4' /></Button>
                    </div>
                    <hr className='my-1 text-dark75' />

                    <Container fluid className='mt-3 mb-4'>
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
                                    <Button className='w-100 mt-4  py-1 f-1 cmn-btn-format btn-border' onClick={handleCopy}>Cancel</Button>
                                </Col>
                                <Col md={6}>
                                    <Button className='w-100 mt-4 border-0 py-1 btn-orange-grad fs-4 text-white'  >Copy All</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>

            {/* Reset password modal */}
            <Modal show={resetPass} onHide={handleClose5} centered className='custom-modal' >

                <Modal.Body className='m-0 p-0 border border-2 border-dark px-0 rounded-modal bg-modal'>
                    <div className="d-flex justify-content-between ">
                        <h6 className='text-white my-2 ms-3 py-1 fs-5'>Reset Password</h6>
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
                                <Button className='w-100 mt-4  py-1 f-1 cmn-btn-format btn-border  text-dark3' onclick={hidepass} >Cancel</Button>
                            </Col>
                            <Col md={6}>
                                <Button className='w-100 mt-4 border-0 py-1 btn-orange-grad fs-4 text-white' >Confirm</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>


        </>
    );
}

export default Residential_Content;