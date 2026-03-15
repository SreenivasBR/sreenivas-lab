const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Sreenivas Lab 🚀</title></head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;background:#0a0a0a;color:#fff">
        <h1>🚀 Sreenivas Lab is LIVE!</h1>
        <p>Running on DigitalOcean Droplet</p>
        <p>IP: 64.23.168.179 | Node: ${process.version}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
