// Load our .env file
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers
import authRouter from './routes/auth.js';
import eventRouter from './routes/events.js';
import notificationRouter from './routes/notifications.js';
import userRouter from './routes/users.js';
import itemRouter from './routes/items.js';

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(
  cors({ 
    origin: "*"
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port and URl
const PORT = process.env.PORT || 4000;
const HTTP_URL = process.env.HTTP_URL || 'http://localhost:'

// Tell express to use your routers here
app.use('/items', itemRouter);
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/notifications', notificationRouter);

// app.use('/', userRouter);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'views')});
})

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${HTTP_URL}${PORT} - this no longer consumes souls\n`);
});
