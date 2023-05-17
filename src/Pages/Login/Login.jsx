import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleLogin = event => { 
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
        
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(error => console.log(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col  lg:flex-row items-end">
        <div className=" mr-20 ">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center font-bold my-4">New to Car Doctor? <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
