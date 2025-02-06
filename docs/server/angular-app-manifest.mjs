
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23637, hash: '8a458955a1854de9403ea37fc79d666c3de42d8a053d75f9decd90869d8f18da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: '6a849e89b5bc768561a36854d60176aee77e8077341c466747d30c9038b423e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46293, hash: 'f8f70b86b615a1d8582e1b2f22844b9e1edc06b155683f8dee8bc1722e075cd7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3XAKVR67.css': {size: 7031, hash: 'Zuz4A+jocZw', text: () => import('./assets-chunks/styles-3XAKVR67_css.mjs').then(m => m.default)}
  },
};
