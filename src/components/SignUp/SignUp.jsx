import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const photoURL = form.photo.value;
        const displayName = form.name.value;
        console.log(email, pass);
        signUp(email, pass).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            user.displayName = displayName;
            user.photoURL = photoURL;
            Swal.fire({
                title: "Successfully registered ",
                icon: "success"
              });
            navigate(location?.state ? location.state : "/")



        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-full">
                <div className="card md:w-1/2 lg:w-1/3 shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="pass" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;