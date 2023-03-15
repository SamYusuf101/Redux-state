export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    user: user,
  };
};
