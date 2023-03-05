import store from "./store.js";

export default {
  methods: {
    ...Pinia.mapActions(store, ['increment'])
  },
  template: '<button @click="increment">+</button>'
}