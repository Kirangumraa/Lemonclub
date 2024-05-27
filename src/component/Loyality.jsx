import Sidebar from "./Sidebar";
import Home_content from "./Home_content";
import Notification from "./top_right_panel";
import { Container } from 'react-bootstrap';
import LoyalityStatus from './Loyality_status';

const Home = () => {
    return (
        <>
            <Container fluid className="px-0 overflow-hidden main-content ">
                <Sidebar />
                <div className="float-end vh-100 position-relative content">
                    <div className="border border-dark rounded-4 position-absolute w-100 inr-area">
                        <div className="border-bottom border-dark d-flex align-items-center justify-content-between">
                            <h1 className="nav-title">Dashboard / <span className="text-white">Home</span></h1>
                            <Notification />
                        </div>
                        <LoyalityStatus />
                    </div>
                </div>

            </Container>
        </>
    );
}
export default Home;