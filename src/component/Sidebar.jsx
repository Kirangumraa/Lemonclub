import React, { useState } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import myImage from '../assets/image/logo.svg';
import rectangle from '../assets/image/reactangle.svg';
import gear from '../assets/image/gear.svg';
import menu from '../assets/image/menu.svg';
import closemenu from '../assets/image/close-menu.svg';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => {
        setIsSidebarVisible(true);
    };

    const hideSidebar = () => {
        setIsSidebarVisible(false);
    };

    return (
        <>
            <div className="mobile-menuic" onClick={showSidebar}>
                <Image src={menu} alt="Menu" height={27} />
            </div>
            <aside className={`float-start position-relative px-3 vh-100 sidebar ${isSidebarVisible ? 'visible' : ''}`}>
                <div className="position-fixed top-0 sidebar-in">
                    <div className="d-flex align-items-center border-bottom border-dark logo-area">
                        <Image src={myImage} alt="Logo" height={35} onClick={hideSidebar} />
                        <div className='logo-txt'>
                            <h2 className="text-white fw-3">Lemonclub</h2>
                            <div className="fs-6">Premium Proxy Solutions</div>
                            <div className="close-menu" onClick={hideSidebar}>
                                <Image src={closemenu} alt="Close Menu" height={12} />
                            </div>
                        </div>
                    </div>
                    <h6 className='hd-main-menu'>Main Menu</h6>
                    <ListGroup variant="flush" className='nav'>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/'} className="nav-img1 menu_link">Home</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/residential'} className='nav-img2 menu_link'>Residential Proxies</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/static'} className='nav-img3 menu_link'>Static Proxies</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/hybrid'} className='nav-img4 menu_link'>Hybrid Proxies</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/bundle2'} className='nav-img5 menu_link'>Bundles</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={'/program'} className='nav-img6 menu_link'>Programs</NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="cmn-bg-format manag-bill">
                        <Image src={gear} alt="Gear Icon"/> Manage Billing
                    </div>
                </div>
                <div className="position-fixed footer-area">
                    <ListGroup variant="flush" className='nav'>
                        <ListGroup.Item className="menu_item">
                            <NavLink to={''} className='nav-img7 menu_link'>Log Out</NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="bg-dark2 d-flex align-items-center border border-dark rounded-2 studio">
                        <Image src={rectangle} alt="Globe Icon" height={40} />
                        <div>
                            <h2 className="text-white">Vasco Ferreira</h2>
                            <div className="fs-6 text-dark3">vascoferreira@nr19.studio</div>
                        </div>
                    </div>
                </div>
            </aside>

            <style jsx>{`
               
                .sidebar.visible {
                    display: block;
                }
                .mobile-menuic {
                    cursor: pointer;
                }
                .close-menu {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default Sidebar;
