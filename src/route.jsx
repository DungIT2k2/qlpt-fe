import { Routes, Route } from "react-router-dom";

import Login from "../src/components/Login/index";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import AdminPage from "./components/Home/Admin";
import UserPage from "./components/Home/User";
import RoomPage from "./components/Room";
import UtilitiesPage from "./components/Utilities";
import ViewUtilities from "./components/Utilities/view";
import AddUtilities from "./components/Utilities/add";
import MenuAdmin from "./components/Home/Admin/menu";
import PaymentPage from "./components/Payment";
import AccountPage from "./components/Account";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuUser from "./components/Home/User/menu";
import BillPage from "./components/Home/User/bill";

const primary = green[500];

function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404 Not Found
      </Typography>
    </Box>
  );
}

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<MenuAdmin />} />
          <Route path="room" element={<RoomPage />} />
          <Route path="utilities" element={<UtilitiesPage />}>
            <Route index element={<ViewUtilities />} />
            <Route path="add" element={<AddUtilities />} />
          </Route>
          <Route path="payment" element={<PaymentPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
        <Route path="user" element={<UserPage />} >
          <Route index element={<MenuUser />} />
          <Route path="bill" element={<BillPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Layout;
