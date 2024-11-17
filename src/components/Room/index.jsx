import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './room.css';
import TableRoom from "./tableRoom";
import ModelRoom from "./modelRoom";

const RoomPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="header-container">
                <Button variant="contained" onClick={() => { navigate('/admin') }}>Trở về Menu</Button>
            </div>
            <div className="content-container">
                <div className="header-content">
                    <Typography
                        sx={{
                            marginBottom: "16px",
                            fontWeight: "bold",
                        }}
                        variant="h4"
                    >
                        Quản Lí Phòng
                    </Typography>
                    <Button variant="contained" color="success" onClick={handleClickOpen}>Thêm phòng mới</Button>
                </div>
                <div className="body-content">
                    <TableRoom />
                </div>
            </div>
            <ModelRoom open={open} type={"Add"} onClose={handleClose}/>
        </>
    )
}
export default RoomPage;