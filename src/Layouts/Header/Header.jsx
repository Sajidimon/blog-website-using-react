import logo from '../../../src/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <p>Journalism without fear or favour</p>
                <p>{moment().format("dddd, MMMM DD YYYY")}</p>
            </div>
        </>
    );
};

export default Header;