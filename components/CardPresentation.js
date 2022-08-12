import React, {useEffect, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        width: '100%',
        flexWrap: "wrap",
        padding: "100",
        justifyContent: "space-around"
    },
    card: {
        display: 'flex',
        flex: 1,
        margin: 10
    },
    typo: {
        alignSelf: 'center',
        justifySelf: 'center',
        padding: 10
    },
    button: {
        display: "flex",
        flex: 1
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        display: 'flex',
        height: 150
    },
    cover: {
        width: 151,
    },
    focusVisible: {},
    childCard: {
        display: 'flex',
        flex: "0 0 25%",
        margin: 10,
        height: 55,
        maxWidth: 400,
        position: "relative"
    },
    childCover: {
        width: 55,
        height: 55
    },
    margin: {
        margin: theme.spacing(1),
    },
    closeButton: {
        backgroundColor: 'red',
        display: "flex",
        width: 40,
        top: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        justifyContent: 'center'
    }
}));


export default function CardPresentation({state, actions, onClick}) {
    const classes = useStyles();
    const theme = useTheme();
    const {setValue} = actions;
    // const [state.value, setstate.value] = useState([{title: "NATUSH COLOMBO, CARMEN"}]);

    useEffect(()=>{
        setValue([{title: "NATUSH COLOMBO, CARMEN"},{title: "NATUSH COLOMBO, CARMEN"}])
        // onValueChange({slice,id,value: {value:true}})
    },[])

    // const addCard = () => setstate.value([...state.value, {title: "NATUSH COLOMBO, CARMEN"}])

    // const addCard = () => console.log(onClick)
    const addCard = onClick

    const removeCard = (e, index) => setValue(
        state.value.filter((_, i) => i !== index)
    )

    return <>
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image="/womavatar.png"
                    title="avatar"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.typo} component="h5" variant="h5">
                            NATUSH COLOMBO, CARMEN
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Card className={classes.card}>
                <ButtonBase
                    focusRipple
                    key="addRelation"
                    onClick={addCard}
                    focusVisibleClassName={classes.focusVisible}
                    className={classes.button}
                >
                    <Typography className={classes.typo} component="h5" variant="h5">
                        Agregar Relacion
                    </Typography>
                </ButtonBase>
            </Card>
        </div>
        {/*<div className={classes.root}>*/}
        <Grid container spacing={2}>
            {state?.value?.map((card, index) => {
                if (index === 0) return
                return <Grid item xs={3}>
                    <Card className={classes.childCard} key={index}>
                        <CardMedia
                            className={classes.childCover}
                            image="/childWomavatar.png"
                            title="avatar"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography>
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.closeButton}>
                            <ButtonBase
                                focusRipple
                                key="removeChild"
                                focusVisibleClassName={classes.focusVisible}
                                className={classes.button}
                                onClick={(e) => removeCard(e, index)}
                            >
                                <CloseIcon style={{alignSelf: 'center', color: 'white'}}/>
                            </ButtonBase>
                        </div>
                    </Card>
                </Grid>
            })}
        </Grid>
        {/*</div>*/}
    </>
}