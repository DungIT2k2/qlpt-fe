import { Routes, Route } from "react-router-dom";

import Login from "../src/components/Login/index";
import { Box, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import AdminPage from "./components/Home/Admin";

const primary = green[500];

function PageNotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404 Not Found
      </Typography>
    </Box>
  )
}

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>

        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Layout;
