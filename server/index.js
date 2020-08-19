import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import "isomorphic-fetch";
import Loadable from 'react-loadable';


var router = express.Router();


import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();


//app.get("*",)

app.get('/', (req, res, next) => {

  fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
  .then(response=>response.json())
  .then(initialData =>{
  const app = ReactDOMServer.renderToString(<App  {...initialData} initialData={initialData}/>);

  let initialDataA= JSON.stringify(initialData);
  //console.log(initialDataA);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<script>window.__APP_INITIAL_STATE__ =${initialDataA} </script><div id="root">${app}</div>`),

    );
  });
});
});

app.use(express.static('./build'));

Loadable.preloadAll().then(() => {
    app.listen(PORT, () => {
    console.log('app now listening on port', PORT);
  });
 });
