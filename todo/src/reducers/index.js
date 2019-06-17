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
    default:
      return state;
  }
};
