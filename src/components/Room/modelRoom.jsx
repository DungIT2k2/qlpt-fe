import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, forwardRef, useEffect, useCallback } from 'react';
import { createNewRoom, getRoom, updateRoom } from '../../services/apiServices';
import { toast } from 'react-toastify';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModelRoom(props) {
    const { open, type, id, onClose, reFectch } = props;
    const [status, setStatus] = useState('uncheck');
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        fetchDataRoom(id);
    }, [id]);

    const fetchDataRoom = async (id) => {
        const result = await getRoom(id);
        if (result && result.status == 200) {
            const res = result.data?.data;
            setName(res?.name);
            setOwner(res?.owner);
            setStatus(res?.status);
        }
    }

    const handleCreate = async () => {
        try {
            const result = await createNewRoom(name, owner, status);

            if (result && result.status === 200) {
                toast.success(result.data.message, { position: "top-right" });
                console.log(result);
            }

            if (result && result.status === 500) {
                toast.error(result.data.message, { position: "top-right" });
            }

            setName('');
            setStatus('uncheck');
            setOwner('');
            onClose();
        } catch (error) {
            toast.error('Tạo phòng mới không thành công', { position: "top-right" });
            setName('');
            setStatus('uncheck');
            setOwner('');
            onClose();
        }
    }

    const handleUpdate = async () => {
        try {
            const result = await updateRoom(id, name, owner, status);
            console.log(result);
            const data = result?.data;
            console.log(data);
            if (result && result.status === 200) {
                toast.success(data.message, { position: "top-right" });
            }

            if (result && result.status === 500) {
                toast.error(data.message, { position: "top-right" });
            }
            reFectch();
            onClose();
        } catch (error) {
            toast.error('Tạo phòng mới không thành công', { position: "top-right" });
        }
    }

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={() => { onClose() }}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => { onClose() }}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {type == "Add" ? "Thêm Phòng Mới" : "Sửa thông tin phòng"}
                        </Typography>
                        {
                            type == "Add" ? (<Button autoFocus color="inherit" onClick={handleCreate}>
                                Lưu
                            </Button>) :
                                (<Button autoFocus color="inherit" onClick={handleUpdate}>
                                    Lưu
                                </Button>)
                        }
                    </Toolbar>
                </AppBar>
                <div className='form-add'>
                    <TextField
                        id="outlined-basic"
                        label="Tên Phòng"
                        variant="outlined"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Người thuê"
                        variant="outlined"
                        value={owner}
                        onChange={(event) => { setOwner(event.target.value) }}
                    />
                    <br />
                    <Select
                        labelId="status-label"
                        id="status-label"
                        value={status}
                        onChange={handleChange}
                    >
                        <MenuItem value="uncheck">Còn Trống</MenuItem>
                        <MenuItem value="checked">Đã Cho Thuê</MenuItem>
                    </Select>
                </div>

                <List>

                </List>
            </Dialog>
        </>
    );
}
