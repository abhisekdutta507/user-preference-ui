export const APIStatus = () => ({
  default: {
    isCalled: false,
    isLoading: false,
    isCompleted: false,
  },
  loading: {
    isCalled: true,
    isLoading: true,
    isCompleted: false,
  },
  completed: {
    isCalled: true,
    isLoading: false,
    isCompleted: true,
  }
});
