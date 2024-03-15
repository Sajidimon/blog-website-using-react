import { Link } from "react-router-dom";
import Navbar from "../Layouts/Navbar/Navbar";


const Login = () => {

    

    const handlelogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="text-center">
                <h2>Login to your account</h2>
                <form onSubmit={handlelogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Do not have an account! please <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </>
    );
};

export default Login;