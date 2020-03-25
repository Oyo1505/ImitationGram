import React, { Fragment } from 'react';
import {  Link } from "react-router-dom";
import moment from 'moment';
import Review from '../Searching/Review';




class SingleBook extends React.Component {


    constructor(props) {
        super(props);
        this.state = { book: [], active: false }
    }

    componentDidMount = async () => {

        const id_book = this.props.match.params.id;

        const req = await fetch(`https://www.googleapis.com/books/v1/volumes/${id_book}?key=${process.env.REACT_APP_GOOGLE_BOOK_API_KEY}`)

        const res = await req.json();
        this.setState({book: res});


    }
    toggle = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        const book = this.state.book;
        const active = this.state.active
       
        return (

            <Fragment>
					{this.state.book.volumeInfo && 
					<Fragment>	
					
					<header id="book-header">
						<div className="l-container">
							<img src={book.volumeInfo.imageLinks.smallThumbnail} alt="thumbnail-book"/>
							<div className="book-info-head" >
								<h1>{this.state.book.volumeInfo.title}</h1>
								<p></p>
								<ul>
									<li className="item-rating-header">
									{this.state.book.volumeInfo.averageRating &&
										
										<span> {this.state.book.volumeInfo.averageRating}/5</span>
									
									}
									</li>
									<li className="item-header-content" onClick={this.toggle}><button> <i className={active ? 'icon icon-like-red' : 'icon icon-like'} ></i> Like</button></li>
									<li className="item-header-content"> <button><i className='icon icon-edit' ></i> Write </button></li>
								</ul>
							</div>
							<div className='clear'></div>
						</div>
						</header>
						<div className="l-container">

							
						<div id="book-content">
							<ul>
								<li>
									<Link to='/search-app' className="btn btn-back">
									  <i className="icon icon-back"></i>	Retour
									</Link>
								</li>
								<li>Price : {!book.saleInfo.listPrice &&

												<span>Info Non Disponible</span>
											}
											{book.saleInfo.listPrice &&
												<span>{book.saleInfo.listPrice.amount} Euros</span>
											} </li>
								<li>Release Date: {moment(book.volumeInfo.publishedDate).format('YYYY')}</li>
								<li>Genre : {book.volumeInfo.categories} </li>
								<li>Author : {book.volumeInfo.authors}</li>
							</ul>
								{this.state.book.volumeInfo.description}
							</div>

							<Review />
						</div>
						
					</Fragment>
					}

			</Fragment>

        );
    }
}

export default SingleBook;