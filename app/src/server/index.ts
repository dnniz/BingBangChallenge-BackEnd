import express, { Application } from 'express';
import http from 'http';

import config from '../config';

const routes = require('./routes');

const { server: { port } } = config;
const app: Application = express();
const server = http.createServer(app);

app.use(express.json());
app.use('/', routes);


app.listen(port, async () => {
    console.log(`Listening http://localhost:${port}`)
});

