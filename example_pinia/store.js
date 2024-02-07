const store = Pinia.defineStore('counter', {
  state: () => ({ 
    count: 0 
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default store