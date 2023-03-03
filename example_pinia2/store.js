const store = Pinia.defineStore('counter', {
  state: () => ({ 
    count: 0,
    list: [] 
  }),
  actions: {
    increment() {
      this.count++;
    },
    addItem:function(item){
      this.list.push(item);
    },
    deleteItem:function(item){
      let position = this.list.indexOf(item);
      this.list.splice(position, 1);
    }
  },
});

export default store