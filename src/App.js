import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';

import Filters from './components/Filters';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';

import { sortTasks } from './redux/actions';

class App extends Component {
  render() {
    const { theme, tasks, sortTasks, filter } = this.props;

    return (
      <main className={theme}>
        <div className="bg-body">
          <div className="bg-image"></div>
          <div className=" w-[20.5rem] sm:w-[34rem] mt-[2.55rem] sm:mt-[4.25rem] relative">
            <Header />
            <Input />
            <div className="shadow-xl mt-4 sm:mt-6 rounded-[0.3rem] overflow-hidden">
              {filter === 'all' ? (
                <ReactSortable
                  list={tasks}
                  setList={(newState) => sortTasks(newState)}
                >
                  {tasks.map((task) => (
                    <Task key={task.name} {...task} />
                  ))}
                </ReactSortable>
              ) : (
                tasks
                  .filter((task) => {
                    if (filter === 'active') return task.completed === false;
                    if (filter === 'completed') return task.completed !== false;
                    return true;
                  })
                  .map((task) => <Task key={task.name} {...task} />)
              )}
              <Filters />
            </div>
          </div>
          <p className="drag-drop">Drag and drop to reorder list</p>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.controlTheme.theme,
  tasks: state.todo.tasks,
  filter: state.todo.filter,
});

const mapDispatchToProps = (dispatch) => ({
  sortTasks: (newArr) => dispatch(sortTasks(newArr)),
});

App.propTypes = {
  theme: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  sortTasks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
