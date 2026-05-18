const PROXY_CONFIG = [
  {
    context: ['/grafana'],
    target: 'http://localhost:3000',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    // Keep the /grafana prefix so Grafana can serve its assets from the same subpath.
    // Also add `root_url = http://localhost:4200/grafana` and `serve_from_sub_path = true`
    // in Grafana config if you use this subpath.
    onProxyRes(proxyRes) {
      if (proxyRes.headers) {
        delete proxyRes.headers['x-frame-options'];
        delete proxyRes.headers['X-Frame-Options'];
        delete proxyRes.headers['content-security-policy'];
        delete proxyRes.headers['Content-Security-Policy'];
      }
    }
  }
];

module.exports = PROXY_CONFIG;
