export const createProject = (project) => {
  //   return {
  //     type: "ADD_RPOJECT",
  //     project: project,
  //   };

  return (dispatch, getState) => {
    //1. make async call to database

    //2. after call complete, dispatch
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
