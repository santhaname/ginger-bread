import express from 'express';
var router = express.Router();
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from '../../client/app';
import React from 'react';
import fs from 'fs';

/* GET home page. */
router.get('/', function (req, res, next) {
  const indextFile = path.resolve('./dist/public/index.html');
  console.info(indextFile);
  fs.readFile(indextFile, 'utf8', (err, data)=>{
    console.info(err, data);
    const compiledString = ReactDOMServer.renderToString(<App name={'from'}/>);
    const resData = data.replace('<div id="root"></div>',`<div id="root">${compiledString}</div>`);
    console.info(resData);
    res.send(resData); 
    //res.send(compiledString);
  });
});

export default router;
