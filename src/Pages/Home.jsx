import Contentarea from "../Layouts/Content/Contentarea";
import Header from "../Layouts/Header/Header";
import NewsTicker from "../Layouts/Header/NewsTicker";
import Navbar from "../Layouts/Navbar/Navbar";
import Leftsidebar from "../Layouts/Sidebar/Leftsidebar";
import Rightsidebar from "../Layouts/Sidebar/Rightsidebar";


const Home = () => {
    return (
        <>
            <Header></Header>
            <NewsTicker></NewsTicker>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Leftsidebar></Leftsidebar>
                </div>
                <div className="md:col-span-2">
                    <Contentarea></Contentarea>
                </div>
                <div className="border">
                    <Rightsidebar></Rightsidebar>
                </div>
            </div>
        </>
    );
};

export default Home;