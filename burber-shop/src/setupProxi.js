const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mongo.php',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace with your PHP server's address and port
      changeOrigin: true,
    })
  );
};
