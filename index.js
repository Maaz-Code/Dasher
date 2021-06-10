const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'))
//all static files like index.html, style.css, and images will be called from above command at once as they all in public folder.

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
