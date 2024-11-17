import Button from "@mui/material/Button";
import '../common.css';
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { decodeToken } from "../../../utils/common";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MenuUser = () => {
  const [dataUser, setDataUser] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('Auth-Token');
    navigate('/');
  }

  useEffect(() => {
    const token = Cookies.get('Auth-Token');
    const data = decodeToken(token);
    if (data.role == "Manage") {
      navigate('/admin');
    } else {
      setDataUser(data)
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
          Xin chào, {dataUser.name} ({dataUser.role})
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
          Thông tin {dataUser.room}
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
          onClick={() => {navigate('bill');}}
        >
          Xem hóa đơn tiện ích
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
          Góp ý
        </Button>
      </div>
    </>
  );
};

export default MenuUser;
