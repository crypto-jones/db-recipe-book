const express = require('express');
const helmet = require('helmet');
const PORT = process.env.PORT || 8000;
const server = express();
const dishRoutes = require('./routes/dishRoutes');

server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishRoutes);

server.get('/', (req, res) => {
  res.send('API SANITY CHECK');
});

server.listen(PORT, () =>
  console.log(`\n=== API listening on http://localhost:${PORT} ===\n`)
);
