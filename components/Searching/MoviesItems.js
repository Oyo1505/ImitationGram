import React, { Component, Fragment } from 'react';
import { Spring, animated, config } from 'react-spring/renderprops'
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';


class MoviesItems extends Component {

    constructor(props) {
        super(props);
        this.state = { toggle: true, name: 'movies' };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({ toggle: !this.state.toggle })

    }

    render() {
        const { movies, select } = this.props

        return (
            <Fragment>
                <div  id="movies-results">
                { select === this.state.name  && 
                 <Fragment>   
                    <h2>Movies</h2>
                     <br />
                    { movies.map(movie => (
                                    <Fragment>
                                    <animated.div
                                        className="items-results"
                                    >
                                        <Link to={`/movie/${movie.id}`}>
                                            <MovieItem key={movie.id} movie={movie}  />
                                        </Link>
                                 </animated.div>
                                 <div className="clear"></div>
                                 </Fragment>
                                ))}
                 </Fragment>    
                }
                { select === null &&
                <Fragment> 
                    <h2>Movies</h2>
                     <br />
                    <Spring
                          native
                          config={config.stiff}
                          from={{ opacity: 0 }} 
                          to={{ opacity: 1 }} delay= '500'
                          >
                            {props => (
                                movies.map(movie => (
                                    <Fragment>
                                    <animated.div
                                        className="items-results"
                                        style={props}
                                    >
                                        <Link to={`/movie/${movie.id}`}>
                                            <MovieItem key={movie.id} movie={movie}  />
                                        </Link>
                                 </animated.div>
                                 <div className="clear"></div>
                                 </Fragment>
                                ))
                              )}
                        </Spring>
                </Fragment>        
                }
                        
                </div>        
            </Fragment>
        )
    }

}
export default MoviesItems;