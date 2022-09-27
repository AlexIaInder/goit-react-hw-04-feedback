import PropTypes from 'prop-types';
import css from './Section.module.css';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
