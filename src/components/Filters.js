import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearCompleted, filterTasks } from '../redux/actions';

class Filters extends Component {
  changeStyle = ({ target }) => {
    document.querySelector('.active-filter').classList.remove('active-filter');
    target.classList.add('active-filter');
  };

  render() {
    const { tasks, filterTasks, clear } = this.props;
    const length = tasks.length;
    return (
      <section className="filters-container">
        <div className="">
          <p className="quantity-task">
            {length === 1 ? `${length} item left` : `${length} items left`}
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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
