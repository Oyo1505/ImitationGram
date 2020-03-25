import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated, config } from 'react-spring/renderprops';
import GoogleBook from './GoogleBook';
import { Link } from 'react-router-dom';



export default class GoogleBooksItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: 'books', id: null, }
    }

    render() {
        const { books, select } = this.props
        return (
            <Fragment>
        		{ select === this.state.name  && 
        			 <div id="books-results">
		        		<h2>Books </h2>
		        		<br />
		        
					      	{books.map(book => (
					      				<Fragment>
							            <div  className="items-results">
						            		<Link to={`/book/${book.id}`}>	
						            			<GoogleBook key={book.id} volume={book.volumeInfo}  />
						            		</Link>	
						            	
						           	 </div>
						           	 
						           	 </Fragment>
						            ))}
					
					</div>
        		}
        		{select === null &&
        				 <div id="books-results">
		        		<h2>Books </h2>
		        		<br />
		            <Spring
					          native
					          config={config.stiff}
					          from={{ opacity: 0 }} 
					          to={{ opacity: 1 }}
					          delay= '500'
					          >
								{props => (
					      			books.map(book => (
					      				<Fragment>
							            <animated.div style={props} className="items-results">
						            		<Link to={{pathname:`/book/${book.id}`, state : { id: book.id  } }}>	
						            			<GoogleBook key={`${book.id}`} volume={book.volumeInfo}  />
						            		</Link>	
						            	
						           	 </animated.div>
						           	 
						           	 </Fragment>
						            ))
						          )}
					</Spring>
					</div>
        		}
		    
				</Fragment>
        )
    }
}