import React, { Component } from 'react'
import Header from '../../common/Header/Header';
import moviesData from '../../common/moviesData';
import Typography from '@material-ui/core/Typography'
import './Details.css'


class Details extends Component {
    constructor() {
        super();
        this.state = {
            moviee: {}
        }
    }
    componentWillMount() {
        let currentState = this.state;

        currentState = moviesData.filter((mov) => {
            return (
                mov.id === this.props.movieId
            )
        })[0];
        //console.log(currentState);
        this.setState({ moviee: currentState });

    }
    render() {
        let movie = this.state.moviee;
        console.log(movie);
        return (
            <div className="details">
                <Header />
                <div className="flex-containerDetails">

                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
        <Typography variant="heading" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography ><span className="bold">{movie.genres.join(',')}</span></Typography>
                        </div>
                    </div>
                    <div className="rightDetails">
                    </div>
                </div>
            </div>

        );
    }
}
export default Details;