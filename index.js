const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Add Two Numbers API
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;

    // Validate inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({
            error: 'Invalid input: num1 and num2 should be numbers',
        });
    }

    const result = num1 + num2;
    res.json({ result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for potential unit testing
