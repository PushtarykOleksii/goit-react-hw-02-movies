import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import stiles from './MovieGrid.module.css';

export default class MovieGrid extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string,
        overview: PropTypes.string.isRequired,
      }).isRequired,
    ),
  };

  state = {
    movies: this.props.items,
    search: '',
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = (movies, search) => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );
  };

  render() {
    const { movies, search } = this.state;
    const searchMovies = this.handleSearch(movies, search);
    return (
      <>
        <SearchBar onChange={this.handleChange} />
        {searchMovies.length > 0 ? (
          <ul className={stiles.movieGrid}>
            <MovieCard items={searchMovies} />
          </ul>
        ) : (
          <p className={stiles.text}>No matching results!</p>
        )}
      </>
    );
  }
}
