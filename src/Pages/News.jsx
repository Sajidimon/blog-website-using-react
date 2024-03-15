import { useParams } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Navbar from "../Layouts/Navbar/Navbar";
import Rightsidebar from "../Layouts/Sidebar/Rightsidebar";


const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h2>this is news details page</h2>
                    <p>{id}</p>
                </div>
                <div className="">
                    <Rightsidebar></Rightsidebar>
                </div>
            </div>
        </div>
    );
};

export default News;