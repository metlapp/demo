import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Popover, Slider, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MessageIcon from '@material-ui/icons/Message';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    popoverHeader: {
        padding: theme.spacing(2),
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    popoverPaper: {
        background: 'linear-gradient(45deg, #c2fee4 30%, #bcdaff 90%)', // blues
        something: '#c2fee4',
        else: '#bcdaff',
        width: 500,
    },
    popoverPaperSurvey: {
        // background: 'linear-gradient(45deg, #c2fee4 30%, #bcdaff 90%)', // blues
        background: 'linear-gradient(45deg, #ffebca 30%, #fef9b2 90%)', // oranges
        something: '#ffebca',
        else: '#fef9b2',
        width: 500,
    },
    anchorBtn: {
        padding: '15px',
        fontSize: 40,
        color: '#FFF',
        cursor: 'pointer',
    },
    psSurveyHeader: {
        margin: 20,
        marginLeft: 0,
        color: '#333',
    },
    psSlider: {
        width: '95%',
        marginLeft: 5,
        color: '#ff9c49', // orange
        // color: '#2274ff', // blue
    },
    psRadioGroup: {

    },
    surveySubmitBtn: {
        backgroundColor: '#ff9c49', // orange
        // backgroundColor: '#2274ff', // blue
    }

}));

export default function Announcement(
    {
        pageStyle,
    }) {
    const classes = useStyles();

    const [announcement, setAnnouncement] = useState({
        id: -1,
        title: null,
        body: null,
        cta: null,
        link: null,
    });
    const hideAnnouncementLocalStorageKey = 'hideAnnouncement_' + announcement.id;
    const [hideAnnouncement, setHideAnnouncement] = useState(
        localStorage.getItem(hideAnnouncementLocalStorageKey) || false
    );

    const [anchorEl, setAnchorEl] = useState(null);


    const open = Boolean(anchorEl) || !hideAnnouncement;
    const id = open ? 'simple-popover' : undefined;
    const anchorRef = React.useRef();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickDismiss = () => {
        setAnchorEl(null);
        setHideAnnouncement(true);
    };

    const handleCTAClick = (event) => {
        window.open(announcement.link, "_blank");
    };

    let marks = [];
    for (var i = 1; i <= 5; i++) {
        marks.push({
            value: i,
            label: i,
        });
    }


    useEffect(() => {
        localStorage.setItem(hideAnnouncementLocalStorageKey, hideAnnouncement);
    }, [hideAnnouncement]);

    useEffect(() => {
        let storedHideAnnouncement = localStorage.getItem(hideAnnouncementLocalStorageKey) === 'true' || false;
        if (!storedHideAnnouncement) {
            console.log(hideAnnouncementLocalStorageKey);
            setAnchorEl(anchorRef.current);
        }
        setHideAnnouncement(storedHideAnnouncement)
    }, [announcement]);


    useEffect(() => {
        const fetchData = async () => {
            // random # between 1-100 for sample data
            let postId = Math.round(Math.random() * 100);
            try {
                const result = await axios(
                    'https://jsonplaceholder.typicode.com/posts/' + postId,
                );
                setAnnouncement({
                    id: 1,//result.data.id,
                    title: result.data.title,
                    body: result.data.body,
                    cta: 'Donate Now',
                    link: 'https://www.greenparty.ca/en/civicrm/contribute/transact?id=1',
                });
            } catch (error) {
                console.log('no announcement');
            }
        };

        fetchData();
    }, []);

    return announcement.title && (
        <>
            <MessageIcon className={classes.anchorBtn + ' flexGrow0'} ref={anchorRef} aria-describedby={id} onClick={handleClick}/>


            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 30,
                    horizontal: 'left',
                }}
                classes={{
                    paper: pageStyle ==='patientSupport' ? classes.popoverPaperSurvey : classes.popoverPaper,
                }}
            >
                {pageStyle === 'patientSupport' && (
                    <>
                        <Typography className={classes.typography}>

                        <header className={classes.psSurveyHeader}>Was the infusion process positive?</header>
                    <Slider
                        min={1}
                        max={5}
                        marks={marks}
                        className={classes.psSlider}
                    />
                    <header className={classes.psSurveyHeader}>Were you informed about treatment options?</header>
                                <RadioGroup className={classes.psRadioGroup}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>

                        </Typography>
                        <Typography className={classes.typography}>

                        <Button aria-describedby={'cta-btn'} variant="contained" className={classes.surveySubmitBtn}>
                                Submit
                            </Button>
                            <Button aria-describedby={'dismiss-btn'} variant="contained" className={'cancelBtn'}
                                    startIcon={<CloseIcon />}
                                    onClick={handleClickDismiss}
                                    style={{float: 'right'}}>
                                Dismiss
                            </Button>
                        </Typography>
                    </>
                )}

                {pageStyle !== 'patientSupport' && (
                    <>
                    <Typography className={classes.popoverHeader}>{announcement.title}</Typography>
                    <Typography className={classes.typography}>{announcement.body}</Typography>
                    <Typography className={classes.typography}>
                    <Button aria-describedby={'cta-btn'} variant="contained" color={"primary"} onClick={handleCTAClick}>
                    {announcement.cta}
                    </Button>
                    <Button aria-describedby={'dismiss-btn'} variant="contained" className={'cancelBtn'}
                    startIcon={<CloseIcon />}
                    onClick={handleClickDismiss}
                    style={{float: 'right'}}>
                    Dismiss
                    </Button>
                    </Typography>
                    </>
                    )}
            </Popover>

        </>
    );
};

