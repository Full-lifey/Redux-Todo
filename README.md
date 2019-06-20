# React Redux Todo

**[NETLIFY DEPLOYMENT](https://joel-perez-redux-todo.netlify.com/)

## Application Coverage

- Redux
- mapStateToProps
- Actions
- Reducers
 

## The Application

CRUD Functionality covered:

### Create
```
export const addTodo = newTodo => {
  console.log('ran addTodo', newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
```
### Update
```
export const markCompleted = index => {
  return {
    type: MARK_COMPLETED,
    payload: index
  };
};
```
### Delete
```
export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};
