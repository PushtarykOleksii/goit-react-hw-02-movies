import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieItem = ({ posterUrl, title, overview }) => (
  <>
    <img src={posterUrl} alt={title} className={styles.movieCardImg} />
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{overview}</p>
    </div>
  </>
);

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieItem;
