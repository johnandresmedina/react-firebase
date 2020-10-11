const withThunk = dispatch => actionOrThunk =>
  typeof actionOrThunk === 'function' ? actionOrThunk(dispatch) : dispatch(actionOrThunk);

export { withThunk };
