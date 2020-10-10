import React, {useEffect, useState} from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import axios from 'axios';
import ListIcon from "@material-ui/icons/List";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AppsIcon from "@material-ui/icons/Apps";
import {Button, ButtonGroup, Slider} from '@material-ui/core';
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab';

// import logo from './metl_logo.png';
import logo from './metl_logo_white.png';
import psp_logo from './psp_by_metl_logo.png';
import faktori_logo from './faktori_by_metl_logo.png';
import leansquad_logo from './leansquad-logo.png';
import leansquad_video_screenshot from './leansquad_video_screenshot.png';
import leansquad_bg from './leansquad_bg.jpg';
import './App.css';
import theme from "./Theme";

import Announcement from "./Announcement";
import Metrics from "./Metrics";
import Quote from "./Quote";
import Links from "./Links";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    footer: {
        flexGrow: '0 !important',
        margin: '10px auto',
    },
    pageStyleButtonsBox: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    pageStyleButton: {
        minWidth: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'grey',
        marginRight: 5,
    },
    mainContentSideColumns: {
        minWidth: 150,
        flexGrow: 0,
    },
    mainContent: {
    },
    timeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    time: {
        fontSize: 100,
    },
    timeCaption: {
        fontSize: 50,
    },
    psContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 300px',
    },
    psSurveyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'rgb(50,50,50,.6)',
        padding: 50,
    },
    psSurveyHeader: {
        margin: 20,
    },
    psSurveyToggleButtons: {
        color: 'white',
        backgroundColor: 'teal',
        fontWeight: 'bold',
    },
    psSurveySubmitButton: {
        width: 100,
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'grey',
        margin: 'auto',
        marginTop: 20,
    },
    youTubeContainer: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        marginLeft: 20,
        textAlign: 'right',
    },
    videoContainer: {
        width: 350,
        float: 'right',
    },
    videoContainerSmall: {
        width: 300,
        float: 'right',
    },
    youTubeTitle: {
        fontSize: 35,
        textAlign: 'center',
        paddingLeft: 35,
    },
    youTubeIframe: {
        height: 200,
        width: '100%',
        margin: 20,
        border: 0,
    },
    faktoriSecondaryContent: {
        marginTop: 60,
    },
    leansquadVideoScreenshot: {
        width: '100%',
        margin: 20,
        border: 0,
    },


}));


