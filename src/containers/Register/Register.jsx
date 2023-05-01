import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../Login/Login.scss";
import "./Register.scss";
import { axiosInstance } from "../../network/apis";
import OverlayLoader from "../../components/Loader/OverlayLoader";
import { useEffect } from "react";
import { useRef } from "react";

const Register = ({ switchComponent }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

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

  const onSubmit = () => {
    if (
      password === confirmPassword &&
      fullName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      // send to api
      setIsLoading(!isloading);
      axiosInstance
        .post(`/user/register`, { name: fullName, email, password, isAdmin })
        .then((response) => {
          console.log(response, "Response log");
          setIsLoading(!isloading);
          switchComponent("login");
        });
    } else if (fullName === "") {
      setNameError("Name cannot be empty");
    } else if (email === "") {
      setEmailError("Email cannot be empty");
    } else if (password === "") {
      setPasswordError("Password cannot be empty");
    } else if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password cannot be empty");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Please the check the password entered");
    }
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="loginContainer">
        <div className="loginForm">
          <div className="registerTitle">Sign up</div>
          <div className="registerSubTitle">
            Please enter the below details to register
          </div>

          <div className="formFields">
            <div className="formField">
              <TextField
                variant="outlined"
                value={fullName}
                onChange={(e) => {
                  setNameError("");
                  setFullName(e.target.value);
                }}
                label="Full Name"
                fullWidth
                error={nameError === "" ? false : true}
                helperText={nameError}
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 16 } }}
              />
            </div>
            <div className="formField">
              <TextField
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmailError("");
                  setEmail(e.target.value);
                }}
                label="Email"
                fullWidth
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
                onChange={(e) => {
                  setPasswordError("");
                  setPassword(e.target.value);
                }}
                fullWidth
                error={passwordError === "" ? false : true}
                helperText={passwordError}
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 16 } }}
              />
            </div>
            <div className="formField">
              <TextField
                variant="outlined"
                type="password"
                value={confirmPassword}
                label="confirm Password"
                onChange={(e) => {
                  setConfirmPasswordError("");
                  setConfirmPassword(e.target.value);
                }}
                fullWidth
                error={confirmPasswordError === "" ? false : true}
                helperText={confirmPasswordError}
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 16 } }}
              />
            </div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={isAdmin}
                    onChange={() => {
                      setIsAdmin(!isAdmin);
                    }}
                    style={{
                      transform: "scale(0.9)",
                    }}
                  />
                }
                sx={{ "& .MuiFormControlLabel-label": { fontSize: 15 } }}
                label="Admin"
              />
            </FormGroup>

            <div className="formButton">
              <Button
                variant="contained"
                style={{ backgroundColor: "#9957F4", marginBottom: "20px" }}
                fullWidth
                onClick={onSubmit}
                sx={{ fontSize: 15 }}
                ref={buttonRef}
              >
                Sign Up
              </Button>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "22px",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={() => switchComponent("login")}
            >
              click here to login
            </div>
          </div>
        </div>
      </div>
      {isloading && <OverlayLoader />}
    </div>
  );
};

export default Register;
