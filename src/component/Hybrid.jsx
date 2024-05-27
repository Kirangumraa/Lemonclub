import Sidebar from "./Sidebar";
import Hybrid_Content from "./Hybrid_Content";
import Notification from "./top_right_panel";
import { Container } from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <Container fluid className="px-0 overflow-hidden">
                <Sidebar />
                <div className="float-end vh-100 position-relative content">
                    <div className="border border-dark rounded-4 position-absolute w-100 inr-area">
                        <div className="border-bottom border-dark d-flex align-items-center justify-content-between">
                            <h1 className="nav-title"><span className="mobile-dash">Dashboard / </span>
                             <span className="text-white">Hybrid Proxies</span></h1>
                            <Notification />
                        </div>
                        <Hybrid_Content />
                    </div>
                </div>
                <div className="footer-text padding-top0"> LemonClub © 2024 </div>
            </Container>
        </>
    );
}
export default Home;