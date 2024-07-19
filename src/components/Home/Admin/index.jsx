import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./admin.css";
import { Typography } from "@mui/material";

const AdminPage = () => {
  return (
    <>
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
          }}
          variant="contained"
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
          }}
          variant="contained"
        >
          Quản lí Tài Khoản
        </Button>
      </div>
    </>
  );
};

export default AdminPage;
