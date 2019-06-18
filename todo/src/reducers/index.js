import { ADD_TODO, MARK_COMPLETED } from '../actions';

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Sign up for Four-Ball',
      completed: false
    },
    {
      value: 'Clean Kitty Litter',
      completed: false
    }
  ]
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.payload === index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
