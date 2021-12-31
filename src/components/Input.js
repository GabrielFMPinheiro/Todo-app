import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import check from '../images/icon-check.svg';

import { addTask } from '../redux/actions';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      completed: false,
    };
  }

  render() {
    const { name, completed } = this.state;
    const { addTask } = this.props;

    return (
      <section
        className="input-box"
        onKeyUp={({ key }) =>
          name !== '' &&
          key === 'Enter' &&
          addTask(this.state) &&
          this.setState({ name: '' })
        }
      >
        <div
          className={`check ${completed ? 'check-active' : null}`}
          onClick={() =>
            this.setState((prevState) => ({ completed: !prevState.completed }))
          }
        >
          {completed && (
            <img src={check} alt="check icon" className="check-img" />
          )}
        </div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="input"
          value={name}
          onChange={({ target }) => this.setState({ name: target.value })}
        />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

Input.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Input);
