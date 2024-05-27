import { useState, useEffect } from "react";
import bell from '../assets/image/notification.svg';
import bell2 from '../assets/image/noti_active.svg';
import coin from '../assets/image/coin.svg';
import gear from '../assets/image/gear.svg';
import right from '../assets/image/right.svg';
import wrong from '../assets/image/wrong.svg';
import doublcheck from '../assets/image/doublecheck.svg';
import { Container, Card, Row, Col, Image, NavLink } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Notification = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggle = (isOpen) => {
        setIsDropdownOpen(isOpen);
    };

    // useEffect(() => {
    //     const mainContent = document.querySelector('.main-content');
    //     const dropContent = document.querySelector('.drop-content');
    //     if (isDropdownOpen) {
    //         mainContent.classList.add('blur-background2');
    //         dropContent.classList.add('blur-background-none');

    //     } else {
    //         mainContent.classList.remove('blur-background2');
    //         dropContent.classList.remove('blur-background-none');
    //     }
    // }, [isDropdownOpen]);

    return (

        <>
            <div className="d-flex align-items-center fs-4 hdr-right-pnl drop-content">
             
                <Dropdown onToggle={handleToggle} id="drop">
                    <Dropdown.Toggle id="dropdown-basic">
                        {isDropdownOpen ? (
                            <Image src={bell2} alt="Logo" height={20} className="cursor" />
                        ) : (
                            <Image src={bell} alt="Logo" height={20} className="cursor" />
                        )}

                    </Dropdown.Toggle>
                    <Dropdown.Menu className='m-0 p-0 px-0 border border-2 border-dark bg-dark5 notification-drop'>
                        <Dropdown.Header className="p-0  dropdownhead" >
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className='mt-2 text-white ms-3 fs-5 notification1'>Notifications</h6>
                                <div className='me-3 rounded rounded-2 bg-dark6 fs-6  text-dark3 btn markread' > <Image src={doublcheck} style={{ marginRight: '5px' }} />Mark as read</div>
                            </div>
                            <hr className='mt-0 text-dark75 border-2' />
                        </Dropdown.Header>
                        <Container fluid className='my-3 mt-4'>
                            <Card className='px-0 border-0 bg-dark5'>
                                <Row className="g-2">
                                    <Col md={1} className="mt-modal">
                                        <Image src={right} height={36} className="ms-1" />
                                    </Col>
                                    <Col md={11} className='text-start drop-notify'>
                                        <div className="mb-1 fs-5 text-white ms-modal ">Proxies Copied</div>
                                        <h6 className="fs-5 text-dark3 ms-modal fw-4 ">2 min ago</h6>
                                    </Col>
                                    <Col md={1} className="mt-modal">
                                        <Image src={right} height={36} className='ms-1' />
                                    </Col>
                                    <Col md={11} className="drop-notify">
                                        <div className="mb-1 text-white fs-5 ms-modal">Successfully Purchased</div>
                                        <h6 className="fs-5 text-dark3 ms-modal fw-4">5 min ago</h6>
                                    </Col>
                                    <Col md={1} className="mt-modal pt-1">
                                        <Image src={wrong} height={36} className='ms-1' />
                                    </Col>
                                    <Col md={11} className="drop-notify">
                                        <div className="mb-1 text-white fs-5 ms-modal">Error Generating Proxies</div>
                                        <h6 className="fs-5 text-dark3 ms-modal fw-4">8 min ago</h6>
                                    </Col>
                                    <Col md={1} className="mt-modal">
                                        <Image src={right} height={36} className='ms-1' />
                                    </Col>
                                    <Col md={11} className="drop-notify">
                                        <div className="mb-1 text-white fs-5 ms-modal">Successfully Purchased</div>
                                        <h6 className="mb-0 mb-2 text-dark3 fs-5 ms-modal fw-4">April 23</h6>
                                    </Col>
                                </Row>
                            </Card>
                        </Container>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="cmn-bg-format" >
                    <Image src={coin} alt="Logo" height={20} /> $78,54
                </div>
                <NavLink to={''} className="cmn-bg-format manage-billing">
                    <Image src={gear} alt="Logo" height={20} /> Manage Billing
                </NavLink>
            </div>


        </>
    );
}
export default Notification;