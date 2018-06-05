const express = require('express');
const path = require('path');
const cors = require('cors');
const urls = require('./urls.js');
const serverBundlePaths = require('./loader.js')(urls);
const React = require('react');
const ReactDOM = require('react-dom/server');

const app = express();
const port = process.env.PORT || 3001;

const createBody = require('./templates/body.js');
const createScripts = require('./templates/scripts.js');
const createTemplate = require('./templates/main.js');

const createComponents = (serverBundlePaths, props = {}) => {
  console.log(serverBundlePaths);
  return serverBundlePaths.map(path => {
    let component = React.createElement(require(path).default, props);
    return ReactDOM.renderToString(component);
  });
};

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/:locationId', (req, res) => {
  console.log('Fetching server html')
  let components = createComponents(serverBundlePaths, {locationId: req.params.locationId});
  const body = createBody(components);
  const scripts = createScripts(Object.keys(urls));
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(createTemplate(body, scripts));
})

app.listen(port, () => {
  console.log('Listening on port ' + port);
})