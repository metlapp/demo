import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, IconButton, Popover, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    quoteContainer: {
        textAlign: 'center',
        // color: '#999',
    },
    quote: {
        padding: '0 50px 10px',
        fontSize: 16,

    },
    quoteAuthor: {
        fontStyle: 'italic',
        fontSize: 14,
    },

    quoteContainerInspirational: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
    },
    quoteInspirational: {
        fontSize: 40,
    },
    quoteAuthorInspirational: {
        fontSize: 20,
    },

    quoteUnderlay: {
        backgroundColor: 'rgb(75,75,75,.4)',
        padding: 10,
    }
}));

export default function Quote(
    {
        style,
    }) {
    const classes = useStyles();


    let quoteContainerClass, quoteClass, quoteAuthorClass;

    quoteContainerClass = classes.quoteContainer;
    quoteClass = classes.quote;
    quoteAuthorClass = classes.quoteAuthor;
    switch (style) {
        case 'inspirational':
            quoteContainerClass += ' ' + classes.quoteContainerInspirational;
            quoteClass += ' ' + classes.quoteInspirational;
            quoteAuthorClass += ' ' + classes.quoteAuthorInspirational;
            break;
    }

    let quote, author;

    useEffect(() => {

    }, []);

    if (style === 'leansquad')
    {
        quote = 'Whatever is hard for you is lean for you.';
        author = '';
    }
    else {
        quote = 'If at first you don\'t succeed, then skydiving definitely isn\'t for you.';
        author = 'Steven Wright';
    }

    // xxx
    quote = 'Whatever is hard for you is lean for you.';
    author = '';

    return (
        <>
            {style === 'default' && (
                <div className={quoteContainerClass}>
                    <div className={quoteClass}>{quote}</div>
                    <div className={quoteAuthorClass}>~{author}</div>
                </div>
            )}
            {style === 'inspirational' && (
                <div className={quoteContainerClass}>
                    <div className={classes.quoteUnderlay}>
                        <div className={quoteClass}>{quote}</div>
                        <div className={quoteAuthorClass}>~{author}</div>
                    </div>
                </div>
            )}
        </>
    );
};

