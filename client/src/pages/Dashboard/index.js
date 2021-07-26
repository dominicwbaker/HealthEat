import React from 'react';
import Wrapper from '../../Components/Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from './ItemData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div>
            <Wrapper>
                <div className={classes.root}>
                    <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1}>
                                <img src={item.img} alt={item.title} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </Wrapper>
        </div>
    );
}

export default Dashboard;