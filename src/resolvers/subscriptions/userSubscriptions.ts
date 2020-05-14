//todo: prisma 2 missisng subscription....
export default {
  newUser: {
    subscribe: () => {},
    resolve: (payload: void) => {
      return payload;
    },
  }
};