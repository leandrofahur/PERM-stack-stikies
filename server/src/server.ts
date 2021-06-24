import express from 'express';
import createConnection from './database';
import router from './routes';
const app = express();
createConnection();

app.use(express.json());
app.use('/notes', router);

app.listen(5000, () => {
  console.log('Server up and running on port 5000');
});
