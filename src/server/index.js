import https from 'https';
import express from 'express';
import cors from 'cors';
import { Router } from '../routes';
import tlsCredentials from '../../config';

const app = express();

app.disable('x-powered-by');
app.disable('etag');

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
}));

app.use('/', Router);
/*
app.post('/api', (req, res) => {
    const { error } = validateLoginParameters(req);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    return res.send("Yay");

});
*/

const server = https.createServer(tlsCredentials, app);

export { server };
