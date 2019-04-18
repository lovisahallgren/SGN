const routes = require('next-routes');

// Setup router.
module.exports = routes()
  .add('index', '/')
  .add('posts')
  .add('branches')
  .add('information')
  .add('projects')
  .add('contact')
  .add('gdpr')
  // .add( 'single', '/posts/:slug' );
  .add('single', '/branches/:slug');
