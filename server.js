const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express ();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default request for any other request (NOT FOUND) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});