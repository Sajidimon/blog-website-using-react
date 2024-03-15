
import { Link } from 'react-router-dom';
import Navbar from '../Layouts/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleregister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');


        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
            .catch(error => {
            console.error(error)
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="text-center">
                <h2>Register new account</h2>
                <form onSubmit={handleregister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="your photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account! please <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Register;