import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, IconButton, Popover, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    popoverPaper: {
        background: 'linear-gradient(45deg, #c2fee4 30%, #bcdaff 90%)',
        else: '#c2fee4',
        something: '#bcdaff',
        width: 400,
    },
    metricContainer: {
        fontSize: '1.6rem',
        textAlign: 'center',
        float: 'right',
        marginTop: 10,
        marginRight: 15,
        width: 100,
        cursor: 'pointer',
    },
    metricTitle: {
        fontSize: '0.9rem',
        marginTop: 5,
    },
    metricPercent: {},
    metricTotal: {},
    metricTotalCurrent: {},
    metricTotalGoal: {
        fontSize: '1rem',
    },

}));

export default function Metrics(
    {
        pageStyle,
    }) {
    const classes = useStyles();
    const [metrics, setMetrics] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(null);
    const id = open ? 'metrics-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(event.currentTarget.getAttribute('metric-id'));
        console.log(open);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(null);
        console.log(open);
    };

    const fakeMetrics = [
        {
            id: 1,
            title: 'Winter Fundraising',
            description: 'Winter Fundraising Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            value: 40,
            type: 'percent',
        },
        {
            id: 2,
            title: 'New Members',
            description: 'New Members Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. <br />Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            current: 345,
            goal: 500,
            type: 'total',
        },
    ];

    const salesMetrics = [
        {
            id: 1,
            title: 'KPI\'s<br />Achieved',
            description: 'KPI\'s Achieved Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            current: 9,
            goal: 10,
            type: 'total',
        },
        {
            id: 2,
            title: 'Sales vs. Target',
            description: 'Sales vs. Target Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. <br />Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            type: 'percent',
            value: 86,
        },
    ];

    const patientSupportMetrics = [
        {
            id: 2,
            title: 'Program Complete',
            description: 'Program Complete Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. <br />Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            type: 'percent',
            value: 40,
        },
        {
            id: 3,
            title: 'Questions Complete',
            description: 'Questions Complete Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            current: 14,
            goal: 17,
            type: 'total',
        },
        {
            id: 1,
            title: 'Days Until Next&nbsp;Treatment',
            description: 'Days Until Next Treatment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            value: 3,
            type: 'fixed',
        },
    ];

    const leansquadMetrics = [
        {
            id: 1,
            title: 'Daily Calories',
            description: 'Program Complete Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. <br />Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            type: 'percent',
            value: 80,
        },
        {
            id: 2,
            title: 'Workouts',
            description: 'Questions Complete Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi mi, consequat ut lacus sed, consequat commodo dolor. Ut ac mauris eu elit porttitor dictum eget malesuada quam. Integer eget iaculis eros, quis vulputate odio. Sed eget scelerisque diam. Suspendisse aliquet turpis nec nulla varius, sed interdum ex eleifend. ',
            current: 4,
            goal: 5,
            type: 'total',
        },
    ];


    useEffect(() => {

        setMetrics(leansquadMetrics);
    }, []);

    return (
        <>
            {metrics.map((metric) => (
                <>
                    <div metric-id={metric.id} className={classes.metricContainer} onClick={handleClick}>
                        {metric.type === 'percent' ? (
                            <div className={classes.metricPercent}>{metric.value}%</div>
                        ) : metric.type === 'fixed' ?
                            (
                                <div className={classes.metricPercent}>{metric.value}</div>
                            )
                            :
                            (
                            <div className={classes.metricTotal}><span
                                className={classes.metricTotalCurrent}>{metric.current}</span><span
                                className={classes.metricTotalGoal}>/{metric.goal}</span></div>
                        )}
                        <div className={classes.metricTitle} dangerouslySetInnerHTML={{__html: metric.title}} />
                    </div>

                    <Popover
                        id={id}
                        open={open == metric.id}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        classes={{
                            paper: classes.popoverPaper,
                        }}
                    >
                        <IconButton component="span" onClick={handleClose} style={{float: 'right'}}>
                            <CloseIcon fontSize={"small"}/>
                        </IconButton>
                        <div className={classes.typography}>{metric.description}</div>
                    </Popover>
                </>
            ))
            }

        </>
    );
};

