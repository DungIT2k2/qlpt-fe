import Button from "@mui/material/Button";
import "../common.css";
import { Typography } from "@mui/material";
const MenuAdmin = () => {
  return (
    <>
      <div className="header-comtainer">
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Xin chào, ...
        </Typography>
        <Button variant="contained">Đăng Xuất</Button>
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
