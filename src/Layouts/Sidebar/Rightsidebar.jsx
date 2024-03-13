import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';

const Rightsidebar = () => {
    return (
        <>
            <div className='p-3'>
                <h2 className='text-2xl'>Login With</h2>
                <button className="btn btn-outline btn-info w-full">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
                <button className="btn btn-outline btn-info w-full">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
            </div>
            <div>
                <h2>Find us on</h2>
                <a className='border rounded-t-lg p-4 flex text-lg items-center'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='border rounded-lg p-4 flex text-lg items-center border-x'>
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='border rounded-b-lg p-4 flex text-lg items-center'>
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div>
                <h2 className='text-3xl'>Q zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </>
    );
};

export default Rightsidebar;