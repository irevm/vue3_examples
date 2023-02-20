export default {
  name: 'Hello',
  template: `
  <div>
    <h1>This is the hello component.</h1>
    <h2>Hello: {{$route.query.message}}</h2>
  </div>
  `
}