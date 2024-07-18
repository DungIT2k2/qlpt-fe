import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./login.css";
import { postLogin } from "../../services/apiServices";
import { decodeToken } from "../../utils/common";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postLogin(username, password);
    if (result && result.status === 200) {
      const token = result.data.accessToken;
      const data = decodeToken(token);
      console.log(data);
    }
    console.log(result);
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
