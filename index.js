const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен и доступен по http://localhost:${port}`);
});
