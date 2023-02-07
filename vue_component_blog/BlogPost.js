export default {
  name: 'BlogPost',
  props: ['post'],
  template: `
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <button v-on:click="$emit('enlarge-text', 0.1)">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
  `,
}