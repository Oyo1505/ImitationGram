import React from 'react';
import PropTypes from 'prop-types';

class Review extends React.Component {


    constructor(props) {
        super(props);
        this.state = {         
                    id: 1234,
                    name: '0y0',
                    title:"At vero eos et accusamus et iusto odio",
                    review: "",
                }
    }
  
    render() {
        return (
            <section id="reviews">
					<div>	
					<h2>Reviews</h2>
					
							<div className="review-content">
								<h2>{this.state.title}</h2>
                                <p><i><span className="guillemet">"</span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                 quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                                 voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                                 ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                                 sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                                  ercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<span className="guillemet">"</span></i></p>
								<cite className="author" >{this.state.name} - 15/05/2019</cite>
							</div>
					
							
					</div>

			</section>
        );
    }
}

export default Review;


/*Review.propTypes = {
    id : PropTypes.int,
    name: PropTypes.string,
    title: PropTypes.string,

}*/