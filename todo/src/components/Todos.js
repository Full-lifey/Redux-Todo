import React from 'react';
import { connect } from 'react-redux';

import { addTodo, markCompleted, deleteTodo } from '../actions';

import './todos.scss';

class Todos extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo({ value: this.state.newTodo, completed: false });
    this.setState({ newTodo: '' });
  };

  markCompleted = (e, index) => {
    e.preventDefault();
    this.props.markCompleted(index);
  };
  deleteTodo = (e, index) => {
    e.preventDefault();
    this.props.deleteTodo(index);
  };

  render() {
    return (
      <div className='todo-wrapper'>
        {this.props.todos.map((todo, index) => {
          return (
            <div
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              onClick={e => this.markCompleted(e, index)}
              key={index}
            >
              <h3>{todo.value}</h3>
              <button onClick={e => this.deleteTodo(e, index)}>X</button>
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
        <button onClick={this.addTodo}>Submit</button>
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
  { addTodo, markCompleted, deleteTodo }
)(Todos);
