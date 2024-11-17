import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./login.css";
import { postLogin } from "../../services/apiServices";
import { decodeToken } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postLogin(username.trim(), password);
    if (result && result.status === 200) {
      const token = result.data.accessToken;
      Cookies.set('Auth-Token', token);
      const data = decodeToken(token);
      if (data.role === "Manage"){
        navigate('/admin');
      }
      else{
        navigate('/user')
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Typography variant="h3">Đăng Nhập</Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "16px" }}
      >
        Đăng nhập
      </Button>
    </form>
  );
}

export default Login;
