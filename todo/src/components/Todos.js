import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class Todos extends React.Component {
  state = {
    newTodo: '',
    completed: false
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <div>
              <div className='todo-wrapper'>
                <h3>{todo.value}</h3>
              </div>
            </div>
          );
        })}
        <input
          type='text'
          placeholder='New Todo'
          onChange={this.handleChanges}
          value={this.state.newTodo}
          name='newTodo'
        />
        <button
          onClick={() =>
            this.props.addTodo({ value: this.state.newTodo, completed: false })
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(Todos);
