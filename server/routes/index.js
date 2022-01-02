import express from 'express';
var router = express.Router();
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from '../component/appComponent';
import React from 'react';
import fs from 'fs';

/* GET home page. */
router.get('/', function (req, res, next) {
  const indextFile = path.resolve('./public/index.html');
  console.info(indextFile);
  fs.readFile(indextFile, (err, data)=>{
    console.info(data);
    const compiledString = ReactDOMServer.renderToString(<App name="santhanam"/>);
    //res.send(data.replace('<div id="root"></div>',`<div id="root">${compiledString}</div>`)); 
    res.send(compiledString);
  });
});

export default router;