export default function App() {
    const classes = useStyles();
    const [backgroundImage, setBackgroundImage] = useState('');
    const [genericBackgroundImage, setGenericBackgroundImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = '';
                // url = 'https://api.unsplash.com/photos/random/';
                // url = 'https://api.unsplash.com/photos/PsZJgxhcjFM/'; // grapes on vine
                // url = 'https://api.unsplash.com/photos/V8-WiXIoYOU/'; // oranges
                // url = 'https://api.unsplash.com/photos/h4zs8fbybq4/'; // blueberries
                // url = 'https://api.unsplash.com/photos/K-iJz15pfww/'; // bowl of tomatoes (looks like bicycle wheel)
                // url = 'https://api.unsplash.com/photos/_xN7UbcZ33I/'; // cherries
                // url = 'https://api.unsplash.com/photos/_79ZJS8pV70/'; // paella
                // url = 'https://api.unsplash.com/photos/IEHPDNk2-8w/'; // mountain w. pink background
                // url = 'https://api.unsplash.com/photos/-87JyMb9ZfU/'; // mountain w. red jacket guy
                // url = 'https://api.unsplash.com/photos/8Nql6oVT_1A/'; // sunrise jaggy mountains
                // url = 'https://api.unsplash.com/photos/1527pjeb6jg/'; // jaggy mountains fog
                url = 'https://api.unsplash.com/photos/-lEvfz9MXbE/'; // sunrise mountains blue
                // url = 'https://api.unsplash.com/photos/TNGr7fETBrM/'; // dark sky stars



                const result = await axios.get(
                    url, {
                        params: {
                            client_id: 'LA4WOa1mDEHxGe0yGWZvE7uNXxj7WH3diiMgpRbhJis',
                            query: 'nature dark',
                            // collections: 'gradient-grandeur',
                            orientation: 'landscape',
                        }
                    }
                );
                setGenericBackgroundImage(result.data.urls.regular);
            } catch (error) {
                console.log('no background');
            }
        };

        fetchData();
    }, []);


    const [pageStyle, setPageStyle] = useState('default');
    const setPageStyleDefault = () => {
        setPageStyle('default');
        setBackgroundImage(genericBackgroundImage);
    }
    const setPageStyleInspirational = () => {
        setPageStyle('inspirational');
        setBackgroundImage(genericBackgroundImage);
    }

    const setPageStylePS = () => {
        setPageStyle('patientSupport');
        setBackgroundImage(genericBackgroundImage);
    }

    const setPageStyleFaktori = () => {
        setPageStyle('faktori');
        setBackgroundImage(genericBackgroundImage);
    }

    const setPageStyleLeanSquad = () => {
        setPageStyle('leansquad');
        setBackgroundImage(genericBackgroundImage);
        // setBackgroundImage(leansquad_bg);
    }

    const addBgToCollection = async () => {
        const result = await axios.post(
            'https://api.unsplash.com/collections/11629903/add', {
                params: {
                    client_id: 'LA4WOa1mDEHxGe0yGWZvE7uNXxj7WH3diiMgpRbhJis',
                    collection_id: '11629903',
                    photo_id: 'IkYAxB-orJ8',
                }
            }
        );

    }

    let marks = [];
    for (var i = 1; i <= 5; i++) {
        marks.push({
            value: i,
            label: i,
        });
    }


    return (
        <ThemeProvider theme={theme}>
            <div className={'App'}>
                <div id={'background'} style={{backgroundImage: 'url(' + backgroundImage + ')'}}></div>
                { pageStyle === 'xleansquad' && (<div className={'background-overlay'}></div>)}

                <div className={'flexBoxCol'} style={{height: '100vh'}}>

                    {/* header */}
                    <div className={'flexBoxRow flexGrow0'}>
                        <div className={'flexGrow0'}>
                            <img className={'App-logo'} src={
                                pageStyle === 'patientSupport'
                                    ? psp_logo
                                    : pageStyle === 'faktori'
                                        ? faktori_logo
                                        : pageStyle === 'leansquad'
                                            ? leansquad_logo
                                            : logo
                            } alt="logo"/>
                        </div>

                        {pageStyle !== 'leansquad' &&
                            <div>
                            <a href={'#'} className={'header-link'} onClick={() => {
                                alert("clicked");
                            }}>
                                <AppsIcon/>
                                <div></div>
                            </a>
                            <a href={'#'} className={'header-link'} onClick={() => {
                                alert("clicked");
                            }}>
                                <LocalLibraryIcon/>
                                <div></div>
                            </a>
                        </div>
                        }
                        <div className={'metrics'}>
                            <Metrics pageStyle={pageStyle} />
                        </div>
                    </div>

                    {/* body */}
                    <div className={'flexBoxRow'}>
                        <div className={'flexBoxCol ' + classes.mainContentSideColumns}>
                            <Announcement pageStyle={pageStyle}/>
                            <Links pageStyle={pageStyle} />
                        </div>

                        <div className={'flexBoxCol'}>
                            {pageStyle === 'inspirational' &&
                            (
                                <Quote style={'inspirational'}/>
                            )}
                            {(
                                pageStyle === 'default' ||
                                pageStyle === 'patientSupport' ||
                                pageStyle === 'faktori' ||
                                pageStyle === 'leansquad')
                            &&
                            (
                                <div className={classes.timeContainer}>
                                    <div className={classes.time}>10:20</div>
                                    <div className={classes.timeCaption}>Trust your intuition.</div>
                                </div>
                            )}

                            {pageStyle === 'faktori' && (
                                <div className={'flexBoxRow ' + classes.faktoriSecondaryContent}>

                                    <TodoList pageStyle={pageStyle} />

                                    <div className={'flexBoxCol'}>
                                        <div className={classes.youTubeContainer}>
                                            <div className={classes.videoContainer}>
                                                <div className={classes.youTubeTitle}>Video of the Day</div>
                                                <iframe className={classes.youTubeIframe}
                                                        src="https://www.youtube.com/embed/RcO3ZtRFJxc">
                                                </iframe>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}

                            {pageStyle === 'leansquad' && (
                                <div className={'flexBoxRow ' + classes.faktoriSecondaryContent}>

                                    <TodoList pageStyle={pageStyle} />

                                    <div className={'flexBoxCol'}>
                                        <div className={classes.youTubeContainer}>
                                            <div className={classes.videoContainerSmall}>
                                                <div className={classes.youTubeTitle}>Video of the Day</div>
                                                <img className={classes.leansquadVideoScreenshot}
                                                        src={leansquad_video_screenshot}>
                                                </img>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={'flexBoxCol ' + classes.mainContentSideColumns}></div>
                    </div>

                    {/* footer */}
                    <footer className={classes.footer + ' flexBoxRow'}>
                        {(
                            pageStyle === 'default' ||
                            pageStyle === 'patientSupport' ||
                            pageStyle === 'faktori' ||
                            pageStyle === 'leansquad'
                        ) && (
                            <Quote style={'default'}/>
                        )}
                    </footer>
                </div>
            </div>

            {/*<Button onClick={addBgToCollection}>Add background to collection</Button>*/}
            <div className={classes.pageStyleButtonsBox}>
                <Button variant={"contained"} className={classes.pageStyleButton}
                        onClick={setPageStyleDefault}>1</Button>
                <Button variant={"contained"} className={classes.pageStyleButton}
                        onClick={setPageStyleInspirational}>2</Button>
                <Button variant={"contained"} className={classes.pageStyleButton}
                        onClick={setPageStylePS}>3</Button>
                <Button variant={"contained"} className={classes.pageStyleButton}
                        onClick={setPageStyleFaktori}>4</Button>
                <Button variant={"contained"} className={classes.pageStyleButton}
                        onClick={setPageStyleLeanSquad}>5</Button>
            </div>
        </ThemeProvider>
    )};

