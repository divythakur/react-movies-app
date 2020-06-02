import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header/Header.js';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData'
import genres from '../home/genres'
import Artists from '../home/Artist'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '5px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});


class Home extends Component {
    constructor() {
        super();
        this.state = {
            moviename: "",
            genres: [],
            artists:[]
        }
    }
    onnamechangeHandler = (e) => {
        this.setState({ moviename: e.target.value });
        console.log(this.state.moviename);
    }
    genrechangeHandler = (e) => {
        this.setState({genres:e.target.value})

    }
    artistSelectHandler = event => {
        this.setState({ artists: event.target.value });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => {
                        return (
                            <GridListTile key={movie.id}>
                                <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                <GridListTileBar title={movie.title} />
                            </GridListTile>
                        );
                    })
                    }
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>


                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        Find Movies By
                                </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">by name</InputLabel>
                                    <Input id="movieName" onChange={this.onnamechangeHandler} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="multiple-checkbox">Genre</InputLabel>

                                </FormControl>
                                <FormControl>
                                    <Select
                                        multiple
                                        input={<Input id="multiple-checkbox" />}
                                        renderValue={Selected => Selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genrechangeHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => {
                                            return (
                                                <MenuItem key={genre.id} value={genre.name}>
                                                    <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                    <ListItemText primary={genre.name} />
                                                </MenuItem>

                                            );
                                        })

                                        }
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {Artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                      id="releaseDateStart"
                                      label="from start"
                                      type="date"
                                      defaultValue=""
                                      InputLabelProps={{shrink:true}}
                                      />

                                </FormControl>

                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);