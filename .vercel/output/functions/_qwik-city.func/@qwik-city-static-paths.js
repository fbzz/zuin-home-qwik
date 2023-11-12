const staticPaths = new Set(["/_headers","/angular.svg","/fabio.jpg","/favicon.svg","/fonts/poppins-400.woff2","/fonts/poppins-500.woff2","/fonts/poppins-700.woff2","/github.svg","/instagram.svg","/js.svg","/manifest.json","/meetup.svg","/nodejs.svg","/q-manifest.json","/react.svg","/robots.txt","/service-worker.js","/sitemap.xml","/typescript.svg"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };