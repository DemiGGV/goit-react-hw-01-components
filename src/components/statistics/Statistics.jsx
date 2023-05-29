import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  //
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(data => {
          return (
            <li key={data.id} className={css.item}>
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
