// Importing required modules
const http = require('http');

// Define port
const PORT = 3000;

// Creating a server instance
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World!"
    res.end('Hello World!\n');
});

// Start listening on the specified port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

