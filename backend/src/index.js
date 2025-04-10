const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ fruits: ['apple', 'orange', 'banana'] });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
