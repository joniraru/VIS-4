
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello World and group 621!!");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));