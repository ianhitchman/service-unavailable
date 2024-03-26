const express = require('express');
const app = express();

// Middleware to return 503 for all requests
app.use((req, res) => {
    res.status(503).send('Service Unavailable');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
