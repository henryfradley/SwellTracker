const express = require('express');
const app = express();
const path = require('path');
const port = 3000;




app.use(express.static(path.resolve(__dirname, '../client/public')));



//


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

