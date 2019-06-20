export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = newTodo => {
  console.log('ran addTodo', newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const markCompleted = index => {
  return {
    type: MARK_COMPLETED,
    payload: index
  };
};

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};
