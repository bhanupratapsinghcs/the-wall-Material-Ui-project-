// import { AppBar } from '@material-ui/core'
import React from 'react'
import { AppBar, Typography, Toolbar, makeStyles, IconButton, fade, InputBase } from '@material-ui/core'
import CameraOutlined from '@material-ui/icons/CameraOutlined'
import SearchIcon from '@material-ui/icons/Search'

const useStyle = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
        marginBottom: 1
    },
    title: {
        flexGrow: 1,
        display: 'block',
        fontSize: 30,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header(props) {
    const classes = useStyle();
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <CameraOutlined />
                </IconButton>
                <Typography variant='h1' className={classes.title} noWrap> The Wall</Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}
