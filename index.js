const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Sreenivas Lab</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #0a0a0a;
            color: #fff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container { text-align: center; padding: 40px; }
          .badge {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 20px;
            padding: 6px 16px;
            font-size: 13px;
            color: #888;
            display: inline-block;
            margin-bottom: 24px;
          }
          h1 { font-size: 48px; font-weight: 700; margin-bottom: 12px; }
          h1 span { color: #0070f3; }
          .subtitle { color: #888; font-size: 18px; margin-bottom: 40px; }
          .cards {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 40px;
          }
          .card {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 12px;
            padding: 24px 32px;
            min-width: 160px;
          }
          .card .label { color: #888; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
          .card .value { font-size: 20px; font-weight: 600; color: #0070f3; }
          .footer { color: #555; font-size: 13px; }
          .dot { display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-right: 6px; animation: pulse 2s infinite; }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="badge"><span class="dot"></span>Live on DigitalOcean</div>
          <h1>Sreenivas <span>Lab</span></h1>
          <p class="subtitle">Building cool things, one commit at a time.</p>
          <div class="cards">
            <div class="card">
              <div class="label">Server</div>
              <div class="value">Ubuntu 24.04</div>
            </div>
            <div class="card">
              <div class="label">Node</div>
              <div class="value">${process.version}</div>
            </div>
            <div class="card">
              <div class="label">IP</div>
              <div class="value">64.23.168.179</div>
            </div>
            <div class="card">
              <div class="label">Uptime</div>
              <div class="value">${Math.floor(process.uptime())}s</div>
            </div>
          </div>
          <p class="footer">Deployed via GitHub Actions 🚀</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));