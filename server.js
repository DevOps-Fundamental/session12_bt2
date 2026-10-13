const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    app: 'release-web-app',
    version: VERSION,
    message: 'Official Docker Release from Git Tag!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - Version: ${VERSION}`);
});
