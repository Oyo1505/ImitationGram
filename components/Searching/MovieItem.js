import React, {  Fragment } from 'react';
import imageDefault from '../../images/film-default.png'

const MovieItem = (props) => {

    return (
        <Fragment>
            {props.movie.poster_path &&
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} width="128px" height="207px" alt={props.movie.title}/>
            }
            {!props.movie.poster_path &&
                <img src={imageDefault} width="128px" height="207px" alt="poster default"/>
            }
    		
    		<div className="items-list-info">
    			<h5>{props.movie.title}</h5>
    			<p>
    				Sortie en {props.movie.release_date}
    			</p>
    		</div>
    	</Fragment>
    )
}

export default MovieItem;