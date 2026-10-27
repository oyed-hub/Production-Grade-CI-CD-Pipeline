const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Production CI/CD Pipeline API",
        status: "running"
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

// Application information endpoint
app.get("/api/info", (req, res) => {
    res.status(200).json({
        application: "Production CI/CD Pipeline",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    });
});

// Start server only when this file is executed directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;