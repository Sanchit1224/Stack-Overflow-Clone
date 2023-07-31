const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data })); // here ? is for if data existtx then only it will pass oy=therwise not
      return { ...state, data: action?.data };
    case 'LOGOUT':
       localStorage.clear();
       return {...state, data:null};
      default:
      return state;
  }
};

export default authReducer;
