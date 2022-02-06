const express = require('express')
const path = require("path");
const app = express();
const PORT = 3001;

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');






app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname,'./public/notes.html'));
})

app.get('/notes', (req, res) => {
    res.json(notes);
  });




app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  })


