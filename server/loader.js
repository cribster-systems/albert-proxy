const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const exists = require('bluebird').promisify(fs.stat);

const fetchBundles = (urls, require) => {
  const type = require ? 'server' : 'client';
  const relativePaths = [];
  Object.keys(urls).forEach(name => {
    const relativePath = `../public/${name}-${type}.js`;
    relativePaths.push(relativePath);
    const filename = path.join(__dirname, relativePath);
    exists(filename)
      .catch(err => {
        if (err.code === 'ENOENT') {
          const url = urls[name][type];
          console.log(`Fetching: ${url}`);
          // see: https://www.npmjs.com/package/node-fetch
          fetch(url)
            .then(res => {
              const dest = fs.createWriteStream(filename);
              res.body.pipe(dest);
            });
        } else {
          console.log('WARNING: Unknown fs error');
        }
      });
  });
  return relativePaths;
}

module.exports = (urls) => {
  const relativePaths = fetchBundles(urls, true);
  fetchBundles(urls, false);
  console.log(relativePaths);
  return relativePaths;
}