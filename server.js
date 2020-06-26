'use strict';

const express = require('express');
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
});
const createApp = require('./src/app');

const server = express();

server.get('*', (req, res) => {
    const app = createApp();
    
    const context = {
        title: "Vue SSR Tutorial"
    };

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return
        }
        res.send(html);
    });
});

server.listen(4000, () => {
    console.log("Server started");
});