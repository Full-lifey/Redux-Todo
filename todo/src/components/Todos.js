import React from 'react';
import { connect } from 'react-redux';

class Todos extends React.Component {
  state = {
    newTodo: ''
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
          value={this.state.noTodo}
          name='newTodo'
        />
        <button>Submit</button>
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
  {}
)(Todos);
