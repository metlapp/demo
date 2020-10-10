import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, IconButton, Popover, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },

    sidebarLink: {
        flexGrow: 'unset',
        color: 'white',
        marginLeft: 15,
        marginBottom: 10,
        textDecoration: 'none',
        fontSize: 16,
    }



}));

export default function Links(
    {
        pageStyle,
    })
{
    const classes = useStyles();

    return (
        <>
            {pageStyle === 'faktori' ? (
                <>
                    <a className={classes.sidebarLink} href={'#'}>Marketing Material</a>
                    <a className={classes.sidebarLink} href={'#'}>Pricelist</a>
                    <a className={classes.sidebarLink} href={'#'}>Customers</a>
                    <a className={classes.sidebarLink} href={'#'}>Vision</a>
                </>
            ) : pageStyle === 'leansquad' ? (
                <>
                    <a className={classes.sidebarLink} href={'#'}>Workouts</a>
                    <a className={classes.sidebarLink} href={'#'}>Meal Plans</a>
                    <a className={classes.sidebarLink} href={'#'}>Support</a>
                </>
            ) : (
                <>
                    <a className={classes.sidebarLink} href={'#'}>Newsletter</a>
                    <a className={classes.sidebarLink} href={'#'}>Contacts</a>
                    <a className={classes.sidebarLink} href={'#'}>Resource&nbsp;Center</a>
                    <a className={classes.sidebarLink} href={'#'}>Overview</a>
                </>
                )}
        </>
    );
};

