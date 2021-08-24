import express, { Application } from 'express';

import { server } from '../config';
import routes from '../server/routes';

const { port } = server;
const app: Application = express();

app.use(express.json());
app.use('/', routes);


app.listen(port, async () => {
    console.log(`Listening http://localhost:${port}`)
});

