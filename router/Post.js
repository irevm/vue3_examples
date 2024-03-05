export default {
  name: "Post",
  data() {
    return {
      editing: false,
    }
  },
  props: ["post"],
  //emits
  //methods
  mounted(){
    console.log(this.$route.params.id);

    if (this.$route.params.id !== undefined){
      this.editing = true;
    }  
  },  
  template: `
    <div>
      <p v-if="editing">I'm editing</p>
      <p v-else>I'm creating a new post</p>
      <p :id="post.id">{{post.name}}</p>    
    </div>
  `
}