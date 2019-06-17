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
    default:
      return state;
  }
};
