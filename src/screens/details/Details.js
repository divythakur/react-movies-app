import React, { Component } from 'react'
import Header from '../../common/Header/Header';
import moviesData from '../../common/moviesData';
import Typography from '@material-ui/core/Typography'
import './Details.css'
import Home from '../home/Home'
import YouTube from 'react-youtube'
import ReactDOM from 'react-dom'


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
    onClickHandler=()=>{
        alert("ds");
        ReactDOM.render(<Home />,document.getElementById("root"));
    }
    render() {
        let movie = this.state.moviee;
        const opts={
            height:"500",
            width:'00',
            playerVars:{
                autoplay:1
            }
        }

        return (
            <div className="details">
                <Header />
                <div className="back">
                    <Typography >
                        <div onClick={this.onClickHandler}>
                        &#670; Back to Homee
                        </div>
                    </Typography>

                </div>
                <div className="flex-containerDetails">

                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
        <Typography variant="heading" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography ><span className="bold">Genres:</span>{movie.genres.join(',')}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {movie.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {movie.critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>
                            <YouTube
                               videoId={movie.trailer_url.split("?v=")[1]}
                               opts={opts}
                               onReady={this._onReady}
                            />

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