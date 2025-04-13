const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs.json');

async function logger(req, res, next) {
    if (req.path === '/favicon.ico') {
        return res.status(204).end();
    }

    fs.readFile(logFilePath, 'utf-8', (err, data) => {
        let logs = [];
        if (!err && data) {
            try {
                logs = JSON.parse(data);
            } catch (error) {
                console.error("Error parsing logs.json:", error);
            }
        }

        const logEntry = {
            index: logs.length + 1,
            client_ip: req.ip || req.connection.remoteAddress,
            client_url: req.get('Referer') || 'Direct Access',
            server_url: req.originalUrl,
            timestamp: new Date().toISOString()
        };

        logs.push(logEntry);

        fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), 'utf-8', (writeErr) => {
            if (writeErr) console.error("Error writing logs.json:", writeErr);
        });

        next();
    });
}

module.exports = logger;