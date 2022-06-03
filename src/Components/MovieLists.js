import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieLists extends Component {

    constructor() {
        super();
        this.state = {
            shows: [],
        }
    }

    async componentDidMount() {
        let url = "https://api.tvmaze.com/search/shows?q=all";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({shows: parsedData})
        console.log(parsedData);
    }

    render() {
        return (
        <div className='container'>
            <div className='row my-3'> 
                {this.state.shows.map((element) => {
                    let {name, image, summary, language, genres, rating} = element.show;
                    return <div className='col-md-4 my-3'>
                            <MovieCard name={name} img={image.original} gen={genres.toString()} sum={summary} lang={language} rate={rating}/>
                        </div>
                })}
			</div>
        </div>
        )
    }
}
