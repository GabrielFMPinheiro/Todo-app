import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearCompleted, filterTasks } from '../redux/actions';

class Filters extends Component {
  changeStyle = ({ target }) => {
    document.querySelector('.active-filter').classList.remove('active-filter');
    target.classList.add('active-filter');
  };

  render() {
    const { tasks, filterTasks, clear } = this.props;
    const pendingTasks = tasks.reduce((acc, cur) => {
      return cur.completed !== true ? acc + 1 : acc;
    }, 0);

    return (
      <section className="filters-container">
        <div className="">
          <p className="quantity-task">
            {pendingTasks === 1
              ? `${pendingTasks} item left`
              : `${pendingTasks} items left`}
          </p>
        </div>

        <div className="filter-container">
          <button
            className="btn-filter active-filter"
            onClick={(e) => {
              this.changeStyle(e);
              filterTasks('all');
            }}
          >
            All
          </button>
          <button
            className="btn-filter"
            onClick={(e) => {
              this.changeStyle(e);
              filterTasks('active');
            }}
          >
            Active
          </button>
          <button
            className="btn-filter"
            onClick={(e) => {
              this.changeStyle(e);
              filterTasks('completed');
            }}
          >
            Completed
          </button>
        </div>

        <div className="">
          <button className="clear-btn" onClick={clear}>
            Clear Completed
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  filterTasks: (name) => dispatch(filterTasks(name)),
  clear: () => dispatch(clearCompleted()),
});

Filters.propTypes = {
  tasks: PropTypes.array.isRequired,
  filterTasks: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
