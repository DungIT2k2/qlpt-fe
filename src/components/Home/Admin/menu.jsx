import Button from "@mui/material/Button";
import "../common.css";
import { Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { decodeToken } from "../../../utils/common";

const MenuAdmin = () => {
  const [dataUser, setDataUser] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('Auth-Token');
    navigate('/');
  }

  const getDataUser = (token) => {
    const data = decodeToken(token);
    setDataUser(data)
    console.log(1);
  }

  useEffect(() => {
    const token = Cookies.get('Auth-Token');
    if (!token) {
      navigate('/');
    }
    else {
      getDataUser(token);
    }
  }, []);

  return (
    <>
      <div className="header-container">
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Xin chào, {dataUser.name}
        </Typography>
        <Button variant="contained" onClick={handleLogout}>Đăng Xuất</Button>
      </div>
      <div className="menu-container">
        <Typography
          sx={{
            marginBottom: "28px",
            fontWeight: "bold",
          }}
          variant="h3"
        >
          Menu Quản Lí Phòng Trọ
        </Typography>
        <Button
          sx={{
            marginBottom: "20px",
            padding: "16px",
            width: "400px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "rgb(0, 169, 0)",
            "&:hover": {
              backgroundColor: "rgb(0, 129, 0)",
            },
          }}
          variant="contained"
          onClick={()=> {navigate('/admin/room')}}
        >
          Quản lí phòng
        </Button>
        <Button
          sx={{
            marginBottom: "20px",
            padding: "16px",
            width: "400px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "rgb(0, 169, 0)",
            "&:hover": {
              backgroundColor: "rgb(0, 129, 0)",
            },
          }}
          variant="contained"
        >
          Thêm điện, nước tháng mới
        </Button>
        <Button
          sx={{
            marginBottom: "20px",
            padding: "16px",
            width: "400px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "rgb(0, 169, 0)",
            "&:hover": {
              backgroundColor: "rgb(0, 129, 0)",
            },
          }}
          variant="contained"
        >
          Quản lí tiện ích
        </Button>
        <Button
          sx={{
            marginBottom: "20px",
            padding: "16px",
            width: "400px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "rgb(0, 169, 0)",
            "&:hover": {
              backgroundColor: "rgb(0, 129, 0)",
            },
          }}
          variant="contained"
        >
          Quản Lí Thanh Toán
        </Button>
        <Button
          sx={{
            padding: "16px",
            width: "400px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "rgb(0, 169, 0)",
            "&:hover": {
              backgroundColor: "rgb(0, 129, 0)",
            },
          }}
          variant="contained"
        >
          Quản lí Tài Khoản
        </Button>
      </div>
    </>
  );
};

export default MenuAdmin;
