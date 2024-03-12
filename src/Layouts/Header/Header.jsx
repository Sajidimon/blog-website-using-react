import logo from '../../../src/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <>
            <img src={logo} alt="" />
            <p>Journalism without fear or favour</p>
            <p>{moment().format("dddd, MMMM DD YYYY")}</p>
        </>
    );
};

export default Header;