module.exports = (names) => `
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script> 
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  ${names.map(name => 
    `<script src="${name}-client.js"></script>`
  ).join('\n')}
  <script>
    let locationId = window.location.pathname.split('/')[1];
    ${names.map(name => `
      console.log(${name});
      ReactDOM.hydrate(
        React.createElement(${name}, {locationId: locationId}),
        document.getElementById('${name}')
      );
    `).join('\n')}
  </script>
`