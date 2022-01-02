import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import App from '../../client/app';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const indextFile = path.resolve('./dist/public/index.html');
  fs.readFile(indextFile, 'utf8', (err, data) => {
    const compiledString = ReactDOMServer.renderToString(<App name="from" />);
    const resData = data.replace('<div id="root"></div>', `<div id="root">${compiledString}</div>`);
    res.send(resData);
  });
});

export default router;
