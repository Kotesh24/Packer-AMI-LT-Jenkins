const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running on custom AMI! by using packer workshop deployed successfully thank you packer Build Once Deploy Forever Immutable AMI Deployment with Packer Deploy into live Environment without Rollback');
});
// veera

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
