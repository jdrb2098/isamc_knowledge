import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import Logo from '../assets/LogoISAMC.jfif'
import Loader from "../components/Loader";
import Message from "../components/Message";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if(userInfo){
      navigate("/")
    }
  }, [userInfo, navigate])
  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="page-header align-items-start min-vh-100">
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div>
                  <img alt="ISAMC" src={Logo} style={{ width: "100%" }} />
                </div>
              </div>

              <div className="card-body">
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <form className="text-start" onSubmit={submitHandler}>
                  <div className="input-group input-group-outline my-3">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Emaill"
                    />
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-primary w-100 my-4 mb-2"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LoginScreen;


