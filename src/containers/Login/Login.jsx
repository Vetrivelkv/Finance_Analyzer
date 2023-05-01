import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Login as LoginAction } from "../../Redux/store/Login/LoginAction";
import OverlayLoader from "../../components/Loader/OverlayLoader";
import "./Login.scss";
import { useEffect } from "react";

const Login = ({ switchComponent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const onLogin = () => {
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (email !== "" && !emailRegex.test(email)) {
      setEmailError("Invalid email entered");
    } else if (email !== "" && emailRegex.test(email) && password !== "") {
      const data = {
        email,
        password,
      };
      setIsLoading(!isloading);
      dispatch(LoginAction(data));
    } else if (email === "") {
      setEmailError("Email cannot be empty");
    } else if (password === "") {
      setPasswordError("Password cannot be empty;");
    }
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="appTitle">Finance Analyzer</div>
        <div className="formTitle">Login</div>
        <div className="formFields">
          <div className="formField">
            <TextField
              variant="outlined"
              value={email}
              label="Email"
              fullWidth
              onChange={(e) => {
                setEmailError("");
                setEmail(e.target.value);
              }}
              error={emailError === "" ? false : true}
              helperText={emailError}
              InputLabelProps={{ style: { fontSize: 18 } }}
              InputProps={{ style: { fontSize: 16 } }}
            />
          </div>
          <div className="formField">
            <TextField
              variant="outlined"
              type="password"
              value={password}
              label="Password"
              fullWidth
              onChange={(e) => {
                setPasswordError("");
                setPassword(e.target.value);
              }}
              error={passwordError === "" ? false : true}
              helperText={passwordError}
              InputLabelProps={{ style: { fontSize: 18 } }}
              InputProps={{ style: { fontSize: 16 } }}
            />
          </div>
          <div className="formButton">
            <Button
              variant="contained"
              style={{ backgroundColor: "#9957F4" }}
              fullWidth
              onClick={onLogin}
              sx={{ fontSize: 15 }}
              ref={buttonRef}
            >
              Login
            </Button>
          </div>
          <div
            className="registerLink"
            onClick={() => switchComponent("register")}
          >
            Click here to register
          </div>
        </div>
      </div>
      {isloading && <OverlayLoader />}
    </div>
  );
};

export default Login;
