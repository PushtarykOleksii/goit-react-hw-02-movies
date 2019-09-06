import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import styles from './MovieCard.module.css';

const MovieCard = ({ items }) => (
  <>
    {items.map(item => (
      <li key={item.id} className={styles.movieCard}>
        <MovieItem
          posterUrl={item.posterUrl}
          title={item.title}
          overview={item.overview}
        />
      </li>
    ))}
  </>
);

MovieCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieCard;
