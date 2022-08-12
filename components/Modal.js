import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Modal({state,actions, children, additionalContent}) {
    const classes = useStyles();
    const defaultValue = false;
    const {setValue} = actions;

    const handleOpen = () => {
        setValue(true)
    };

    const handleClose = () => {
        setValue(false)
    };

    return (
        <div>
            <MUIModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={state?.value || defaultValue}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={state?.value || defaultValue}>
                    <div className={classes.paper}>
                        {children || additionalContent || <div></div> }
                    </div>
                </Fade>
            </MUIModal>
        </div>
    );
}