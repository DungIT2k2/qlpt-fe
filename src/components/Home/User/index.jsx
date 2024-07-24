import Button from "@mui/material/Button";
import '../common.css';
import { Typography } from "@mui/material";

const UserPage = () => {
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
          Thông tin ....
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

export default UserPage;
