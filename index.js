const data = require('./redir.json');

const express = require('express'),
	app = express(),
	port = 6699;

app.use(express.static(`${__dirname}/files/`));

data.forEach(dat => {
	app.all(dat.path, (req, res, done) => {
		res.redirect(dat.redir);

		done();
	});
});

app.listen(port, () => {
	console.log(`Express @ ${port} > ACTIVE`);
});
