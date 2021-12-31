import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

import { completeTask, removeTask } from '../redux/actions';

class Task extends Component {
  render() {
    const { name, completed, removeTask, completeTask } = this.props;

    return (
      <div
        className="task-container"
        onMouseEnter={({ target }) => {
          target.lastElementChild !== null &&
            target.lastElementChild.classList.remove('sm:hidden');
        }}
        onMouseLeave={({ target }) => {
          target.lastElementChild !== null &&
            target.lastElementChild.classList.add('sm:hidden');
        }}
      >
        <div
          className={`check ${completed ? 'check-active' : null}`}
          onClick={() => completeTask(name)}
        >
          {completed && (
            <img src={check} alt="check icon" className="check-img" />
          )}
        </div>
        <p
          onClick={() => completeTask(name)}
          className={`task ${
            completed && 'line-through decoration opacity-30'
          }`}
        >
          {name}
        </p>
        <div
          className="ml-auto cursor-pointer sm:hidden cross-box"
          onClick={() => removeTask(name)}
        >
          <img
            src={cross}
            alt="cross icon"
            className="w-[0.8rem] sm:w-4 h-[0.8rem] sm:h-4"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (name) => dispatch(removeTask(name)),
  completeTask: (name) => dispatch(completeTask(name)),
});

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Task);
