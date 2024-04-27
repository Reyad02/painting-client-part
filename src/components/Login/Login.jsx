import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const { login, loginWithGoogle, loginWithFacebook, loginWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass);
        login(email, pass).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            navigate(location?.state ? location.state : "/")
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }

    const handleLoginGoogle = () => {
        loginWithGoogle().then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage)
            // ...
        });
    }

    const handleLoginGithub = () => {
        loginWithGithub().then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
        
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
    }
    return (
        <div className="hero pt-8 bg-base-200">
            <div className="hero-content md:w-full">
                <div className="card border md:w-1/2 lg:w-1/3  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Don't have an account? <Link to="/signup" className="text-blue-400">Signup</Link></p>
                        <div className="text-center">
                            ---------------- Or ----------------
                        </div>
                        <div className="relative text-base">
                            <FaGoogle className="absolute top-4 left-14 md:left-16 lg:left-[27%]" />
                            <button onClick={handleLoginGoogle} className=" btn lg:pl-12 w-full rounded-sm">Login with Google</button>
                        </div>
                        <div className="relative text-base mt-2">
                            <FaGithub className="absolute top-4 left-14 md:left-16 lg:left-[27%]" />
                            <button onClick={handleLoginGithub} className=" btn lg:pl-12 w-full rounded-sm">Login with Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;