export default {
  name: 'Goodbye',
  emits: ['changing'],
  methods:{
    gotohello: function(){
      this.$emit('changing', "Changing from Goodbye");
      this.$router.push("/hello?message=Hi, I'm coming from Goodbye component");
    }
  },
  template: `
  <div>
      <h1>This is the Goodbye component</h1>
      <h2>{{$route.params.message}}</h2>
      <p v-if="$route.params.name">{{ $route.params.name }}</p>
      <input type="button" value="Go to hello" @click="gotohello()">
  </div>
  `
}