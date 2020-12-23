import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/SaveOutlined';
import { fetchImages } from '../Action/Api'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        // height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


function SearchResult(props) {
    const classes = useStyles();
    const [searchImageResult, setSearchIamgeResult] = useState([]);

    const getGridListCols = () => {
        if (isWidthUp('lg', props.width)) {
            return 4;
        }

        if (isWidthUp('md', props.width)) {
            return 3;
        }

        if (isWidthUp('sm', props.width)) {
            return 2;
        }

        return 1;
    }

    const imagesApiFetch = async (url) => {
        let data = await fetchImages(url)
        setSearchIamgeResult(data.results)
    }
    console.log(searchImageResult)
    useEffect(() => {
        imagesApiFetch("https://api.unsplash.com/search/photos?page=2&per_page=50&query=" + props.value + "&client_id=" + process.env.REACT_APP_API_KEY);
    }, [props.value]);

    return (
        <div className={classes.root}>
            {searchImageResult && <GridList cellHeight={380} className={classes.gridList} cols={getGridListCols()}>
                {searchImageResult.map((tile) => (
                    <GridListTile key={tile.id}>
                        <img src={tile.urls.regular} alt={tile.alt_description} />
                        <GridListTileBar
                            title={tile.alt_description}
                            subtitle={<span>by: {tile.user.first_name}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <a href={tile.links.html}><SaveIcon /></a>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>}
        </div>
    );
}

export default withWidth()(SearchResult)