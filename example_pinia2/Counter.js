import store from "./store.js";

export default {
  methods: {
    ...Pinia.mapActions(store, ['increment']),
    test(){
      this.increment();
    }
  },
  template: '<button @click="test">+</button>'
}