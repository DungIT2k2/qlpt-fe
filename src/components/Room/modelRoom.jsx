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
import InputLabel from '@mui/material/InputLabel';
import { useState, forwardRef } from 'react';
import { createNewRoom } from '../../services/apiServices';
import { toast } from 'react-toastify';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModelRoom(props) {
    const { open, onClose } = props;
    const [status, setStatus] = useState('uncheck');
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleCreate = async () => {
        try {
            const result = await createNewRoom(name, owner, status);

            if (result && result.status === 200) {
                toast.success(result.data.message, { position: "top-right"});
                console.log(result);
            }
            if (result && result.status === 500) {
                toast.error(result.data.message, { position: "top-right"});
            }
            setName('');
            setStatus('uncheck');
            setOwner('');
            onClose();
        } catch (error) {
            toast.error('Tạo phòng mới không thành công', { position: "top-right"});
            setName('');
            setStatus('uncheck');
            setOwner('');
            onClose();
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
                            Thêm Phòng Mới
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleCreate}>
                            Lưu
                        </Button>
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
                        <MenuItem value="check">Đã Cho Thuê</MenuItem>
                    </Select>
                </div>

                <List>

                </List>
            </Dialog>
        </>
    );
}
