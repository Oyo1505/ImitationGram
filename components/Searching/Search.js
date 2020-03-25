import React, { Fragment } from 'react';
import Header from '../../containers/Header';
import FilterItems from './FilterItems';
import { Form, FormGroup, FormControl, Container, Row } from 'react-bootstrap';
import GoogleBooksItems from './GoogleBooksItems';
import MoviesItems from './MoviesItems';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            books: [],
            movies: [],
            music: [],
            select: null,
            itemsLength: 0,
            isFetching: false,
        }
    }
    handleChange = async (e) => {
        e.preventDefault();
        var value = e.target.value.replace(/\s/g, "+");
        this.setState({ search: e.target.value, isFetching: true, });


        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${process.env.REACT_APP_GOOGLE_BOOK_API_KEY}`)
            .then(response => response.json())
            .then(json => this.setState({ books: json, isFetching: false, }));


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&query=${value}`)
            .then(response => response.json())
            .then(json => this.setState({ movies: json, isFetching: false, }));

    }
    componentDidMount = () => {

        const json_books = localStorage.getItem("books");
        const json_movies = localStorage.getItem("movies");
        if (json_books !== null && json_movies !== null) {

            const books = JSON.parse(json_books);
            const movies = JSON.parse(json_movies)
            this.setState({ books: books, movies: movies });
        }
    }
    componentDidUpdate = () => {
        const books = JSON.stringify(this.state.books);
        const movies = JSON.stringify(this.state.movies);
        localStorage.setItem("books", books);
        localStorage.setItem("movies", movies);

    }
    handleSelect = value => {
        this.setState({ select: value });
    }

    deleteFilter = (e) => {
        e.preventDefault();
        this.setState({ select: null })
    }
    render() {
        return (
            <Fragment>	
			<aside className="filters-search search-block">
				<h4>Filtres</h4>
				<FilterItems select={this.handleSelect} />
			</aside>
				<Container className="container-api search-block">
						<div id="search-api">
							<Form>
								<FormGroup>
									<FormControl type="text" className="wrap-input2 validate-input" data-validate="Vous devez remplir le champs" name="search" data-name="name" onChange={this.handleChange} value={this.state.search} id="search-input" placeholder="Votre recherche d'une oeuvre"/> 		  
  								  </FormGroup>
							</Form>
						<br />
								{this.state.select && 
									<button className="btn-filter">{this.state.select} <span onClick={this.deleteFilter}>x</span> </button>
								}
								{!this.state.isFetching && this.state.search.length === 0 && this.state.books.trim === '' && this.state.books === null &&
									<p>Entrez le nom d'un oeuvre</p>
								}
								{this.state.isFetching &&
									<p>Loading...</p>
								}
								{  this.state.books.items && this.state.books.items !== undefined && this.state.books.length !== 0 &&
							
									<GoogleBooksItems select={this.state.select}  books={this.state.books.items} />	
								}						
								<br />	
								{!this.state.isFetching && this.state.search.length === 0 && this.state.movies.trim === '' &&
									<p>Entrez le nom d'un oeuvre</p>
								}
								{this.state.isFetching &&
									<p>Loading...</p>
								}
								{  this.state.movies.results !== undefined &&  this.state.movies.length !== 0 &&	
									<MoviesItems select={this.state.select} movies={this.state.movies.results}   />	
								}			     					
							</div>	
							<br />
							<div  id="music-results">	
								<br />
								<Row>
											
								</Row>
							</div>	
			</Container>
			<div className="clear"></div>
			</Fragment>
        );
    }
}
export default Search;