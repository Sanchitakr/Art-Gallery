//a place where to dispatch the action -> use useeffect
import React, {useEffect} from 'react';
//material-ui components
import { Container, AppBar , Typography ,Grow, Grid } from '@material-ui/core';
//Hooks
import { useDispatch } from 'react-redux';
//action to be used by dispatch
import {getPosts} from './actions/posts';
import paintings from './images/beer_lights.jpg'
import Posts from './components/Posts/Posts';
import Forms from './components/Form/Form';
import useStyles from  './styles';

const App =() =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());

    },[dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> My Gallery </Typography>
                <img className={classes.image} src={paintings} alt="paintings" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs ={12} sm={5}> 
                            <Posts/>
                        </Grid>   
                        <Grid item xs ={12} sm={4}> 
                            <Forms/>
                        </Grid> 
                    </Grid> 
                </Container>
            </Grow>
        </Container>
        
    );

}
export default App;