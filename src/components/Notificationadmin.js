import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function Notificationadmin(props) {
    const{notify,setnotify}=props

    const handleClose=(event,reason)=>{
        setnotify({
            ...notify,
            isOpen:false
        })
    }

    return (
        <Snackbar open={notify.isOpen} autoHideDuration={null} anchorOrigin={{vertical:'top',horizontal:'center'}} onClose={handleClose}>
            <Alert severity={notify.type} onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
