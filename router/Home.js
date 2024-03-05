export default {
  name: "Home",
  //data
  //props
  //emits
  methods: {
    goToPost(){
      this.$router.push("/post/1");    
    }
  },
  template: `
    <div>Home</div>
    <input type="button" value="See post" v-on:click="goToPost">
  `
}