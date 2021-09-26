// Basic config
port = 4000;
const express = require('express');
const app = express();

// Setting routes: Home and About
app.get('/', (req, res) => {
	// res.render('/web/src/App');
});

app.get('/about', (req, res) => {
	console.log('ABOUT PAGE');
	// res.render('/web/src/Sites/About');
});

app.listen(port, () => {
	console.log('Server started on port ' + port);
});
