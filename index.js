const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/example', (req, res) => {
 
  // Return them as json
  res.json([1,2,3]);

});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('*',(req,res) => {
  res.write("unknown route")
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Backend server listening on ${port}`);
