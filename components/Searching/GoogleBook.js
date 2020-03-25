import React, { Fragment } from 'react';
import moment from 'moment';
import logoT from '../../images/tetris.jpg';

export default class GoogleBook extends React.Component {



    render() {
        return (
            <Fragment>
				{this.props.volume.imageLinks &&

					<img src={this.props.volume.imageLinks.thumbnail} width="128px" height="207px" alt="thumbnail book " />
						
				}
				{!this.props.volume.imageLinks &&
					<img src={logoT} width="128px" height="207px" alt="logo default book" />

				}
				<div className="items-list-info">
					<h5>{this.props.volume.title}</h5>
					<p>
						Auteur: {this.props.volume.authors}<br/>
						Editeur: {this.props.volume.publisher}<br/>
						Genre: {this.props.volume.categories}<br/>
						<span>Publié en {moment(this.props.volume.publishedDate).format('YYYY')} </span><br/>
					</p>

					{this.props.volume.averageRating}/5

				</div>
				<div className="clear"></div>
			</Fragment>
        );
    }
}