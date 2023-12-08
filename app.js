const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;
const swaggerSpec = require('./swagger');
const helloRouter = require('./routes/hello');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', helloRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
