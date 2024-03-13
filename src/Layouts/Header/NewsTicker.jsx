import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsTicker = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={false} direction="Right" speed={200}>
                <Link className="mr-12" to='/'>How to become a professional web developer.</Link>
                <Link className="mr-12" to='/'>How to become a professional web developer.</Link>
                <Link className="mr-12" to='/'>How to become a professional web developer.</Link>
                <Link className="mr-12" to='/'>How to become a professional web developer.</Link>
            </Marquee>
        </div>
    );
};

export default NewsTicker;