import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, IconButton, Popover, Typography, Checkbox} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import ChevronRight from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
    mainTodoContainer: {
        marginRight: 20,
    },
    mainTodoHeader: {
        fontSize: 35,
        textAlign: 'center',
    },
    mainTodoInput: {
        width: '100%',
        border: 'none',
        borderBottom: '3px solid white',
        marginTop: 30,
        background: 'transparent',
        padding: 0,
    },
    todoItemsContainer: {
        marginTop: 20,
        fontSize: 17,
    },


}));

export default function TodoList(
    {
        pageStyle,
    }) {
    const classes = useStyles();

    const todoItemsGeneral = [
        {
            text: 'Touch base with Steve @ Pfizer',
            checked: true,
        },
        { text: 'Schedule meeting between Jennie and Paul', checked: false, },
    ]

    const todoItemsLeansquad = [
        {
            text: 'Lean Leggies',
            checked: true,
        },
        { text: 'Leancovery', checked: false, },
    ]

    const todoItems = pageStyle === 'leansquad' ? todoItemsLeansquad : todoItemsGeneral;



    return (
        <>
            <div className={classes.mainTodoContainer}>
                <div className={classes.mainTodoHeader}>What is your focus today?</div>
                {/*<input className={classes.mainTodoInput} />*/}
                <FormControl className={classes.mainTodoInput}>
                    <Input
                        id="standard-adornment-password"
                        type={'text'}
                        style={{borderBottom: 'orange'}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                ><KeyboardReturn style={{color: "white", fontSize: 40}} />
                                </IconButton>
                            </InputAdornment>
                        }
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                ><ChevronRight style={{color: "white", fontSize: 40}} />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className={classes.todoItemsContainer}>
                    {todoItems.map((todoItem) => (
                        <>
                            <div>
                                <Checkbox
                                    checked={todoItem.checked}
                                />
                                <span style={{textDecoration: todoItem.checked ? 'line-through' : ''}}>{todoItem.text}</span></div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

