import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class MovieCard extends Component {

    render() {
        let {name, img, lang, gen, rate} = this.props;
        // console.log(name)

        return (
            <div className="card" style={{width: "20rem"}}>
                <img src={img} style={this.imgStyle} className="card-img-top" alt="..."/>
                <div className="card-body" style={this.bodyStyle}>
                    <h5 className="card-title"><strong>{name}</strong></h5>
                    <p className="card-text">Rating: {rate.average?rate.average:'Not Availble'}</p>
                    <p className='card-text'>Genres: {gen} </p>
                    <p className='card-text'>{lang}</p>
                    <Link to='/movie' state={{data: this.props}} className="btn btn-primary btn-sm read-more">More...</Link>
                </div>
            </div>
        )
    }
}
