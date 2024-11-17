import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {
    Card,
    CardContent,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getDataBill } from '../../../services/apiServices';

const BillPage = () => {
    const [dataBill, setDataBill] = useState({});
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2024);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDataBill()
    }, [month, year]);

    const fetchDataBill = async () => {
        const dataRes = await getDataBill(month, year);
        if (dataRes.status == 200) {
            setDataBill(dataRes.data?.data);
        }
    }

    return (
        <div>
            <div className="header-container">
                <Button variant="contained" onClick={() => { navigate('/user') }}>Trở về Menu</Button>
            </div>
            <Card sx={{ maxWidth: 800, margin: '0 auto', padding: 2, marginTop: '32px', border: '1px solid black' }}>
                {/* Header */}
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                    Hóa Đơn Tháng {dataBill.month} Năm {dataBill.year}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2">
                            {dataBill.name}
                        </Typography>
                    </Box>
                </Box>

                {/* Table */}
                <Paper sx={{ width: '100%', overflow: 'hidden', mb: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dịch vụ</TableCell>
                                <TableCell>Số cũ</TableCell>
                                <TableCell>Số mới</TableCell>
                                <TableCell>Sử dụng</TableCell>
                                <TableCell align="right">Đơn giá</TableCell>
                                <TableCell align="right">Thành tiền</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="electricity">
                                <TableCell>Tiền điện</TableCell>
                                <TableCell>{dataBill.eOld}</TableCell>
                                <TableCell>{dataBill.eNew}</TableCell>
                                <TableCell>{dataBill.eConsumption}</TableCell>
                                <TableCell align="right">
                                    4.000đ
                                </TableCell>
                                <TableCell align="right">
                                    {dataBill.eTotal}đ
                                </TableCell>
                            </TableRow>
                            <TableRow key="water">
                                <TableCell>Tiền nước</TableCell>
                                <TableCell>{dataBill.wOld}</TableCell>
                                <TableCell>{dataBill.wNew}</TableCell>
                                <TableCell>{dataBill.wConsumption}</TableCell>
                                <TableCell align="right">
                                    4.000đ
                                </TableCell>
                                <TableCell align="right">
                                    {dataBill.wTotal}đ
                                </TableCell>
                            </TableRow>
                            <TableRow key="trash">
                                <TableCell>Tiền rác</TableCell>
                                <TableCell colSpan={3}></TableCell>
                                <TableCell align="right">
                                    20.000đ
                                </TableCell>
                                <TableCell align="right">
                                    20.000đ
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={5} align="right" sx={{ fontWeight: 'bold' }}>
                                    Tổng cộng:
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                    {dataBill.totalPay}đ
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                {/* Footer */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        disabled={dataBill.status}
                        sx={{ width: 120 }}
                    >
                        {dataBill.status ? 'Đã thanh toán' : 'Thanh toán'}
                    </Button>
                </Box>
            </Card>
        </div>
    );
};

export default BillPage;